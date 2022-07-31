import { format } from 'date-fns';
import React, { FC } from 'react';
import { BsBarChartLineFill } from 'react-icons/bs';
import { MarketDataTypes } from '../../../../types/MarketData';
import { formateDateWithHours } from '../../../../utils/formatters';
import StatsTabGroup from '../../../StatsTabGroup';

interface MarketDataProps {
  data: MarketDataTypes;
}

const MarketData: FC<MarketDataProps> = ({ data }) => {
  const { price, liquidity, marketCap, pairPrice, totalSupply, dateAdded, customData } = data;

  const marketData = [
    {
      value: price,
      previousValue: 333,
      title: 'Price',
      isCurrency: true,
    },
    {
      value: marketCap,
      previousValue: 100000,
      title: 'Market Cap',
      isCurrency: true,
    },
    {
      value: liquidity,
      previousValue: liquidity,
      title: 'Liquidity',
      isCurrency: true,
    },
    {
      value: pairPrice,
      previousValue: pairPrice,
      title: 'Pair Price',
      isCurrency: true,
    },
    {
      value: totalSupply,
      previousValue: totalSupply,
      title: 'Total Supply',
      isCurrency: false,
    },
  ];

  return (
    <StatsTabGroup
      title="Market Data"
      Icon={BsBarChartLineFill}
      subtitle={`Last updated ${formateDateWithHours(dateAdded)}`}
      data={marketData}
    />
  );
};

export default MarketData;
