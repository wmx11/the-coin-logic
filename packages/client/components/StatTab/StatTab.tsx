import { Paper, Text } from '@mantine/core';
import React, { FC } from 'react';
import { MarketDataPreviousValueType } from '../../types/MarketData';
import toCurrency from '../../utils/toCurrency';
import toLocaleString from '../../utils/toLocaleString';
import { Trend } from '../Trend';

type StatTabProps = MarketDataPreviousValueType & {
  title?: string;
  value?: number;
  isCurrency?: boolean;
};

const StatTab: FC<StatTabProps> = ({ title, value, previousValue, isCurrency }) => {
  return (
    <Paper p="md" shadow="sm" withBorder className="w-[265px] text-center relative">
      <Text className="text-slate-500">{title}</Text>
      <Text weight={700} className="text-2xl">
        {isCurrency ? toCurrency(value) : toLocaleString(value)}
      </Text>
      <Trend previousValue={previousValue} />
    </Paper>
  );
};

export default StatTab;
