import { Lists } from '.keystone/types';
import { list } from '@keystone-6/core';
import { float, json, relationship, timestamp } from '@keystone-6/core/fields';
import { CacheScope } from 'apollo-cache-control';

const MarketStat: Lists = {
  MarketStat: list({
    graphql: {
      cacheHint: {
        maxAge: 5 * 60,
        scope: CacheScope.Public,
      },
    },
    fields: {
      price: float(),
      priceChange24: float(),
      priceChange24Percentage: float(),
      marketCap: float(),
      marketCapChange24: float(),
      marketCapChange24Percentage: float(),
      totalSupply: float(),
      totalSupplyChange24: float(),
      totalSupplyChange24Percentage: float(),
      liquidity: float(),
      liquidityChange24: float(),
      liquidityChange24Percentage: float(),
      pairPrice: float(),
      pairPriceChange24: float(),
      pairPriceChange24Percentage: float(),
      burnedTokens: float(),
      burnedTokensChange24: float(),
      burnedTokensChange24Percentage: float(),
      txns: json(),
      volume: json(),
      fdv: float(),
      fdvChange24: float(),
      fdvChange24Percentage: float(),
      holders: float(),
      holdersChange24: float(),
      holdersChange24Percentage: float(),
      avgHoldings: float(),
      avgHoldingsChange24: float(),
      avgHoldingsChange24Percentage: float(),
      newHolders: float(),
      newHoldersChange24: float(),
      newHoldersChange24Percentage: float(),
      leavingHolders: float(),
      leavingHoldersChange24: float(),
      leavingHoldersChange24Percentage: float(),
      recurringHolders: float(),
      recurringHoldersChange24: float(),
      recurringHoldersChange24Percentage: float(),
      // NFTs
      // Average price based on value
      avgPrice: float(),
      avgPriceChange24: float(),
      avgPriceChange24Percentage: float(),
      // Floor price of the NFT based on value
      floorPrice: float(),
      floorPriceChange24: float(),
      floorPriceChange24Percentage: float(),
      // Ceil price of the NFT based on value
      ceilPrice: float(),
      ceilPriceChange24: float(),
      ceilPriceChange24Percentage: float(),
      // Total value of all sales
      salesVolume: float(),
      salesVolumeChange24: float(),
      salesVolumeChange24Percentage: float(),
      // Total sum of all holdings (tokens, NFTs) across wallets
      totalHoldings: float(),
      totalHoldingsChange24: float(),
      totalHoldingsChange24Percentage: float(),
      annotation: json({ defaultValue: { title: null, description: null, href: null } }),
      customTrackers: json({ defaultValue: [] }),
      project: relationship({ ref: 'Project', db: { foreignKey: true } }),
      dateAdded: timestamp({ defaultValue: { kind: 'now' }, isIndexed: true }),
    },
  }),
};

export default MarketStat;
