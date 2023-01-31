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
priceChange24
priceChange24Percentage
marketCap
marketCapChange24
marketCapChange24Percentage
liquidity
liquidityChange24
liquidityChange24Percentage
pairPrice
pairPriceChange24
pairPriceChange24Percentage
totalSupply
totalSupplyChange24
totalSupplyChange24Percentage
holders
holdersChange24
holdersChange24Percentage
avgHoldings
avgHoldingsChange24
avgHoldingsChange24Percentage
newHolders
newHoldersChange24
newHoldersChange24Percentage
leavingHolders
leavingHoldersChange24
leavingHoldersChange24Percentage
recurringHolders
recurringHoldersChange24
recurringHoldersChange24Percentage
fdv
fdvChange24
fdvChange24Percentage
burnedTokens
burnedTokensChange24
burnedTokensChange24Percentage
avgPrice
avgPriceChange24
avgPriceChange24Percentage
floorPrice
floorPriceChange24
floorPriceChange24Percentage
ceilPrice
ceilPriceChange24
ceilPriceChange24Percentage
salesVolume
salesVolumeChange24
salesVolumeChange24Percentage
totalHoldings
totalHoldingsChange24
totalHoldingsChange24Percentage
txns
volume
customTrackers
dateAdded`;

const PROJECT_DATA_GETTERS = `
id
name
slug
symbol
website
whitepaper
contractAddress
pairAddress
isNft
isPreLaunch
launchDate
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
  customExchangeAddress
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
  symbol
  logo {
    url
  }
}
description
preLaunchInformation
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
backgroundImage {
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
transparencyHighlights
paymentPlan {
  id
  name
  slug
  tooltip
  description
  price
}`;

const PROJECT_DATA_GETTERS_ADDITIONAL = `
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
  twitterChange24
  twitterChange24Percentage
  telegram
  telegramChange24
  telegramChange24Percentage
  discord
  discordChange24
  discordChange24Percentage
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
transcriptions(
  where: { project: { id: { equals: $projectId } } }
  orderBy: { dateAdded: desc }
  take: 3
) {
  id
  title
  slug
  summary
  user {
    name
  }
  dateAdded
  views
  likesCount
}`;

export const GET_PROJECTS_COUNT = `{
  projectsCount(where: { enabled: { equals: true }, isListed: { equals: true } })
}`;

export const GET_PROJECT_ID_BY_SLUG = `
query($slug: String){
  projects(where: { slug: { equals: $slug } } ) {
    id
  }
}`;

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
    transparencyScore
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
    kycBy {
      url
      kycGroup {
        name
        image {
          url
        }
      }
    }
    auditBy {
      url
      auditor {
        name
        image {
          url
        }
      }
    }
  }
}`;

export const GET_ENABLED_PROJECTS_FOR_FILTERING = `{
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
      ${PROJECT_DATA_GETTERS}
    }
  }
  ${PROJECT_DATA_GETTERS_ADDITIONAL}
}`;

export const GET_PROJECT_AND_MARKET_STATS_BY_ID_FALLBACK = `
  query($projectId: ID, $date: DateTime) {
    project(where: { id: $projectId }) {
      ${PROJECT_DATA_GETTERS}
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
