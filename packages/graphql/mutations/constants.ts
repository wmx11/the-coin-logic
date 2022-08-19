export const CREATE_MARKET_STATS = `
mutation createMarketStats(
  $price: Float
  $marketCap: Float
  $totalSupply: Float
  $liquidity: Float
  $pairPrice: Float
  $id: ID
  $holders: Float
  $avgHoldings: Float
  $customData: JSON
) {
  createMarketStat(
    data: {
      price: $price
      marketCap: $marketCap
      totalSupply: $totalSupply
      liquidity: $liquidity
      pairPrice: $pairPrice
      holders: $holders
      avgHoldings: $avgHoldings
      customData: $customData
      project: { connect: { id: $id } }
    }
  ) {
    id
    project {
      name
      slug
    }
  }
}`;

export const UPDATE_PROJECT_INITIALIZED_STATUS = `
mutation($id: ID, $initialized: Boolean) {
  updateProject(
    where: { id: $id }
    data: { initialized: $initialized }
  ) {
    id
    name
    initialized
  }
}`;
