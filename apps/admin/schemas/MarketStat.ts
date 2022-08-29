import { list } from '@keystone-6/core';
import { Lists } from '.keystone/types';
import { float, json, relationship, timestamp } from '@keystone-6/core/fields';

const MarketStat: Lists = {
  MarketStat: list({
    fields: {
      price: float(),
      marketCap: float(),
      totalSupply: float(),
      liquidity: float(),
      pairPrice: float(),
      holders: float(),
      avgHoldings: float(),
      newHolders: float(),
      leavingHolders: float(),
      recurringHolders: float(),
      customData: json({ defaultValue: [] }),
      project: relationship({ ref: 'Project' }),
      dateAdded: timestamp({ defaultValue: { kind: 'now' } }),
    },
  }),
};

export default MarketStat;
