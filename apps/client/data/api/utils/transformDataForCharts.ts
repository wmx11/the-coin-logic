import axios from 'axios';
import { MAX_AMOUNT_OF_ENTRIES_FOR_TRANSFORM } from 'constants/charts';
import { formatISO, subDays } from 'date-fns';
import routes from 'routes';
import { Network, prismaClient, MarketStat, Project as ProjectPrisma } from 'tcl-packages/prismaClient';
import { Project, Promotion, SocialStat } from 'types';
import { TransformedChartsData } from 'types/Charts';
import { CustomTrackersResponse } from 'types/MarketData';
import { Votes } from 'types/Votes';
import { getLogoLink, isPromoted } from 'utils/utils';

type MarketMetrics<T> = T extends MarketStat ? MarketStat : SocialStat;

export const transformDataForMetricsCharts = <T>(data: MarketMetrics<T>[], selector: keyof T) => {
  return data?.reduce(
    (obj: TransformedChartsData, curr: MarketMetrics<T>, index: number) => {
      if (index > 0 && data.length > MAX_AMOUNT_OF_ENTRIES_FOR_TRANSFORM && index % 10 === 0) {
        obj.data.push([
          new Date((curr?.dateAdded as Date) || '').getTime() as number,
          curr[selector as keyof MarketMetrics<T>] as unknown as number,
        ]);
      } else {
        obj.data.push([
          new Date((curr?.dateAdded as Date) || '').getTime() as number,
          curr[selector as keyof MarketMetrics<T>] as unknown as number,
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

export const transformCustomTrackerDataForMetricsCharts = <T>(data: MarketMetrics<T>[], trackerId: string) => {
  return data?.reduce(
    (obj: TransformedChartsData, curr: MarketMetrics<T>, index: number) => {
      const customTrackers = (curr as MarketMetrics<T> & { customTrackers: CustomTrackersResponse[] })?.customTrackers;
      if (index > 0 && data.length > MAX_AMOUNT_OF_ENTRIES_FOR_TRANSFORM && index % 10 === 0) {
        obj.data.push([
          new Date((curr?.dateAdded as Date) || '').getTime() as number,
          parseFloat((customTrackers?.find((item) => item?.id === trackerId)?.value as string) || '0') || 0,
        ]);
      } else {
        obj.data.push([
          new Date((curr?.dateAdded as Date) || '').getTime() as number,
          parseFloat((customTrackers?.find((item) => item?.id === trackerId)?.value as string) || '0') || 0,
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

  for (const project of projects) {
    const [marketStats, weekStats] = await Promise.all([
      prismaClient?.marketStat.findFirst({
        where: {
          projectId: project?.id || '',
        },
        orderBy: {
          dateAdded: 'desc',
        },
        select: {
          price: true,
          priceChange24: true,
          priceChange24Percentage: true,
          marketCap: true,
          marketCapChange24: true,
          marketCapChange24Percentage: true,
          holders: true,
          holdersChange24: true,
          holdersChange24Percentage: true,
          avgHoldings: true,
          avgHoldingsChange24: true,
          avgHoldingsChange24Percentage: true,
        },
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

    const sparkline: number[] = [];

    if (weekStats && weekStats.length > 0) {
      weekStats.forEach((item, index) => {
        if (index > 0 && index % 10 === 0 && item.price) {
          sparkline.push(item.price as number);
        }
      });
    }

    const network = project.network as Network;

    data.push({
      ...project,
      isPromoted: isPromoted(project?.promotion as Promotion),
      network: {
        name: network?.name,
        logo: {
          url: getLogoLink(network?.logo_id as string, network?.logo_extension as string),
        },
      },
      ...marketStats,
      sparkline,
    });
  }

  data.sort((a, b) => {
    if (isPromoted(a?.promotion as Promotion)) {
      return -1;
    }

    if (isPromoted(b?.promotion as Promotion)) {
      return 1;
    }

    return (b?.marketCap as number) || 0 - (a?.marketCap as number) || 0;
  });

  return { data, count: projects.length };
};

export type DataForProjectsTable = Awaited<ReturnType<typeof transformDataForProjectsTable>>;

export const transformDataForUpcomingProjectsTable = async (projects: Project[]) => {
  if (!projects || projects.length === 0) {
    return null;
  }

  const data = [];

  for (const project of projects) {
    const [socialStats, votes] = await Promise.all([
      prismaClient?.socialStat.findFirst({
        where: {
          projectId: project?.id || '',
        },
        orderBy: {
          dateAdded: 'desc',
        },
        select: {
          twitter: true,
          twitterChange24: true,
          twitterChange24Percentage: true,
          discord: true,
          discordChange24: true,
          discordChange24Percentage: true,
          telegram: true,
          telegramChange24: true,
          telegramChange24Percentage: true,
        },
      }),
      axios.post(routes.api.votes.getVotes, {
        projectId: project.id,
        type: 'vote',
        isCheck: true,
      }),
    ]);

    const network = project.network as Network;
    const votesData = votes?.data?.data?.votes as Votes;

    data.push({
      ...project,
      isPromoted: isPromoted(project?.promotion as Promotion),
      network: {
        name: network?.name,
        logo: {
          url: getLogoLink(network?.logo_id as string, network?.logo_extension as string),
        },
      },
      ...socialStats,
      ...votesData,
      order: 0,
      count: projects.length,
    });
  }

  data.sort((a, b) => {
    if (isPromoted(a?.promotion as Promotion)) {
      return -1;
    }

    if (isPromoted(b?.promotion as Promotion)) {
      return 1;
    }

    return (b?.total * (b.positivePercentage / 100) || 0) - (a?.total * (a.positivePercentage / 100) || 0);
  });
  data.forEach((item, index) => (item.order = index + 1));
  return data;
};

export type DataForUpcomingProjectsTable = Awaited<ReturnType<typeof transformDataForUpcomingProjectsTable>>;

export const transformDataForTrendingProjects = async (projects: MarketStat[]) => {
  if (!projects || projects.length === 0) {
    return null;
  }

  const data = [];

  for (const projectData of projects) {
    const project = projectData as MarketStat & { project: { promotion: Promotion } & ProjectPrisma };

    const votes = await axios.post(routes.api.votes.getVotes, {
      projectId: project?.project?.id,
      type: 'vote',
      isCheck: true,
      isStartOfDay: true,
    });

    data.push({
      id: project?.project?.id,
      name: project?.project?.name,
      slug: project?.project?.slug,
      isPromoted: isPromoted(project?.project?.promotion as Promotion),
      logo: getLogoLink(project?.project?.logo_id as string, project?.project?.logo_extension as string),
      ...votes?.data?.data?.votes,
      change: project?.priceChange24Percentage,
    });
  }

  data.sort(
    (a, b) => (b?.change * (b.positivePercentage / 100) || 0) - (a?.change * (a.positivePercentage / 100) || 0),
  );
  return data;
};

export type DataForTrendingProjects = Awaited<ReturnType<typeof transformDataForTrendingProjects>>;

export const transformDataForNftProjects = async (projects: Project[]) => {
  if (!projects || projects.length === 0) {
    return null;
  }

  const data = [];

  for (const project of projects) {
    const [marketStats, socialStats] = await Promise.all([
      prismaClient?.marketStat.findFirst({
        where: {
          projectId: project?.id || '',
        },
        orderBy: {
          dateAdded: 'desc',
        },
        select: {
          salesVolume: true,
          salesVolumeChange24: true,
          salesVolumeChange24Percentage: true,
          marketCap: true,
          marketCapChange24: true,
          marketCapChange24Percentage: true,
          holders: true,
          holdersChange24: true,
          holdersChange24Percentage: true,
          avgHoldings: true,
          avgHoldingsChange24: true,
          avgHoldingsChange24Percentage: true,
        },
      }),
      prismaClient?.socialStat.findFirst({
        where: {
          projectId: project?.id || '',
        },
        orderBy: {
          dateAdded: 'desc',
        },
        select: {
          twitter: true,
          twitterChange24: true,
          twitterChange24Percentage: true,
          discord: true,
          discordChange24: true,
          discordChange24Percentage: true,
        },
      }),
    ]);

    const network = project.network as Network;

    data.push({
      ...project,
      isPromoted: isPromoted(project?.promotion as Promotion),
      network: {
        name: network?.name,
        logo: {
          url: getLogoLink(network?.logo_id as string, network?.logo_extension as string),
        },
      },
      ...marketStats,
      ...socialStats,
    });
  }

  data.sort((a, b) => {
    if (isPromoted(a?.promotion as Promotion)) {
      return -1;
    }

    if (isPromoted(b?.promotion as Promotion)) {
      return 1;
    }

    return ((b?.marketCap as number) || 0) - ((a?.marketCap as number) || 0);
  });
  return data;
};

export type DataForNFTProjects = Awaited<ReturnType<typeof transformDataForNftProjects>>;
