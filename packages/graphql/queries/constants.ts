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

export const GET_ENABLED_PROJECTS_FOR_HOLDERS_TRACKING = `
{
  projects(where: { enabled: { equals: true }, trackHolders: { equals: true } }) {
    id
    contractAddress
    pairAddress
    launchBlock
    network {
      url
    }
  }
}
`;
