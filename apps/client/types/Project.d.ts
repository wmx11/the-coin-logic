import { MarketStat, Project, SocialStat } from 'types';
import { MarketStatChanges } from './MarketData';

export type ProjectWithMarketStatsAndChanges = { project: Project; relatedProjects: Project[] } & MarketStat &
  SocialStat & { socialsDateAdded?: string } & MarketStatChanges;
