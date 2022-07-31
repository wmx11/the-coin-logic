import { Paper, Text } from '@mantine/core';
import React, { FC } from 'react';
import { AiOutlineEllipsis } from 'react-icons/ai';
import { GoTriangleDown, GoTriangleUp } from 'react-icons/go';
import toCurrency from '../../utils/toCurrency';
import toLocaleString from '../../utils/toLocaleString';

interface StatTabProps {
  title?: string;
  value?: number;
  previousValue?: number;
  isCurrency?: boolean;
}

const StatTab: FC<StatTabProps> = ({ title, value, previousValue, isCurrency }) => {
  const TrendComponend = () => {
    if (!previousValue) {
      return null;
    }

    const trendValue = (value || 0) - previousValue;
    const percentage = ((value || 0) / previousValue - 1) * 100;
    const trendText = trendValue >= 0 ? `+${toLocaleString(trendValue)}` : `${toLocaleString(trendValue)}`;

    if (trendValue === 0) {
      return (
        <div className="flex justify-center">
          <AiOutlineEllipsis />
        </div>
      );
    }

    return (
      <div className={trendValue > 0 ? 'text-green-500' : 'text-red-500'}>
        <div className="absolute top-2 left-2">{trendValue > 0 ? <GoTriangleUp /> : <GoTriangleDown />}</div>
        <Text>
          {trendText} ({toLocaleString(percentage)}%)
        </Text>
      </div>
    );
  };

  return (
    <Paper p="md" shadow="sm" withBorder className="w-[250px] text-center relative">
      <Text className="text-slate-500">{title}</Text>
      <Text weight={700} className="text-3xl">
        {isCurrency ? toCurrency(value) : toLocaleString(value)}
      </Text>
      <TrendComponend />
    </Paper>
  );
};

export default StatTab;
