import { CustomTrackersResponse, PreviousValueTypes, StatsData } from 'types/MarketData';
import { ProjectWithMarketStatsAndChanges } from 'types/Project';
import { getCustomTrackersChangeLabels, getCustomTrackersLabels } from 'utils/prepareCustomTrackers';

export const getData = (data: ProjectWithMarketStatsAndChanges): StatsData[] => {
  const {
    price,
    liquidity,
    marketCap,
    pairPrice,
    totalSupply,
    burnedTokens,
    fdv,
    project: { name, liquidityPair, trackData },
    priceChange,
    marketCapChange,
    liquidityChange,
    pairPriceChange,
    totalSupplyChange,
    burnedTokensChange,
    fdvChange,
    customTrackers,
  } = data;

  if (!trackData) {
    return [];
  }

  const pairToken = liquidityPair && liquidityPair[0].stablePair?.pairToken;

  const customDataChangeLabels = getCustomTrackersChangeLabels(getCustomTrackersLabels(customTrackers));

  const resolvedCustomData = customTrackers.map(({ label, value, description }: CustomTrackersResponse, index: number) => ({
    value,
    previousValue: data[customDataChangeLabels[index]],
    title: label,
    tooltip: description,
    isCurrency: false,
  }));

  return [
    {
      value: price as number,
      previousValue: priceChange as PreviousValueTypes,
      title: 'Price',
      chartEntry: 'getPrice',
      isCurrency: true,
      tooltip: `Current ${name} price in $USD.`,
    },
    {
      value: marketCap as number,
      previousValue: marketCapChange as PreviousValueTypes,
      title: 'Market Cap',
      chartEntry: 'getMarketCap',
      isCurrency: true,
      tooltip: 'Current market cap. Total supply * Price.',
    },
    {
      value: liquidity as number,
      previousValue: liquidityChange as PreviousValueTypes,
      title: 'Liquidity',
      chartEntry: 'getLiquidity',
      isCurrency: true,
      tooltip: `Current ${name} liquidity valuation in $USD.`,
    },
    {
      value: pairPrice as number,
      previousValue: pairPriceChange as PreviousValueTypes,
      title: `Pair Price (${pairToken && pairToken[0].name})`,
      chartEntry: 'getPairPrice',
      isCurrency: true,
      tooltip: `Current ${name} main pair token valuation in $USD.`,
    },
    {
      value: totalSupply as number,
      previousValue: totalSupplyChange as PreviousValueTypes,
      title: 'Total Supply',
      chartEntry: 'getTotalSupply',
      isCurrency: false,
      tooltip: `Current ${name} token total supply.`,
    },
    {
      value: burnedTokens as number,
      previousValue: burnedTokensChange as PreviousValueTypes,
      title: 'Burned Tokens',
      chartEntry: 'getBurnedTokens',
      isCurrency: false,
      tooltip: `Current burned ${name} tokens amount.`,
    },
    {
      value: fdv as number,
      previousValue: fdvChange as PreviousValueTypes,
      title: 'Fully Diluted Valuation',
      chartEntry: 'getFdv',
      isCurrency: true,
      tooltip: `(Total supply - burned supply) * price.`,
    },
    ...resolvedCustomData,
  ];
};
