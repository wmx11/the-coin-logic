import { IconType } from 'react-icons';

export type Stats = {
  title?: string;
  Icon?: IconType;
  data?: StatsData[];
  slug?: string;
};

export type StatsTabGroupProps = Stats & {
  subtitle?: string;
  untrackedMessage?: string;
  section?: '' | 'marketData' | 'holdersData' | 'socialMediaData';
  projectId?: string;
  isChartDefaultOpen?: boolean;
};

export type SubGroup = Stats & {};
