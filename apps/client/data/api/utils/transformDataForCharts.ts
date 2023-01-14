import { MAX_AMOUNT_OF_ENTRIES_FOR_TRANSFORM } from 'constants/charts';
import { endOfYesterday, formatISO, subDays } from 'date-fns';
import { prismaClient } from 'tcl-packages/prismaClient';
import { MarketStat, Project, SocialStat } from 'types';
import { TransformedChartsData } from 'types/Charts';
import getChangesPartial from 'utils/getChangesPartial';
import { getLogoLink } from 'utils/utils';

export const transformDataForMetricsCharts = <T extends MarketStat | SocialStat>(data: T[], selector: keyof T) => {
  return data?.reduce(
    (obj: TransformedChartsData, curr: T, index: number) => {
      if (index > 0 && data.length > MAX_AMOUNT_OF_ENTRIES_FOR_TRANSFORM && index % 10 === 0) {
        obj.data.push([
          new Date((curr?.dateAdded as Date) || '').getTime() as number,
          curr[selector as keyof T] as number,
        ]);
      } else {
        obj.data.push([
          new Date((curr?.dateAdded as Date) || '').getTime() as number,
          curr[selector as keyof T] as number,
        ]);
      }

      if (
        curr?.annotation &&
        (curr?.annotation?.title || curr?.annotation?.title !== '...') &&
        curr?.annotation?.description
      ) {
        obj.annotation.push({
          x: new Date(curr?.dateAdded).getTime(),
          title: curr?.annotation?.title,
          text: curr?.annotation?.description,
          events: {
            click: () => {
              if (curr?.annotation?.href) {
                window.open(curr?.annotation?.href, '__blank');
              }
            },
          },
        });
      }

      return obj;
    },
    { data: [], annotation: [] } as TransformedChartsData,
  );
};

export const transformDataForProjectsTable = async (projects: Project[]) => {
  if (!projects || projects.length === 0) {
    return null;
  }

  const data = [];

  const selectors = {
    select: {
      price: true,
      marketCap: true,
      holders: true,
      avgHoldings: true,
    },
  };

  for (const project of projects) {
    const [currentMarketStats, lastDayMarketStats, weekStats] = await Promise.all([
      prismaClient?.marketStat.findFirst({
        where: {
          projectId: project?.id || '',
        },
        orderBy: {
          dateAdded: 'desc',
        },
        ...selectors,
      }),
      prismaClient?.marketStat.findFirst({
        where: {
          projectId: project?.id || '',
          dateAdded: {
            gte: formatISO(endOfYesterday()),
          },
        },
        ...selectors,
      }),
      prismaClient?.marketStat.findMany({
        where: {
          projectId: project?.id || '',
          dateAdded: {
            gte: formatISO(subDays(new Date(), 7)),
          },
        },
        orderBy: {
          dateAdded: 'desc',
        },
        select: {
          price: true,
        },
      }),
    ]);

    const getChanges = getChangesPartial(currentMarketStats || {}, lastDayMarketStats || currentMarketStats || {});

    const changes = {};
    const sparkline: number[] = [];

    if (currentMarketStats) {
      Object.keys(currentMarketStats).forEach((key) => {
        Object.assign(changes, { ...getChanges(key) });
      });
    }

    if (weekStats && weekStats.length > 0) {
      weekStats.forEach((item, index) => {
        if (index > 0 && index % 65 === 0 && item.price) {
          sparkline.push(item?.price as number);
        }
      });
    }

    data.push({ ...project, ...currentMarketStats, ...changes, count: projects.length, sparkline });
  }

  return data;
};

export type DataForProjectsTable = typeof transformDataForProjectsTable;
