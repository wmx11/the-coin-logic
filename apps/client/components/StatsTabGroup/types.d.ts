import { IconType } from 'react-icons';

export type Stats = {
  title?: string;
  Icon?: IconType;
  data?: StatsData[];
};

export type StatsTabGroupProps = Stats & {
  subtitle?: string;
  untrackedMessage?: string;
};

export type SubGroup = Stats & {};


