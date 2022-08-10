import React, { FC } from 'react';
import { BsBarChartLineFill } from 'react-icons/bs';
import { formateDateWithHours } from '../../../../utils/formatters';
import { StatsTabGroup } from '../../../StatsTabGroup';
import { getData } from './getData';
import { MarketDataTypes } from './types';

const MarketData: FC<MarketDataTypes> = ({ data }) => {
  const { dateAdded } = data;

  const marketData = getData(data);

  return (
    <StatsTabGroup
      title="Market Data"
      untrackedMessage="Market Data is untracked"
      Icon={BsBarChartLineFill}
      subtitle={`Last updated ${formateDateWithHours(dateAdded as string)}`}
      data={marketData}
    />
  );
};

export default MarketData;
