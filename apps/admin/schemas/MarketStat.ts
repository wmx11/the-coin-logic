import { list } from '@keystone-6/core';
import { CacheScope } from 'apollo-cache-control';
import { Lists } from '.keystone/types';
import { float, json, relationship, timestamp, text } from '@keystone-6/core/fields';

const MarketStat: Lists = {
  MarketStat: list({
    graphql: {
      cacheHint: {
        maxAge: 5 * 60,
        scope: CacheScope.Public,
      },
    },
    fields: {
      price: float({ isIndexed: true }),
      marketCap: float({ isIndexed: true }),
      totalSupply: float({ isIndexed: true }),
      liquidity: float({ isIndexed: true }),
      pairPrice: float({ isIndexed: true }),
      burnedTokens: float({ isIndexed: true }),
      txns: json(),
      volume: json(),
      fdv: float({ isIndexed: true }),
      holders: float({ isIndexed: true }),
      avgHoldings: float({ isIndexed: true }),
      newHolders: float({ isIndexed: true }),
      leavingHolders: float({ isIndexed: true }),
      recurringHolders: float({ isIndexed: true }),
      annotation: text({ isIndexed: true }),
      customTrackers: json({ defaultValue: [] }),
      project: relationship({ ref: 'Project', db: { foreignKey: true } }),
      dateAdded: timestamp({ defaultValue: { kind: 'now' }, isIndexed: true }),
    },
  }),
};

export default MarketStat;
