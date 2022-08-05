import { ProjectType } from './Projects';

export type MarketDataTypes = {
  price?: number;
  marketCap?: number;
  liquidity?: number;
  pairPrice?: number;
  totalSupply?: number;
  dateAdded?: string;
  customData?: [];
};

export type MarketDataChangeTypes = {
  change: number;
  percentage: number;
};

export type MarketDataPreviousValueType = {
  previousValue: MarketDataChangeTypes;
};

export type MarketDataWithChangeAndProjectTypes = MarketDataTypes & {
  project: ProjectType;
  priceChange: MarketDataChangeTypes;
  marketCapChange: MarketDataChangeTypes;
  liquidityChange: MarketDataChangeTypes;
  totalSupplyChange: MarketDataChangeTypes;
  pairPriceChange: MarketDataChangeTypes;
};
