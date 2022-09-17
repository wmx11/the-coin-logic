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
};

export type StatsData = PreviousValue & {
  title?: string;
  value?: number;
  isCurrency?: boolean;
  tooltip?: string;
  chartEntry?: string;
  subGroup?: SubGroup;
};

export type CustomTrackersResponse = {
  label: string;
  value: number | string | undefined;
  description: string;
};
