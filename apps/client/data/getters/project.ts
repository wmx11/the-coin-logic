import { formatISO, startOfYesterday } from 'date-fns';
import { prismaClient } from 'tcl-packages/prismaClient';
import { MarketStat, Project } from 'types';
import { ProjectWithMarketStatsAndChanges } from 'types/Project';
import getChangesPartial from 'utils/getChangesPartial';
import { prepareCustomTrackers } from 'utils/prepareCustomTrackers';
import { getAveragesAndMedians, getLogoLink } from 'utils/utils';
import {
  GET_ENABLED_AND_LISTED_PROJECTS,
  GET_ENABLED_PROJECTS_FOR_FILTERING,
  GET_MARKETSTATS_BY_PROJECT_ID_FOR_TABLE,
  GET_PREVIOUS_DAY_MARKET_STATS,
  GET_PROJECTS_BY_USER_EMAIL,
  GET_PROJECTS_COUNT,
  GET_PROJECT_AND_MARKET_STATS_BY_ID,
  GET_PROJECT_AVERAGE_MARKET_CHANGE_FOR_PERIOD_OF_TIME,
  GET_PROJECT_ID_BY_SLUG,
  MARKET_STAT_CHANGES,
} from './constatnts/project';
import { getData } from './getters';

export const getProjectsByUserEmail = async (email: string) => {
  const { user } = await getData({
    query: GET_PROJECTS_BY_USER_EMAIL,
    variables: { email },
    fetchPolicy: 'network-only',
  });
  return user?.projects || null;
};

export const getEnabledAndListedProjects = async () => {
  const { projects } = await getData({
    query: GET_ENABLED_AND_LISTED_PROJECTS,
    fetchPolicy: 'network-only',
  });
  return projects;
};

export const getEnabledAndListedProjectsForFiltering = async () => {
  const { projects } = await getData({
    query: GET_ENABLED_PROJECTS_FOR_FILTERING,
    fetchPolicy: 'network-only',
  });
  return projects;
};

export const getProjectsCount = async () => {
  const { projectsCount } = await getData({ query: GET_PROJECTS_COUNT, fetchPolicy: 'network-only' });
  return projectsCount;
};

export const getProjectIdBySlug = async (slug: string) => {
  const { projects } = await getData({
    query: GET_PROJECT_ID_BY_SLUG,
    fetchPolicy: 'network-only',
    variables: {
      slug,
    },
  });

  return projects[0].id || null;
};

export const getProjectPreviousDayMarketStatsByProjectIdAndDate = async (projectId: string, date: string) => {
  if (!projectId || !date) {
    return null;
  }

  const lastDay = formatISO(startOfYesterday());

  const { marketStats, socialStats } = await getData({
    query: GET_PREVIOUS_DAY_MARKET_STATS,
    variables: { projectId, lastDay },
    fetchPolicy: 'network-only',
  });
  return { marketStats: marketStats[0], socialStats: socialStats[0] };
};

export const getProjectsForTable = async () => {
  const enabledAndListedProjects: Project[] = await getEnabledAndListedProjects();
  const projects: MarketStat[] = [];

  for (const project of enabledAndListedProjects) {
    const { marketStats: todayArr }: { marketStats: MarketStat[] } = await getData({
      query: GET_MARKETSTATS_BY_PROJECT_ID_FOR_TABLE,
      fetchPolicy: 'network-only',
      variables: {
        projectId: project.id,
      },
    });

    const { marketStats: yesterdayArr }: { marketStats: MarketStat[] } = await getData({
      query: GET_MARKETSTATS_BY_PROJECT_ID_FOR_TABLE,
      fetchPolicy: 'network-only',
      variables: {
        projectId: project.id,
        date: startOfYesterday(),
      },
    });

    const today = todayArr[0] || undefined;
    const yesterday = yesterdayArr[0] || undefined;

    if (today && yesterday) {
      const getChanges = getChangesPartial(today, yesterday || today);
      const marketStatsWithChanges = { ...today, project };
      MARKET_STAT_CHANGES.forEach((value) => Object.assign(marketStatsWithChanges, getChanges(value)));
      projects.push(marketStatsWithChanges);
    }

    if (!today && !yesterday) {
      const getChanges = getChangesPartial({}, {});
      const marketStatsWithChanges = { project } as MarketStat;
      MARKET_STAT_CHANGES.forEach((value) =>
        Object.assign(marketStatsWithChanges, { ...getChanges(value), [value]: 0 }),
      );
      projects.push(marketStatsWithChanges);
    }
  }

  projects.sort((a, b) => (b?.marketCap as number) - (a?.marketCap as number));
  projects.forEach((item, index) => Object.assign(item, { order: index + 1 }));

  return projects;
};

export const getProjectAndMarketStatsBySlug = async (
  slug: string,
): Promise<ProjectWithMarketStatsAndChanges | null> => {
  const date = formatISO(new Date());
  const projectId = await getProjectIdBySlug(slug);
  const marketStatsArray = await getData({
    query: GET_PROJECT_AND_MARKET_STATS_BY_ID,
    variables: { projectId, date },
    fetchPolicy: 'network-only',
  });

  const marketStats = marketStatsArray.marketStats[0] || null;

  if (!marketStats) {
    return null;
  }

  const marketStatsLastDayData = await getProjectPreviousDayMarketStatsByProjectIdAndDate(
    projectId,
    marketStats.dateAdded,
  );

  const marketStatsLastDay = marketStatsLastDayData?.marketStats;
  const socialStatsLastDay = marketStatsLastDayData?.socialStats;

  if (!marketStatsLastDay) {
    return { ...marketStats, relatedProjects: marketStatsArray.relatedProjects };
  }

  // Extract customData labels and their appropriate values
  const marketStatsCustomData = prepareCustomTrackers(marketStats.customData);
  const marketStatsLastDayCustomData = prepareCustomTrackers(marketStatsLastDay.customData);

  // push the customData labels to the MARKET_STAT_CHANGES array so it gets picked up by the getChanges functions
  Object.keys(marketStatsLastDayCustomData).forEach((key) => MARKET_STAT_CHANGES.push(key));

  // Spread the resolvedCustomData objects for the getChanges function
  const getChanges = getChangesPartial(
    { ...marketStats, ...marketStatsArray.socialStats[0], ...marketStatsCustomData },
    { ...marketStatsLastDay, ...marketStatsLastDayCustomData, ...socialStatsLastDay },
  );

  const newMarketStats = {
    ...marketStats,
    ...marketStatsArray.socialStats[0],
    relatedProjects: marketStatsArray?.relatedProjects,
    paymentPlans: marketStatsArray?.paymentPlans,
    quizzes: marketStatsArray?.quizzes,
  };

  MARKET_STAT_CHANGES.forEach((value) => Object.assign(newMarketStats, getChanges(value)));

  return newMarketStats;
};

export const getTrendingProjects = async (limit = 3) => {
  const count = await getProjectsCount();

  const marketStatsToday = prismaClient?.marketStat.findMany({
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
    orderBy: {
      dateAdded: 'desc',
    },
    take: count,
  });

  const marketStatsYesterday = prismaClient?.marketStat.findMany({
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
    },
    orderBy: {
      dateAdded: 'desc',
    },
    take: count,
  });

  const [today, yesterday] = await Promise.all([marketStatsToday, marketStatsYesterday]);

  type Results = { name: string; slug: string; logo: string; change: number }[];

  const results = today
    ?.reduce((arr, curr) => {
      const yesterdayData = yesterday?.find((item) => item?.project?.id === curr?.project?.id);
      const getChanges = getChangesPartial(curr, yesterdayData);

      const change = getChanges('price').priceChange.percentage;

      if (change && change !== Infinity) {
        arr.push({
          name: curr?.project?.name as string,
          slug: curr?.project?.slug as string,
          logo: getLogoLink(curr?.project?.logo_id as string, curr.project?.logo_extension as string),
          change,
        });
      }
      return arr;
    }, [] as Results)
    .sort((a, b) => b.change - a.change)
    .slice(0, limit);

  return results;
};

export type AverageMarketChangeForPeriodOfTime = {
  price: number;
  marketCap: number;
  holders: number;
  volume: number;
  buys: number;
  sells: number;
  twitter: number;
  telegram: number;
  discord: number;
  priceMedian: number;
  marketCapMedian: number;
  holdersMedian: number;
  volumeMedian: number;
  buysMedian: number;
  sellsMedian: number;
  twitterMedian: number;
  telegramMedian: number;
  discordMedian: number;
};

export const getProjectAverageMarketChangeForPeriodOfTime = async (
  projectId: string,
  from: Date,
  to: Date,
): Promise<AverageMarketChangeForPeriodOfTime | null> => {
  try {
    const selectors = {
      price: true,
      marketCap: true,
      holders: true,
      volume: true,
      buys: true,
      sells: true,
    };

    const socialsSelectors = {
      twitter: true,
      telegram: true,
      discord: true,
    };

    type MarketStatsData = {
      marketStats: {
        price: number;
        marketCap: number;
        holders: number;
        volume: { h24: number };
        txns: { h24: { buys: number; sells: number } };
      }[];
    };

    type SocialStatsData = {
      socialStats: {
        twitter: number;
        telegram: number;
        discord: number;
      }[];
    };

    const { marketStats, socialStats }: MarketStatsData & SocialStatsData = await getData({
      query: GET_PROJECT_AVERAGE_MARKET_CHANGE_FOR_PERIOD_OF_TIME,
      variables: {
        projectId,
        from,
        to,
      },
      fetchPolicy: 'network-only',
    });

    const data = marketStats;

    const parsedData = data.map((item) => {
      return {
        ...item,
        txns: 0,
        volume: (item.volume as Record<any, number>).h24,
        buys: item.txns.h24.buys,
        sells: item.txns.h24.sells,
      };
    });

    const marketResults = getAveragesAndMedians(parsedData, selectors, {
      price: 0,
      marketCap: 0,
      holders: 0,
      volume: 0,
      buys: 0,
      sells: 0,
    });

    const socialResults = getAveragesAndMedians(socialStats, socialsSelectors, {
      twitter: 0,
      telegram: 0,
      discord: 0,
    });

    return { ...marketResults, ...socialResults } as AverageMarketChangeForPeriodOfTime;
  } catch (error) {
    console.log(error);
    return null;
  }
};
