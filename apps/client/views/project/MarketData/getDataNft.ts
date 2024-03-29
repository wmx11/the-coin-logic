import { CustomTrackersResponse, PreviousValueTypes, StatsData } from 'types/MarketData';
import { ProjectWithMarketStatsAndChanges } from 'types/Project';
import { getCustomTrackersChangeLabels, getCustomTrackersLabels } from 'utils/prepareCustomTrackers';

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
    customTrackers,
    project: { name, trackData, network, symbol },
  } = data;

if (!trackData) {
    return [];
  }

  const customDataChangeLabels = getCustomTrackersChangeLabels(getCustomTrackersLabels(customTrackers));

  const resolvedCustomData = customTrackers.map(
    ({ id, label, value, description, isCurrency }: CustomTrackersResponse, index: number) => ({
      value,
      previousValue: data[customDataChangeLabels[index]],
      title: label,
      chartEntry: 'customTracker',
      id,
      tooltip: description,
      isCurrency,
    }),
  );

  return [
    {
      value: avgPrice as number,
      previousValue: {
        change: data.avgPriceChange24,
        percentage: data.avgPriceChange24Percentage,
      } as PreviousValueTypes,
      title: `Average Price (${symbol || network?.symbol})`,
      chartEntry: 'avgPrice',
      isChartDefaultOpen: true,
      tooltip: `Current ${name} average price in ${symbol || network?.symbol}.`,
    },
    {
      value: ceilPrice as number,
      previousValue: {
        change: data.ceilPriceChange24,
        percentage: data.ceilPriceChange24Percentage,
      } as PreviousValueTypes,
      title: `Ceiling Price (${symbol || network?.symbol})`,
      chartEntry: 'ceilPrice',
      tooltip: `Current ${name} ceiling (max) price in ${symbol || network?.symbol}.`,
    },
    {
      value: floorPrice as number,
      previousValue: {
        change: data.floorPriceChange24,
        percentage: data.floorPriceChange24Percentage,
      } as PreviousValueTypes,
      title: `Floor Price (${symbol || network?.symbol})`,
      chartEntry: 'floorPrice',
      tooltip: `Current ${name} floor (minimum) price in ${symbol || network?.symbol}.`,
    },
    {
      value: totalHoldings as number,
      previousValue: {
        change: data.totalHoldingsChange24,
        percentage: data.totalHoldingsChange24Percentage,
      } as PreviousValueTypes,
      title: 'Total Holdings',
      chartEntry: 'totalHoldings',
      tooltip: `Sum of all ${name} NFTs across wallets.`,
    },
    {
      value: marketCap as number,
      previousValue: {
        change: data.marketCapChange24,
        percentage: data.marketCapChange24Percentage,
      } as PreviousValueTypes,
      title: `Approx. Market Cap (${symbol || network?.symbol})`,
      chartEntry: 'marketCap',
      tooltip: 'Approximate market cap of the NFT collection.',
    },
    {
      value: salesVolume as number,
      previousValue: {
        change: data.salesVolumeChange24,
        percentage: data.salesVolumeChange24Percentage,
      } as PreviousValueTypes,
      title: 'Sales Volume',
      chartEntry: 'salesVolume',
      tooltip: `Sum of all sales in ${symbol || network?.symbol}`,
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
      tooltip: `Current ${name} Total Supply. The maximum amount of tokens in existence.`,
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
    ...resolvedCustomData,
  ];
};
