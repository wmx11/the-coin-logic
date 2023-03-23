import { formatISO, subHours } from 'date-fns';
import { ProjectWithMarketStatsAndChanges } from 'types/Project';
import { prepareCustomTrackers } from 'utils/prepareCustomTrackers';
import { getAveragesAndMedians } from 'utils/utils';
import {
  GET_ENABLED_AND_LISTED_PROJECTS,
  GET_ENABLED_PROJECTS_FOR_FILTERING,
  GET_PREVIOUS_DAY_MARKET_STATS,
  GET_PROJECTS_BY_USER_EMAIL,
  GET_PROJECTS_COUNT,
  GET_PROJECT_AND_MARKET_STATS_BY_ID,
  GET_PROJECT_AND_MARKET_STATS_BY_ID_FALLBACK,
  GET_PROJECT_AVERAGE_MARKET_CHANGE_FOR_PERIOD_OF_TIME,
  GET_PROJECT_ID_BY_SLUG,
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

  return projects[0]?.id || null;
};

export const getProjectPreviousDayMarketStatsByProjectIdAndDate = async (projectId: string, date: string) => {
  if (!projectId || !date) {
    return null;
  }

  const lastDay = formatISO(subHours(new Date(), 24));

  const { marketStats, socialStats } = await getData({
    query: GET_PREVIOUS_DAY_MARKET_STATS,
    variables: { projectId, lastDay },
    fetchPolicy: 'network-only',
  });
  return { marketStats: marketStats[0], socialStats: socialStats[0] };
};

export const getProjectAndMarketStatsBySlug = async (
  slug: string,
): Promise<ProjectWithMarketStatsAndChanges | null> => {
  const date = formatISO(new Date());
  const projectId = await getProjectIdBySlug(slug);

  let marketStatsArray = await getData({
    query: GET_PROJECT_AND_MARKET_STATS_BY_ID,
    variables: { projectId, date },
    fetchPolicy: 'network-only',
  });

  if (marketStatsArray.marketStats.length < 1) {
    marketStatsArray = await getData({
      query: GET_PROJECT_AND_MARKET_STATS_BY_ID_FALLBACK,
      variables: { projectId, date },
      fetchPolicy: 'network-only',
    });
  }

  const marketStats = (marketStatsArray?.marketStats && marketStatsArray?.marketStats[0]) || marketStatsArray || null;

  if (!marketStats) {
    return null;
  }

  // const marketStatsLastDayData = await getProjectPreviousDayMarketStatsByProjectIdAndDate(
  //   projectId,
  //   marketStats.dateAdded,
  // );

  // const marketStatsLastDay = marketStatsLastDayData?.marketStats;
  // const socialStatsLastDay = marketStatsLastDayData?.socialStats;

  // if (!marketStatsLastDay) {
  //   return {
  //     ...marketStats,
  //     ...((marketStatsArray?.socialStats && marketStatsArray?.socialStats[0]) || {}),
  //     relatedProjects: marketStatsArray.relatedProjects || null,
  //     quizzes: marketStatsArray?.quizzes || null,
  //     paymentPlans: marketStatsArray?.paymentPlans || null,
  //     transcriptions: marketStatsArray?.transcriptions || null,
  //   };
  // }

  // Extract customData labels and their appropriate values
  const marketStatsCustomData = prepareCustomTrackers(marketStats.customData);
  // const marketStatsLastDayCustomData = prepareCustomTrackers(marketStatsLastDay.customData);

  // push the customData labels to the MARKET_STAT_CHANGES array so it gets picked up by the getChanges functions
  // Object.keys(marketStatsLastDayCustomData).forEach((key) => MARKET_STAT_CHANGES.push(key));

  // Spread the resolvedCustomData objects for the getChanges function
  // const getChanges = getChangesPartial(
  //   { ...marketStats, ...marketStatsArray.socialStats[0], ...marketStatsCustomData },
  //   { ...marketStatsLastDay, ...marketStatsLastDayCustomData, ...socialStatsLastDay },
  // );

  const newMarketStats = {
    ...marketStats,
    ...(marketStatsArray.socialStats && marketStatsArray.socialStats[0]),
    relatedProjects: marketStatsArray.relatedProjects || null,
    paymentPlans: marketStatsArray?.paymentPlans || null,
    quizzes: marketStatsArray?.quizzes || null,
    transcriptions: marketStatsArray?.transcriptions || null,
  };

  // MARKET_STAT_CHANGES.forEach((value) => Object.assign(newMarketStats, getChanges(value)));

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
