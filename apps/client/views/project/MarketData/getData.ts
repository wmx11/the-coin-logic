import { CustomTrackersResponse, PreviousValueTypes, StatsData } from 'types/MarketData';
import { ProjectWithMarketStatsAndChanges } from 'types/Project';
import { getCustomTrackersChangeLabels, getCustomTrackersLabels } from 'utils/prepareCustomTrackers';
import getPrimaryPairAddress from 'tcl-packages/utils/getPrimaryPairAddress';

export const getData = (data: ProjectWithMarketStatsAndChanges): StatsData[] => {
  const {
    price,
    liquidity,
    marketCap,
    pairPrice,
    totalSupply,
    burnedTokens,
    fdv,
    project: { name, trackData },
    customTrackers,
  } = data;

  if (!trackData) {
    return [];
  }

  const pairToken = getPrimaryPairAddress(data.project);
  const pairTokenName = pairToken && pairToken.length > 0 && pairToken[0].name?.split('/')[1];

  const customDataChangeLabels = getCustomTrackersChangeLabels(getCustomTrackersLabels(customTrackers));

  const resolvedCustomData = customTrackers?.map(
    ({ id, label, value, description, isCurrency }: CustomTrackersResponse, index: number) => ({
      value,
      previousValue: data[customDataChangeLabels[index]],
      title: label,
      chartEntry: 'customTracker',
      id,
      tooltip: description,
      isCurrency,
    }),
  ) || [];

  return [
    {
      value: price as number,
      previousValue: { change: data.priceChange24, percentage: data.priceChange24Percentage } as PreviousValueTypes,
      title: 'Price',
      chartEntry: 'price',
      isCurrency: true,
      isChartDefaultOpen: true,
      tooltip: `Current ${name} price in $USD.`,
    },
    {
      value: marketCap as number,
      previousValue: {
        change: data.marketCapChange24,
        percentage: data.marketCapChange24Percentage,
      } as PreviousValueTypes,
      title: 'Market Cap',
      chartEntry: 'marketCap',
      isCurrency: true,
      tooltip: 'Current market cap. Total supply * Price.',
    },
    {
      value: liquidity as number,
      previousValue: {
        change: data.liquidityChange24,
        percentage: data.liquidityChange24Percentage,
      } as PreviousValueTypes,
      title: 'Liquidity',
      chartEntry: 'liquidity',
      isCurrency: true,
      tooltip: `Current ${name} liquidity valuation in $USD. Liquidity is displayed in ${pairTokenName}`,
    },
    {
      value: pairPrice as number,
      previousValue: {
        change: data.pairPriceChange24,
        percentage: data.pairPriceChange24Percentage,
      } as PreviousValueTypes,
      title: `Pair Price (${pairTokenName})`,
      chartEntry: 'pairPrice',
      isCurrency: true,
      tooltip: `Current ${name} main pair token valuation in $USD.`,
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
      tooltip: `Current ${name} token total supply.`,
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
      tooltip: `Current burned ${name} tokens amount.`,
    },
    {
      value: fdv as number,
      previousValue: { change: data.fdvChange24, percentage: data.fdvChange24Percentage } as PreviousValueTypes,
      title: 'Fully Diluted Valuation',
      chartEntry: 'fdv',
      isCurrency: true,
      tooltip: `(Total supply - burned supply) * price.`,
    },
    ...resolvedCustomData,
  ];
};
