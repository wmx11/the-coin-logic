import { endOfYesterday, formatISO } from 'date-fns';
import { MarketStat, Project } from 'types';
import { ProjectWithMarketStatsAndChanges } from 'types/Project';
import getChangesPartial from 'utils/getChangesPartial';
import { prepareCustomTrackers } from 'utils/prepareCustomTrackers';
import { getAveragesAndMedians } from 'utils/utils';
import {
  GET_ENABLED_AND_LISTED_PROJECTS,
  GET_MARKETSTATS_AND_PROJECTS,
  GET_PREVIOUS_DAY_MARKET_STATS,
  GET_PROJECTS_BY_USER_EMAIL,
  GET_PROJECTS_COUNT,
  GET_PROJECT_AND_MARKET_STATS_BY_SLUG,
  GET_PROJECT_AVERAGE_MARKET_CHANGE_FOR_PERIOD_OF_TIME,
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

export const getProjectsCount = async () => {
  const { projectsCount } = await getData({ query: GET_PROJECTS_COUNT, fetchPolicy: 'network-only' });
  return projectsCount;
};

export const getProjectPreviousDayMarketStatsBySlugAndDate = async (slug: string, date: string) => {
  if (!slug || !date) {
    return null;
  }

  const lastDay = formatISO(new Date(date));

  const { marketStats, socialStats } = await getData({
    query: GET_PREVIOUS_DAY_MARKET_STATS,
    variables: { slug, lastDay },
    fetchPolicy: 'network-only',
  });
  return { marketStats: marketStats[0], socialStats: socialStats[0] };
};

export const getProjectsForTable = async () => {
  const count = await getProjectsCount();
  const enabledAndListedProjects: Project[] = await getEnabledAndListedProjects();

  const { marketStats }: { marketStats: MarketStat[] } = await getData({
    query: GET_MARKETSTATS_AND_PROJECTS,
    fetchPolicy: 'network-only',
    variables: {
      take: count,
    },
  });

  const { marketStats: marketStatsPreviousDay }: { marketStats: MarketStat[] } = await getData({
    query: GET_MARKETSTATS_AND_PROJECTS,
    fetchPolicy: 'network-only',
    variables: {
      take: count,
      date: endOfYesterday(),
    },
  });
  
  const projects = marketStats.reduce((arr, curr) => {
    const previousDay = marketStatsPreviousDay.find((item) => item.project?.slug === curr.project?.slug);
    const hasPreviousDayDuplicate = arr.filter((item) => item.project?.slug === previousDay?.project?.slug).length > 0;
    const hasDuplicate = arr.filter((item) => item.project?.slug === curr?.project?.slug).length > 0;
    
    if (hasPreviousDayDuplicate || hasDuplicate) {
      return arr;
    }

    const getChanges = getChangesPartial(curr, previousDay || curr);

    const marketStatsWithChanges = { ...curr };

    MARKET_STAT_CHANGES.forEach((value) => Object.assign(marketStatsWithChanges, getChanges(value)));

    arr.push(marketStatsWithChanges);

    return arr;
  }, [] as MarketStat[]);

  const enabledAndListedProjectsWithNoData = enabledAndListedProjects.reduce((arr, curr) => {
    const getChanges = getChangesPartial(curr, curr);
    const marketStatsWithChanges = { project: { ...curr } } as MarketStat;
    MARKET_STAT_CHANGES.forEach((value) => Object.assign(marketStatsWithChanges, { ...getChanges(value), [value]: 0 }));
    arr.push(marketStatsWithChanges);
    return arr;
  }, [] as MarketStat[]);

  const allProjects = projects.concat(enabledAndListedProjectsWithNoData);
  allProjects.sort((a, b) => (b?.marketCap as number) - (a?.marketCap as number));
  allProjects.forEach((item, index) => Object.assign(item, { order: index + 1 }));

  return allProjects;
};

export const getProjectAndMarketStatsBySlug = async (
  slug: string,
): Promise<ProjectWithMarketStatsAndChanges | null> => {
  const marketStatsArray = await getData({
    query: GET_PROJECT_AND_MARKET_STATS_BY_SLUG,
    variables: { slug },
    fetchPolicy: 'network-only',
  });

  const marketStats = marketStatsArray.marketStats[0] || null;

  if (!marketStats) {
    return null;
  }

  const marketStatsLastDayData = await getProjectPreviousDayMarketStatsBySlugAndDate(slug, marketStats.dateAdded);

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
    relatedProjects: marketStatsArray.relatedProjects,
    ...marketStatsArray.socialStats[0],
  };

  MARKET_STAT_CHANGES.forEach((value) => Object.assign(newMarketStats, getChanges(value)));

  return newMarketStats;
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
