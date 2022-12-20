import { SubGroup } from 'components/StatsTabGroup/types';

export type PreviousValueTypes = {
  change: number;
  percentage: number;
};

export type PreviousValue = {
  previousValue?: PreviousValueTypes;
};

export type ChangeName<T extends string> = `${T}Change`;

export type MarketStatChanges = {
  [key: string]: PreviousValueTypes;
};

export type StatsData = PreviousValue & {
  title?: string;
  value?: number | number[] | string;
  isCurrency?: boolean;
  tooltip?: string;
  chartEntry?: string;
  isChartDefaultOpen?: boolean;
  subGroup?: SubGroup;
};

export type CustomTrackersResponse = {
  id: string;
  label: string;
  value: number | string | undefined;
  description: string;
  isCurrency: boolean;
};
