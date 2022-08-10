import { MarketStat, Project } from 'types';
import { MarketStatChanges } from 'types/MarketData';

export type TableData = {
  project: Project;
  price: MarketStat['price'];
  marketCap: MarketStat['marketCap'];
  priceChange: MarketStatChanges['priceChange'];
  marketCapChange: MarketStatChanges['marketCapChange'];
};
