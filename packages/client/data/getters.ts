import { gql } from '@apollo/client';
import client from './apollo-client';
import { formatISO, setHours } from 'date-fns';
import getChangesPartial from '../utils/getChangesPartial';

const getData = async (query: string) => {
  const { data } = await client.query({
    query: gql(query),
  });

  if (!data) {
    return null;
  }

  return data;
};

export const getProjectsList = async () => {
  const query = `
  {
    projects {
      name
      slug
      logo {
        url
      }
      tags {
        name
      }
    }
  }`;

  const data = await getData(query);

  if (data) {
    return data.projects;
  }

  return data;
};

export const getProjectsCount = async () => {
  const query = `{
    projectsCount(where: { enabled: { equals: true } })
  }`;

  const data = await getData(query);

  if (data) {
    return data.projectsCount;
  }

  return data;
};

export const getProjectPreviousDayMarketStatsBySlugAndDate = async (slug: string, date: string) => {
  if (!slug || !date) {
    return null;
  }

  const lastDay = formatISO(new Date(setHours(new Date(date), 0).toString()));
  const query = `{
  marketStats(
    where: { project: { slug: { equals: "${slug}" }, isListed: { equals: true }}, dateAdded: { lt: "${lastDay}" } }
    orderBy: { dateAdded: desc }
    take: 1
  ) {
      price
      marketCap
      liquidity
      pairPrice
      totalSupply
      dateAdded
      customData
    }
  }`;

  const marketStatsData = await getData(query);
  return marketStatsData ? marketStatsData.marketStats[0] : null;
};

export const getProjectsForHomepageList = async () => {
  const query = `{
    projects(where: { enabled: { equals: true }, isListed: { equals: true }}) {
      id
      slug
    }
    projectsCount(where: { enabled: { equals: true }, isListed: { equals: true }})
  }`;

  const projectsIdsData = await getData(query);
  const projectIds = projectsIdsData ? projectsIdsData.projects : null;

  if (!projectIds) {
    return null;
  }

  const projectsPromise = projectIds.map(async (project: { id: string }) => {
    const query = `{  
      marketStats(
        where: { project: { id: { equals: "${project.id}" }, isListed: { equals: true }}}
        orderBy: { dateAdded: desc }
        take: 1
      ) {
        price
        marketCap
        dateAdded
        project {
          name
          slug
          network {
            name
            logo {
              url
            }
          }
          logo {
            url
          }
          tags {
            name
          }
        }
      }
    }`;

    const marketStatsData = await getData(query);

    if (marketStatsData) {
      return marketStatsData.marketStats[0];
    }

    return null;
  });

  const projects = [];

  for (const project of projectsPromise) {
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

    ['price', 'marketCap', 'liquidity', 'pairPrice', 'totalSupply'].forEach((value) =>
      Object.assign(marketStatsWithChanges, getChanges(value)),
    );

    if (marketStatsWithChanges) {
      projects.push(marketStatsWithChanges);
    }
  }

  return projects;
};

export const getProjectTypeBySlug = async (slug: string) => {
  const query = `{
    marketStats(where: { project: { slug: { equals: "${slug}" } } }, orderBy: { dateAdded: desc }, take: 1) {
      price
      marketCap
      liquidity
      pairPrice
      totalSupply
      dateAdded
      customData
      project {
        name
        website
        whitepaper
        contractAddress
        pairAddress
        pairToken(take: 1) {
          name
        }
        network {
          name
          logo {
            url
          }
        }
        description
        twitter
        discord
        telegram
        reddit
        github
        dateAdded
        logo {
          url
        }
        tags {
          name
        }
      }
    }
  }`;

  const marketStatsData = await getData(query);

  const marketStats = marketStatsData ? marketStatsData.marketStats[0] : null;

  if (!marketStats) {
    return null;
  }

  const marketStatsLastDay = await getProjectPreviousDayMarketStatsBySlugAndDate(slug, marketStats.dateAdded);

  if (!marketStatsLastDay) {
    return marketStats;
  }

  const getChanges = getChangesPartial(marketStats, marketStatsLastDay);

  const marketStatsWithChanges = { ...marketStats };

  ['price', 'marketCap', 'liquidity', 'pairPrice', 'totalSupply'].forEach((value) =>
    Object.assign(marketStatsWithChanges, getChanges(value)),
  );

  return marketStatsWithChanges;
};
