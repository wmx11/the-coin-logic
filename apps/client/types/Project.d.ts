import { MarketStat, Project } from 'types';
import { MarketStatChanges } from './MarketData';

export type ProjectWithMarketStatsAndChanges = { project: Project } & MarketStat & MarketStatChanges;
