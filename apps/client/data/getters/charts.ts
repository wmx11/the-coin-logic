import { ChartData } from 'store/useChartStore';
import { Project } from 'types';
import { CustomTrackersResponse } from 'types/MarketData';
import {
  GET_AVERAGE_HOLDINGS,
  GET_BURNED_TOKENS,
  GET_CUSTOM_TRACKERS,
  GET_DISCORD_MEMBERS,
  GET_FDV,
  GET_HOLDERS,
  GET_LEAVING_HOLDERS,
  GET_LIQUIDITY,
  GET_MARKET_CAP,
  GET_NEW_HOLDERS,
  GET_PAIR_PRICE,
  GET_PRICE,
  GET_RECURRING_HOLDERS,
  GET_TELEGRAM_MEMBERS,
  GET_TOTAL_SUPPLY,
  GET_TWITTER_FOLLOWERS,
} from './constatnts/charts';
import { getData } from './getters';
import axios from 'axios';

export type MarketStatsForCharts = {
  value: string | CustomTrackersResponse[];
  date: Date;
};

export type WithGetDataReturn = {
  marketStats: ChartData[] | MarketStatsForCharts[];
  project: Project;
  socialStats: ChartData[];
};

const withGetData = async (query: string, projectId: string): Promise<WithGetDataReturn> => {
  const { marketStats, projects, socialStats } = await getData({
    query,
    variables: { projectId },
    fetchPolicy: 'network-only',
  });
  return { marketStats, project: projects && projects[0], socialStats } || [];
};

// export const getPrice = async (projectId: string) => withGetData(GET_PRICE, projectId);
export const getPrice = async (projectId: string) => {
  const { data } = await axios.post('http://localhost:3000/api/data/market', {
    projectId,
    selector: 'price',
  });

  if (!data?.data) {
    return null;
  }
  
  return data.data;
};


export const getMarketCap = async (projectId: string) => withGetData(GET_MARKET_CAP, projectId);
export const getTotalSupply = async (projectId: string) => withGetData(GET_TOTAL_SUPPLY, projectId);
export const getLiquidity = async (projectId: string) => withGetData(GET_LIQUIDITY, projectId);
export const getPairPrice = async (projectId: string) => withGetData(GET_PAIR_PRICE, projectId);
export const getBurnedTokens = async (projectId: string) => withGetData(GET_BURNED_TOKENS, projectId);
export const getFdv = async (projectId: string) => withGetData(GET_FDV, projectId);

export const getHolders = async (projectId: string) => withGetData(GET_HOLDERS, projectId);
export const getAvgHoldings = async (projectId: string) => withGetData(GET_AVERAGE_HOLDINGS, projectId);
export const getNewHolders = async (projectId: string) => withGetData(GET_NEW_HOLDERS, projectId);
export const getLeavingHolders = async (projectId: string) => withGetData(GET_LEAVING_HOLDERS, projectId);
export const getRecurringHolders = async (projectId: string) => withGetData(GET_RECURRING_HOLDERS, projectId);

export const getDiscordMembers = async (projectId: string) => withGetData(GET_DISCORD_MEMBERS, projectId);
export const getTelegramMembers = async (projectId: string) => withGetData(GET_TELEGRAM_MEMBERS, projectId);
export const getTwitterFollowers = async (projectId: string) => withGetData(GET_TWITTER_FOLLOWERS, projectId);
