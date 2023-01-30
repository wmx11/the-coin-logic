import { MarketStat, PaymentPlan, Project, Quiz, SocialStat, Transcription } from 'types';
import { MarketStatChanges } from './MarketData';

export type ProjectWithMarketStatsAndChanges = {
  project: Project;
  relatedProjects: Project[];
  paymentPlans: PaymentPlan[];
  quizzes: Quiz[];
  transcriptions: Transcription[];
} & MarketStat &
  SocialStat & { socialsDateAdded?: string } & MarketStatChanges;

export type TrendingHighlights = {
  trendingHighlights: {
    name: string;
    slug: string;
    logo: string;
    change: number;
    total: number;
    isPromoted?: boolean;
  }[];
};

export type UpcomingHighlights = Votes & {
  name: string;
  slug: string;
  logo: string;
  change: number;
  total: number;
  isPromoted?: boolean;
};
