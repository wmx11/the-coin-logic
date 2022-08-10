export const MARKET_STAT_CHANGES = ['price', 'marketCap', 'liquidity', 'pairPrice', 'totalSupply'];

export const GET_PROJECTS_LIST = `
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

export const GET_PROJECTS_COUNT = `{
  projectsCount(where: { enabled: { equals: true } })
}`;

export const GET_PREVIOUS_DAY_MARKET_STATS = `
query($slug: String, $lastDay: DateTime) {
  marketStats(
    where: {
      project: { slug: { equals: $slug }, isListed: { equals: true } }
      dateAdded: { lt: $lastDay }
    }
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
}
`;

export const GET_ENABLED_AND_LISTED_PROJECTS_ID_AND_SLUG = `{
  projects(where: { enabled: { equals: true }, isListed: { equals: true }}) {
    id
    slug
  }
  projectsCount(where: { enabled: { equals: true }, isListed: { equals: true }})
}`;

export const GET_MARKET_STATS_BY_PROJECT_ID_FOR_HOMEPAGE = `
query($id: ID) {
  marketStats(
    where: {
      project: { id: { equals: $id }, isListed: { equals: true } }
    }
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
}
`;

export const GET_PROJECT_AND_MARKET_STATS_BY_SLUG = `
query($slug: String) {
  marketStats(
    where: { project: { slug: { equals: $slug } } }
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
}
`;
