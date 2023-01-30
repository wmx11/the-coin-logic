import { PreviousValueTypes, StatsData } from 'types/MarketData';
import { ProjectWithMarketStatsAndChanges } from 'types/Project';

export const getDataNft = (data: ProjectWithMarketStatsAndChanges): StatsData[] => {
  const {
    avgPrice,
    marketCap,
    totalSupply,
    burnedTokens,
    ceilPrice,
    floorPrice,
    salesVolume,
    totalHoldings,
    project: { name, trackData, network },
  } = data;

  if (!trackData) {
    return [];
  }

  return [
    {
      value: avgPrice as number,
      previousValue: {
        change: data.avgPriceChange24,
        percentage: data.avgPriceChange24Percentage,
      } as PreviousValueTypes,
      title: `Average Price (${network?.symbol})`,
      chartEntry: 'avgPrice',
      isChartDefaultOpen: true,
      tooltip: `Current ${name} price in $USD.`,
    },
    {
      value: ceilPrice as number,
      previousValue: {
        change: data.ceilPriceChange24,
        percentage: data.ceilPriceChange24Percentage,
      } as PreviousValueTypes,
      title: `Ceiling Price (${network?.symbol})`,
      chartEntry: 'ceilPrice',
      tooltip: `Current ${name} price in $USD.`,
    },
    {
      value: floorPrice as number,
      previousValue: {
        change: data.floorPriceChange24,
        percentage: data.floorPriceChange24Percentage,
      } as PreviousValueTypes,
      title: `Floor Price (${network?.symbol})`,
      chartEntry: 'floorPrice',
      tooltip: `Current ${name} price in $USD.`,
    },
    {
      value: totalHoldings as number,
      previousValue: {
        change: data.totalHoldingsChange24,
        percentage: data.totalHoldingsChange24Percentage,
      } as PreviousValueTypes,
      title: 'Total Holdings',
      chartEntry: 'totalHoldings',
      tooltip: `Current ${name} price in $USD.`,
    },
    {
      value: marketCap as number,
      previousValue: {
        change: data.marketCapChange24,
        percentage: data.marketCapChange24Percentage,
      } as PreviousValueTypes,
      title: `Market Cap (${network?.symbol})`,
      chartEntry: 'marketCap',
      tooltip: 'Current market cap. Total supply * Price.',
    },
    {
      value: salesVolume as number,
      previousValue: {
        change: data.salesVolumeChange24,
        percentage: data.salesVolumeChange24Percentage,
      } as PreviousValueTypes,
      title: 'Sales Volume',
      chartEntry: 'salesVolume',
      tooltip: 'Current market cap. Total supply * Price.',
    },
    {
      value: totalSupply as number,
      previousValue: {
        change: data.totalSupplyChange24,
        percentage: data.totalSupplyChange24Percentage,
      } as PreviousValueTypes,
      title: 'Total Supply',
      chartEntry: 'totalSupply',
      isCurrency: false,
      tooltip: `Current ${name} NFT total supply.`,
    },
    {
      value: burnedTokens as number,
      previousValue: {
        change: data.burnedTokensChange24,
        percentage: data.burnedTokensChange24Percentage,
      } as PreviousValueTypes,
      title: 'Burned Tokens',
      chartEntry: 'burnedTokens',
      isCurrency: false,
      tooltip: `Current burned ${name} NFTs amount.`,
    },
  ];
};
