import React, { FC } from 'react';
import { BsBarChartLineFill } from 'react-icons/bs';
import { MarketDataWithChangeAndProjectTypes } from '../../../../types/MarketData';
import { formateDateWithHours } from '../../../../utils/formatters';
import { StatsTabGroup } from '../../../StatsTabGroup';

interface MarketDataProps {
  data: MarketDataWithChangeAndProjectTypes;
}

const MarketData: FC<MarketDataProps> = ({ data }) => {
  const {
    price,
    liquidity,
    marketCap,
    pairPrice,
    totalSupply,
    dateAdded,
    project: { pairToken },
    customData,
    priceChange,
    marketCapChange,
    liquidityChange,
    pairPriceChange,
    totalSupplyChange,
  } = data;

  const marketData = [
    {
      value: price,
      previousValue: priceChange,
      title: 'Price',
      isCurrency: true,
    },
    {
      value: marketCap,
      previousValue: marketCapChange,
      title: 'Market Cap',
      isCurrency: true,
    },
    {
      value: liquidity,
      previousValue: liquidityChange,
      title: 'Liquidity',
      isCurrency: true,
    },
    {
      value: pairPrice,
      previousValue: pairPriceChange,
      title: `Pair Price (${pairToken[0].name})`,
      isCurrency: true,
    },
    {
      value: totalSupply,
      previousValue: totalSupplyChange,
      title: 'Total Supply',
      isCurrency: false,
    },
  ];

  return (
    <StatsTabGroup
      title="Market Data"
      Icon={BsBarChartLineFill}
      subtitle={`Last updated ${formateDateWithHours(dateAdded as string)}`}
      data={marketData}
    />
  );
};

export default MarketData;
