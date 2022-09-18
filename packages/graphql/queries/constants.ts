export const GET_ENABLED_PROJECTS = `
{
  projects(where: { enabled: { equals: true }, trackData: { equals: true } }) {
    id
    contractAddress
    pairAddress
    burnAddress
    trackHoldersFromTokenAmount
    useDexScreener
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
