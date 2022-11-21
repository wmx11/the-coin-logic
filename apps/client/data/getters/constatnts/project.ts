export const MARKET_STAT_CHANGES = [
  'price',
  'marketCap',
  'liquidity',
  'pairPrice',
  'totalSupply',
  'holders',
  'avgHoldings',
  'newHolders',
  'leavingHolders',
  'recurringHolders',
  'fdv',
  'burnedTokens',
  'twitter',
  'discord',
  'telegram',
];

const COMMON_MARKET_STATS = `    
price
marketCap
liquidity
pairPrice
totalSupply
holders
avgHoldings
newHolders
leavingHolders
recurringHolders
fdv
burnedTokens
txns
volume
customTrackers
dateAdded`;

export const GET_PROJECTS_COUNT = `{
  projectsCount(where: { enabled: { equals: true }, isListed: { equals: true } })
}`;

export const GET_MARKETSTATS_AND_PROJECTS = `
query($take: Int, $date: DateTime) {
  marketStats(
    where: {
      project: { enabled: { equals: true }, isListed: { equals: true } }
      dateAdded: { lte: $date }
    }
    orderBy: { dateAdded: desc }
    take: $take
  ) {
    price
    marketCap
    avgHoldings
    holders
    dateAdded
    project {
      name
      slug
      notifications(where: { enabled: { equals: true } }) {
        title
        content
        type
      }
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
    ${COMMON_MARKET_STATS}
  }
  socialStats(
    where: {
      project: { slug: { equals: $slug }, isListed: { equals: true } }
      dateAdded: { lt: $lastDay }
    }
    take: 1
    orderBy: { dateAdded: desc }
  ) {
    socialsDateAdded: dateAdded
    twitter
    telegram
    discord
  }
}
`;

export const GET_ENABLED_AND_LISTED_PROJECTS = `{
  projects(
    where: {
      enabled: { equals: true }
      isListed: { equals: true }
      trackData: { equals: false }
    }
  ) {
    name
    slug
    notifications(where: { enabled: { equals: true } }) {
      title
      content
      type
    }
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
}`;

export const GET_PROJECT_AND_MARKET_STATS_BY_SLUG = `
query($slug: String) {
  marketStats(
    where: { project: { slug: { equals: $slug } } }
    orderBy: { dateAdded: desc }
    take: 1
  ) {
    ${COMMON_MARKET_STATS}
    project {
      id
      name
      slug
      website
      whitepaper
      contractAddress
      pairAddress
      trackHolders
      trackHoldersFromTokenAmount
      initialized
      trackData
      trackSocials
      sellTax
      buyTax
      rebasePeriod
      apy
      calendar
      auditBy {
        url
        auditor {
          name
          image {
            url
          }
        }
      }
      kycBy {
        url
        kycGroup {
          name
          image {
            url
          }
        }
      }
      customVetting
      notifications(where: { enabled: { equals: true } }) {
        title
        content
        type
      }
      liquidityPair {
        name
        tokenAddress
        address
        isPrimary
        order
        stablePair {
          pairToken {
            name
            order
          }
        }
        exchange {
          name
          url
          tradeUrl
          logo {
            url
          }
        }
      }
      network {
        name
        scanner
        tokenScanner
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
      medium
      dateAdded
      logo {
        url
      }
      tags {
        name
      }
      parentProject {
        name
        slug
        logo {
          url
        }
      }
    }
  }
  relatedProjects: projects(
    where: { parentProject: { some: { slug: { equals: $slug } } } }
  ) {
    name
    slug
    logo {
      url
    }
  }
  socialStats(
    where: { project: { slug: { equals: $slug } } }
    take: 1
    orderBy: { dateAdded: desc }
  ) {
    socialsDateAdded: dateAdded
    twitter
    telegram
    discord
  }
}
`;

export const GET_PROJECTS_BY_USER_EMAIL = `
query($email: String) {
  user(where: { email: $email }) {
    projects {
      id
      name
      enabled
      isPending
      isAwaitingPayment
      isListed
      trackHolders
      periodicWalletUpdates
      initialized
      contractAddress
      pairAddress
      launchDate
      dateAdded
      slug
      notifications(where: { enabled: { equals: true } }) {
        title
        content
        type
      }
      logo {
        url
      }
      network {
        name
      }
      description
      liquidityPair {
        name
      }
    }
  }
}`;

export const GET_PROJECT_AVERAGE_MARKET_CHANGE_FOR_PERIOD_OF_TIME = `
query($projectId: ID, $from: DateTime, $to: DateTime) {
  marketStats(
    where: {
      project: { id: { equals: $projectId } }
      dateAdded: { gte: $from, lte: $to }
    }
  ) {
    price
    marketCap
    holders
    volume
    txns
  }
  socialStats(
    where: {
      project: { id: { equals: $projectId } }
      dateAdded: { gte: $from, lte: $to }
    }
  ) {
    twitter
    telegram
    discord
  }
}`;
