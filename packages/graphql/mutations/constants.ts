export const CREATE_MARKET_STATS = `
mutation createMarketStats(
  $price: Float
  $marketCap: Float
  $totalSupply: Float
  $liquidity: Float
  $pairPrice: Float
  $id: ID
) {
  createMarketStat(
    data: {
      price: $price
      marketCap: $marketCap
      totalSupply: $totalSupply
      liquidity: $liquidity
      pairPrice: $pairPrice
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
