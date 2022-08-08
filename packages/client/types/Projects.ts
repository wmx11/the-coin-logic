import { Network } from './Network';
import { StableLiquidityPair } from './StableLiquidityPair';
import { Token } from './Token';

export type ProjectsCount = {
  projectsCount: number;
};

export type ProjectType = {
  name: string;
  slug: string;
  network: {
    name: string;
    logo: {
      url: string;
    };
  };
  pairToken: {
    name: string;
  }[];
  logo: {
    url: string;
  };
  tags: {
    name: string;
  }[];
};

export type ProjectWithMarketDataType = {
  price: number;
  marketCap: number;
  project: ProjectType;
};

export type Project = {
  id?: string;
  name?: string;
  slug?: string;
  logo?: {
    url?: string;
    name?: string;
  };
  enabled?: boolean;
  isListed?: boolean;
  isRebasing?: boolean;
  tags?: {
    name: string;
  };
  contractAddress?: string;
  pairAddress?: string;
  burnAddress?: string;
  pairToken?: Token;
  stableLiquidityPair?: StableLiquidityPair;
  network?: Network;
  trackHoldersFromTokenAmount?: number;
  description?: string;
  ABI?: string;
  customData?: string;
  sellTax?: number;
  buyTax?: number;
  rebasePeriod?: string;
  apy?: number;
  dailyApy?: number;
  website?: string;
  whitepaper?: string;
  twitter?: string;
  telegram?: string;
  discord?: string;
  reddit?: string;
  youtube?: string;
  github?: string;
  dateAdded?: string;
};
