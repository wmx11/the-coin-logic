import request from '../request';
import { CREATE_MARKET_STATS } from './constants';
import type { MarketStat } from '../../types';

export const createMarketStats = async (marketStats: MarketStat): Promise<MarketStat | null> => {
  const { createMarketStat } = await request(CREATE_MARKET_STATS, marketStats);
  return createMarketStat || null;
};
