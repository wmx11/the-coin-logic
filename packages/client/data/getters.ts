import { gql } from '@apollo/client';
import client from './apollo-client';

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

export const getProjectMarketDataBySlug = async (slug: string) => {
  const query = `
    {
      marketStats(where: { project: { slug: { equals: "${slug}" } } }, orderBy: { dateAdded: desc }, take: 1) {
        price
        marketCap
      }
    }
  `;

  const data = await getData(query);

  if (data) {
    return data.marketStats;
  }

  return data;
};
