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
  $newHolders: Float
  $recurringHolders: Float
  $leavingHolders: Float
  $customTrackers: JSON
  $burnedTokens: Float
  $txns: JSON
  $volume: JSON
  $fdv: Float
) {
  createMarketStat(
    data: {
      price: $price
      marketCap: $marketCap
      totalSupply: $totalSupply
      liquidity: $liquidity
      pairPrice: $pairPrice
      burnedTokens: $burnedTokens
      txns: $txns
      volume: $volume
      fdv: $fdv
      holders: $holders
      avgHoldings: $avgHoldings
      newHolders: $newHolders
      recurringHolders: $recurringHolders
      leavingHolders: $leavingHolders
      customTrackers: $customTrackers
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
