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

export const GET_PROJECT_ID_BY_SLUG = `
query($slug: String){
  projects(where: { slug: { equals: $slug } } ) {
    id
  }
}`

export const GET_MARKETSTATS_BY_PROJECT_ID_FOR_TABLE = `
query($projectId: ID, $date: DateTime) {
  marketStats(where: { project: { id: { equals: $projectId } }, dateAdded: { lte: $date } }, orderBy: { dateAdded: desc }, take: 1 ) {
    price
    marketCap
    holders
    avgHoldings
    dateAdded
  }
}
`;

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
query($projectId: ID, $lastDay: DateTime) {
  marketStats(
    where: {
      project: { id: { equals: $projectId }, isListed: { equals: true } }
      dateAdded: { lt: $lastDay }
    }
    orderBy: { dateAdded: desc }
    take: 1
  ) {
    ${COMMON_MARKET_STATS}
  }
  socialStats(
    where: {
      project: { id: { equals: $projectId }, isListed: { equals: true } }
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
    }
  ) {
    id
    name
    slug
    trackPrice
    trackMarketCap
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
    paymentPlan {
      tooltip
      name
      slug
    }
  }
}`;

export const GET_ENABLED_PROJECTS_FOR_FILTERING =`{
  projects(
    where: {
      enabled: { equals: true }
    }
  ) {
    name
    slug
  }
}`;

export const GET_PROJECT_AND_MARKET_STATS_BY_ID = `
query($projectId: ID, $date: DateTime) {
  marketStats(
    where: { project: { id: { equals: $projectId } } }
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
      isNft
      trackHolders
      trackHoldersFromTokenAmount
      initialized
      trackData
      trackSocials
      displayTransparencyScore
      displayCommunityVotes
      displayCommunityComments
      displayBlogPosts
      trackMarketCap
      trackPrice
      sellTax
      buyTax
      rebasePeriod
      apy
      calendar
      tclRating
      transparencyScore
      auditBy {
        url
        auditor {
          name
          image {
            url
          }
        }
      }
      auditByCount
      kycBy {
        url
        kycGroup {
          name
          image {
            url
          }
        }
      }
      kycByCount
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
      content(take: 3, orderBy: { dateAdded: desc }) {
        id
        title
        slug
        summary
        views
        likesCount
        contentType {
          title
        }
        image {
          url
        }
        user {
          name
        }
        dateAdded
      }
      events(orderBy: { scheduledStartTimestamp: asc }, where: { scheduledStartTimestamp: { gt: $date } }) {
        id
        guildName
        channelName
        name
        description
        inviteUrl
        scheduledStartTimestamp
        scheduledEndTimestamp
        location
        image
      }
      announcements(orderBy: { dateAdded: desc }, take: 5) {
        id
        title
        content
        messageUrl
        dateAdded
      }
      transparencyHighlights {
        content
        isPositive
      }
      paymentPlan {
        id
        name
        slug
        tooltip
        description
        price
      }
    }
  }
  relatedProjects: projects(
    where: { parentProject: { some: { id: { equals: $projectId } } } }
  ) {
    name
    slug
    logo {
      url
    }
  }
  socialStats(
    where: { project: { id: { equals: $projectId } } }
    take: 1
    orderBy: { dateAdded: desc }
  ) {
    socialsDateAdded: dateAdded
    twitter
    telegram
    discord
  }
  paymentPlans {
    id
    name
    slug
    description
    tooltip
    price
    discount
  }
  quizzes(
    where: { project: { id: { equals: $projectId } } }
    orderBy: { dateAdded: desc }
    take: 3
  ) {
    id
    title
    slug
    image {
      url
    }
    hasRewards
    rewardsAmount
    rewardType
    totalWinners
    winners
    views
    likesCount
    startDate
    dateAdded
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
      discordServerId
      discordConfig {
        id
      }
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
