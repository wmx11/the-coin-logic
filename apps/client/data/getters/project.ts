import { formatISO, setHours } from 'date-fns';
import { ProjectWithMarketStatsAndChanges } from 'types/Project';
import getChangesPartial from 'utils/getChangesPartial';
import { prepareCustomData } from 'utils/prepareCustomData';
import {
  GET_ENABLED_AND_LISTED_PROJECTS_ID_AND_SLUG,
  GET_MARKET_STATS_BY_PROJECT_ID_FOR_HOMEPAGE,
  GET_PREVIOUS_DAY_MARKET_STATS,
  GET_PROJECTS_BY_USER_EMAIL,
  GET_PROJECTS_COUNT,
  GET_PROJECTS_LIST,
  GET_PROJECT_AND_MARKET_STATS_BY_SLUG,
  MARKET_STAT_CHANGES,
} from './constatnts/project';
import { getData } from './getters';

export const getProjectsList = async () => {
  const { projects } = await getData(GET_PROJECTS_LIST);
  return projects;
};

export const getProjectsByUserEmail = async (email: string) => {
  const { user } = await getData(GET_PROJECTS_BY_USER_EMAIL, { email });
  return user?.projects || null;
};

export const getProjectsCount = async () => {
  const { projectsCount } = await getData(GET_PROJECTS_COUNT);
  return projectsCount;
};

export const getProjectPreviousDayMarketStatsBySlugAndDate = async (slug: string, date: string) => {
  if (!slug || !date) {
    return null;
  }
  const lastDay = formatISO(new Date(setHours(new Date(date), 0).toString()));
  const { marketStats } = await getData(GET_PREVIOUS_DAY_MARKET_STATS, { slug, lastDay });
  return marketStats[0];
};

export const getProjectsForHomepageList = async () => {
  const { projects } = await getData(GET_ENABLED_AND_LISTED_PROJECTS_ID_AND_SLUG);

  if (!projects) {
    return null;
  }

  type ProjectId = {
    id: string;
  };

  const projectsPromises = projects.map(async (project: ProjectId) => {
    const { marketStats } = await getData(GET_MARKET_STATS_BY_PROJECT_ID_FOR_HOMEPAGE, { id: project.id });
    return marketStats[0] || null;
  });

  const projectsArray = [];

  for (const project of projectsPromises) {
    const data = await project;

    if (!data) {
      return null;
    }

    const previousDayMarketStats = await getProjectPreviousDayMarketStatsBySlugAndDate(
      data?.project?.slug,
      data?.dateAdded,
    );

    const getChanges = getChangesPartial(data, previousDayMarketStats);

    const marketStatsWithChanges = { ...data };

    MARKET_STAT_CHANGES.forEach((value) => Object.assign(marketStatsWithChanges, getChanges(value)));

    if (marketStatsWithChanges) {
      projectsArray.push(marketStatsWithChanges);
    }
  }

  return projectsArray;
};

export const getProjectAndMarketStatsBySlug = async (
  slug: string,
): Promise<ProjectWithMarketStatsAndChanges | null> => {
  const marketStatsArray = await getData(GET_PROJECT_AND_MARKET_STATS_BY_SLUG, { slug });

  const marketStats = marketStatsArray.marketStats[0] || null;

  if (!marketStats) {
    return null;
  }

  const marketStatsLastDay = await getProjectPreviousDayMarketStatsBySlugAndDate(slug, marketStats.dateAdded);

  if (!marketStatsLastDay) {
    return marketStats;
  }

  // Extract customData labels and their appropriate values
  const marketStatsCustomData = prepareCustomData(marketStats.customData);
  const marketStatsLastDayCustomData = prepareCustomData(marketStatsLastDay.customData);

  // push the customData labels to the MARKET_STAT_CHANGES array so it gets picked up by the getChanges functions
  Object.keys(marketStatsLastDayCustomData).forEach((key) => MARKET_STAT_CHANGES.push(key));

  // Spread the resolvedCustomData objects for the getChanges function
  const getChanges = getChangesPartial(
    { ...marketStats, ...marketStatsCustomData },
    { ...marketStatsLastDay, ...marketStatsLastDayCustomData },
  );

  const newMarketStats = { ...marketStats };

  MARKET_STAT_CHANGES.forEach((value) => Object.assign(newMarketStats, getChanges(value)));

  return newMarketStats;
};