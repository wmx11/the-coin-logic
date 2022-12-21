import { startOfToday, startOfYesterday } from 'date-fns';
import { getProjectsCount } from '../project';
import getChangesPartial from 'utils/getChangesPartial';
import { getLogoLink } from 'utils/utils';
import prisma from '../../prisma';
import { uniqBy } from 'lodash';

export const getTrendingProjects = async (limit = 3) => {
  const count = await getProjectsCount();

  const marketStatsToday = prisma?.marketStat.findMany({
    select: {
      price: true,
      project: {
        select: {
          id: true,
          name: true,
          slug: true,
          logo_id: true,
          logo_extension: true,
          votes: {
            where: {
              type: {
                equals: 'vote',
              },
              vote: {
                equals: 1,
              },
              dateAdded: {
                gte: startOfToday(),
              },
            },
          },
        },
      },
    },
    orderBy: {
      dateAdded: 'desc',
    },
    where: {
      project: {
        enabled: true,
      },
    },
    take: count,
  });

  const marketStatsYesterday = prisma?.marketStat.findMany({
    select: {
      price: true,
      project: {
        select: {
          id: true,
          name: true,
          slug: true,
          logo_id: true,
          logo_extension: true,
        },
      },
    },
    where: {
      dateAdded: {
        lt: startOfYesterday(),
      },
      project: {
        enabled: true,
      },
    },
    orderBy: {
      dateAdded: 'desc',
    },
    take: count,
  });

  const [today, yesterday] = await Promise.all([marketStatsToday, marketStatsYesterday]);

  type Results = { id: string; name: string; slug: string; logo: string; change: number; votes: number }[];

  const results = today
    ?.reduce((arr, curr) => {
      const yesterdayData = yesterday?.find((item) => item?.project?.id === curr?.project?.id);
      const getChanges = getChangesPartial(curr, yesterdayData);

      const change = getChanges('price').priceChange.percentage;

      if (change && change !== Infinity) {
        arr.push({
          id: curr.project?.id as string,
          name: curr?.project?.name as string,
          slug: curr?.project?.slug as string,
          logo: getLogoLink(curr?.project?.logo_id as string, curr.project?.logo_extension as string),
          votes: curr?.project?.votes?.length || 0,
          change,
        });
      }

      return arr;
    }, [] as Results)
    .sort((a, b) => b.change + b.votes / 2 - (a.change + a.votes / 2))
    .slice(0, limit);

  return uniqBy(results, 'id');
};
