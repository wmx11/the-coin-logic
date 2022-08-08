import { CreateMarketStatsType } from '../../types/marketStats';
import request from './request';

const ADD_MARKET_STATS = `mutation addMarketStats(
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

export const createMarketStats = async ({
  price,
  marketCap,
  totalSupply,
  liquidity,
  pairPrice,
  id,
}: CreateMarketStatsType) => {
  const data = await request(ADD_MARKET_STATS, { price, marketCap, totalSupply, liquidity, pairPrice, id });

  if (data) {
    return data.createMarketStat;
  }

  return data;
};
