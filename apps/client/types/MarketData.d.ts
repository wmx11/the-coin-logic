import { SubGroup } from 'components/StatsTabGroup/types';

export type PreviousValueTypes = {
  change: number;
  percentage: number;
};

export type PreviousValue = {
  previousValue: PreviousValueTypes;
};

export type MarketStatChanges = {
  priceChange: PreviousValueTypes;
  marketCapChange: PreviousValueTypes;
  liquidityChange: PreviousValueTypes;
  pairPriceChange: PreviousValueTypes;
  totalSupplyChange: PreviousValueTypes;
};

export type StatsData = PreviousValue & {
  title?: string;
  value?: number;
  isCurrency?: boolean;
  subGroup?: SubGroup;
};
