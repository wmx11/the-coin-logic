import { Paper, Text } from '@mantine/core';
import React, { FC } from 'react';
import { PreviousValueTypes } from '../../types/MarketData';
import toCurrency from '../../utils/toCurrency';
import toLocaleString from '../../utils/toLocaleString';
import { Trend } from '../Trend';

type StatTabProps = {
  title?: string;
  value?: number;
  isCurrency?: boolean;
  previousValue: PreviousValueTypes;
};

const StatTab: FC<StatTabProps> = ({ title, value, previousValue, isCurrency }) => {
  return (
    <Paper p="md" shadow="sm" withBorder className="w-full min-h-[115px] md:w-[265px] text-center relative hover:shadow-lg transition-shadow">
      <Text className="text-slate-500 font-semibold text-sm">{title}</Text>
      <Text weight={700} className="text-2xl mb-1">
        {isCurrency ? toCurrency(value) : toLocaleString(value)}
      </Text>
      <Trend previousValue={previousValue} />
    </Paper>
  );
};

export default StatTab;
