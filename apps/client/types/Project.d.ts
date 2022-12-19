import { MarketStat, PaymentPlan, Project, Quiz, SocialStat } from 'types';
import { MarketStatChanges } from './MarketData';

export type ProjectWithMarketStatsAndChanges = {
  project: Project;
  relatedProjects: Project[];
  paymentPlans: PaymentPlan[];
  quizzes: Quiz[];
} & MarketStat &
  SocialStat & { socialsDateAdded?: string } & MarketStatChanges;
