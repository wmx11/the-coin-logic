export const GET_ENABLED_PROJECTS = `
{
  projects(
    where: {
      enabled: { equals: true }
      OR: [
        { trackData: { equals: true } }
        { trackPrice: { equals: true }, trackMarketCap: { equals: true } }
      ]
    }
  ) {
    id
    name
    contractAddress
    pairAddress
    burnAddress
    ABI
    trackHoldersFromTokenAmount
    useDexScreener
    twitter
    telegram
    discord
    discordServerId
    trackData
    trackPrice
    trackMarketCap
    isNft
    mintPrice
    liquidityPair {
      address
      useDexScreener
      isPrimary
      order
      network {
        slug
      }
      stablePair {
        address
        pairToken {
          address
          order
        }
      }
    }
    network {
      url
      slug
    }
    customTrackers(where: { enabled: { equals: true } }) {
      id
      label
      description
      address
      pairAddress
      getBalanceOf
      decimals
      enabled
      useDexScreener
      isCurrency
      applyProjectNativeTokenPrice
      applyProjectTokenPrice
      method
      network {
        slug
        url
      }
    }
  }
}`;

const COMMON_GETTER_FOR_TRACKING = `
  id
  contractAddress
  pairAddress
  launchBlock
  initialized
  isNft
  mintPrice
  network {
    url
  }
`;

export const GET_ENABLED_PROJECTS_FOR_HOLDERS_TRACKING = `
{
  projects(where: { enabled: { equals: true }, trackHolders: { equals: true }, initialized: { equals: true } }) {
    ${COMMON_GETTER_FOR_TRACKING}
  }
}
`;

export const GET_ENABLED_AND_NOT_INITIALIZED_PROJECTS_FOR_HOLDERS_TRACKING = `
{
  projects(where: { enabled: { equals: true }, trackHolders: { equals: true }, initialized: { equals: false } }) {
    ${COMMON_GETTER_FOR_TRACKING}
  }
}
`;

export const GET_HOLDERS_DATA_BY_PROJECT_ID = `
query($id: ID) {
  marketStats(
    take: 1
    orderBy: { dateAdded: desc }
    where: { project: { id: { equals: $id } } }
  ) {
    holders
    avgHoldings
    newHolders
    recurringHolders
    leavingHolders
  }
}`;

export const GET_NETWORK_BY_SLUG = `
query($slug: String) {
  networks(where: { slug: { equals: $slug } }) {
    slug
    url
  }
}`;
