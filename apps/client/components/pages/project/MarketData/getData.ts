import { StatsData } from 'types/MarketData';
import { ProjectWithMarketStatsAndChanges } from 'types/Project';

export const getData = (data: ProjectWithMarketStatsAndChanges): StatsData[] => {
  const {
    price,
    liquidity,
    marketCap,
    pairPrice,
    totalSupply,
    project: { pairToken },
    priceChange,
    marketCapChange,
    liquidityChange,
    pairPriceChange,
    totalSupplyChange,
  } = data;

  return [
    {
      value: price as number,
      previousValue: priceChange,
      title: 'Price',
      isCurrency: true,
    },
    {
      value: marketCap as number,
      previousValue: marketCapChange,
      title: 'Market Cap',
      isCurrency: true,
    },
    {
      value: liquidity as number,
      previousValue: liquidityChange,
      title: 'Liquidity',
      isCurrency: true,
    },
    {
      value: pairPrice as number,
      previousValue: pairPriceChange,
      title: `Pair Price (${pairToken && pairToken[0].name})`,
      isCurrency: true,
    },
    {
      value: totalSupply as number,
      previousValue: totalSupplyChange,
      title: 'Total Supply',
      isCurrency: false,
    },
  ];
};
