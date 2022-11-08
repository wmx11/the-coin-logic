import request from '../request';
import { CREATE_MARKET_STATS, CREATE_SOCIAL_STATS, UPDATE_PROJECT_INITIALIZED_STATUS } from './constants';
import type { MarketStat, SocialStat } from '../../types';

export const createMarketStats = async (marketStats: MarketStat): Promise<MarketStat | null> => {
  try {
    const { createMarketStat } = await request(CREATE_MARKET_STATS, marketStats);
    return createMarketStat || null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const createSocialStats = async (socialStats: SocialStat): Promise<SocialStat | null> => {
  try {
    const { createSocialStat } = await request(CREATE_SOCIAL_STATS, socialStats);
    return createSocialStat || null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

type UpdateInitializedStatus = {
  id: string;
  initialized: boolean;
};

export const updateProjectInitializedStatus = async (
  initializedStatus: UpdateInitializedStatus,
): Promise<UpdateInitializedStatus | null> => {
  try {
    const { updateProject } = await request(UPDATE_PROJECT_INITIALIZED_STATUS, initializedStatus);
    return updateProject || null;
  } catch (error) {
    console.log(error);
    return null;
  }
};
