import { CustomTrackersResponse } from 'types/MarketData';
import {
  GET_AVERAGE_HOLDINGS,
  GET_BURNED_TOKENS,
  GET_CUSTOM_TRACKERS,
  GET_FDV,
  GET_HOLDERS,
  GET_LEAVING_HOLDERS,
  GET_LIQUIDITY,
  GET_MARKET_CAP,
  GET_NEW_HOLDERS,
  GET_PAIR_PRICE,
  GET_PRICE,
  GET_RECURRING_HOLDERS,
  GET_TOTAL_SUPPLY,
} from './constatnts/charts';
import { getData } from './getters';

type MarketStatsForCharts = {
  value: number | string | CustomTrackersResponse[] | null;
  date: Date;
};

const withGetData = async (query: string, slug: string) => {
  const { marketStats, projects } = await getData({ query, variables: { slug }, fetchPolicy: 'cache-first' });
  return { marketStats, project: projects[0] } || [];
};

export const getPrice = async (slug: string) => withGetData(GET_PRICE, slug);
export const getMarketCap = async (slug: string) => withGetData(GET_MARKET_CAP, slug);
export const getTotalSupply = async (slug: string) => withGetData(GET_TOTAL_SUPPLY, slug);
export const getLiquidity = async (slug: string) => withGetData(GET_LIQUIDITY, slug);
export const getPairPrice = async (slug: string) => withGetData(GET_PAIR_PRICE, slug);
export const getBurnedTokens = async (slug: string) => withGetData(GET_BURNED_TOKENS, slug);
export const getFdv = async (slug: string) => withGetData(GET_FDV, slug);

export const getCustomTrackers = async (slug: string, selector: string) => {
  const data = await withGetData(GET_CUSTOM_TRACKERS, slug);

  const resolvedData = {
    marketStats: data.marketStats.map((item: MarketStatsForCharts) => {
      const selectedValue = (item?.value as CustomTrackersResponse[]).filter(
        (customItem) => customItem.label === selector || customItem.id === selector,
      );
      return {
        value: selectedValue.length > 0 ? selectedValue[0].value : null,
        date: item.date,
      };
    }),
  };

  return { ...resolvedData, project: data.project };
};

export const getHolders = async (slug: string) => withGetData(GET_HOLDERS, slug);
export const getAvgHoldings = async (slug: string) => withGetData(GET_AVERAGE_HOLDINGS, slug);
export const getNewHolders = async (slug: string) => withGetData(GET_NEW_HOLDERS, slug);
export const getLeavingHolders = async (slug: string) => withGetData(GET_LEAVING_HOLDERS, slug);
export const getRecurringHolders = async (slug: string) => withGetData(GET_RECURRING_HOLDERS, slug);
