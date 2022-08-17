export const GET_ENABLED_PROJECTS = `
{
  projects(where: { enabled: { equals: true } }) {
    id
    contractAddress
    pairAddress
    stableLiquidityPair {
      pairToken {
        address
      }
      address
    }
    network {
      url
    }
    customData
  }
}
`;

const COMMON_GETTER_FOR_TRACKING = `
  id
  contractAddress
  pairAddress
  launchBlock
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
