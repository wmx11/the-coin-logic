import { CustomDataResponse, PreviousValueTypes, StatsData } from 'types/MarketData';
import { ProjectWithMarketStatsAndChanges } from 'types/Project';
import { getCustomDataChangeLabels, getCustomDataLabels } from 'utils/prepareCustomData';

export const getData = (data: ProjectWithMarketStatsAndChanges): StatsData[] => {
  const {
    price,
    liquidity,
    marketCap,
    pairPrice,
    totalSupply,
    project: { liquidityPair, trackData },
    priceChange,
    marketCapChange,
    liquidityChange,
    pairPriceChange,
    totalSupplyChange,
    customData,
  } = data;

  if (!trackData) {
    return [];
  }

  const pairToken = liquidityPair && liquidityPair[0].stablePair?.pairToken;

  const customDataChangeLabels = getCustomDataChangeLabels(getCustomDataLabels(customData));

  const resolvedCustomData = customData.map(
    ({ label, value, withPairPrice, withPrice, ticker }: CustomDataResponse, index: number) => ({
      value: withPairPrice || withPrice || value,
      previousValue: data[customDataChangeLabels[index]],
      title: withPairPrice || withPrice ? label : `${label} (${ticker})`,
      isCurrency: withPairPrice || withPrice,
    }),
  );

  return [
    {
      value: price as number,
      previousValue: priceChange as PreviousValueTypes,
      title: 'Price',
      isCurrency: true,
    },
    {
      value: marketCap as number,
      previousValue: marketCapChange as PreviousValueTypes,
      title: 'Market Cap',
      isCurrency: true,
    },
    {
      value: liquidity as number,
      previousValue: liquidityChange as PreviousValueTypes,
      title: 'Liquidity',
      isCurrency: true,
    },
    {
      value: pairPrice as number,
      previousValue: pairPriceChange as PreviousValueTypes,
      title: `Pair Price (${pairToken && pairToken[0].name})`,
      isCurrency: true,
    },
    {
      value: totalSupply as number,
      previousValue: totalSupplyChange as PreviousValueTypes,
      title: 'Total Supply',
      isCurrency: false,
    },
    ...resolvedCustomData,
  ];
};
