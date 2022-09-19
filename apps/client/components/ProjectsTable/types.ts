import { MarketStat, Project } from 'types';
import { MarketStatChanges } from 'types/MarketData';

export type TableData = {
  project: Project;
  price: MarketStat['price'];
  marketCap: MarketStat['marketCap'];
  holders: MarketStat['holders'];
  avgHoldings: MarketStat['avgHoldings'];
  priceChange: MarketStatChanges['priceChange'];
  marketCapChange: MarketStatChanges['marketCapChange'];
  holdersChange: MarketStatChanges['holdersChange'];
  avgHoldingsChange: MarketStatChanges['avgHoldingsChange'];
};
