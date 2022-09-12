import { SubGroup } from 'components/StatsTabGroup/types';

export type PreviousValueTypes = {
  change: number;
  percentage: number;
};

export type PreviousValue = {
  previousValue: PreviousValueTypes;
};

export type ChangeName<T extends string> = `${T}Change`;

export type MarketStatChanges = {
  [key: string]: PreviousValueTypes;
  // priceChange?: PreviousValueTypes;
  // marketCapChange?: PreviousValueTypes;
  // liquidityChange?: PreviousValueTypes;
  // pairPriceChange?: PreviousValueTypes;
  // totalSupplyChange?: PreviousValueTypes;
  // holdersChange?: PreviousValueTypes;
  // avgHoldingsChange?: PreviousValueTypes;
  // newHoldersChange?: PreviousValueTypes;
  // leavingHoldersChange?: PreviousValueTypes;
  // recurringHoldersChange?: PreviousValueTypes;
};

export type StatsData = PreviousValue & {
  title?: string;
  value?: number;
  isCurrency?: boolean;
  tooltip?: string;
  chartEntry?: string;
  subGroup?: SubGroup;
};

export type CustomDataRequest = {
  label: string;
  address: string;
  description?: string;
  ticker?: string;
  network: string;
  method: 'getBalance' | 'balanceOf';
  applyPairPrice?: boolean;
  applyPrice?: boolean;
  arguments: {
    getBalance?: string;
    getBalanceDecimals?: number;
    balanceOf?: string;
  };
};

export type CustomDataResponse = {
  label: string;
  address: string;
  description?: string;
  ticker?: string;
  value: number | string | undefined;
  customDataAddress: string;
  withPairPrice?: number;
  withPrice?: number;
};
