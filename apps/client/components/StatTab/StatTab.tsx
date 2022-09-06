import { Paper, Popover, Text } from '@mantine/core';
import React, { FC, useState } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import { PreviousValueTypes } from '../../types/MarketData';
import toCurrency from '../../utils/toCurrency';
import toLocaleString from '../../utils/toLocaleString';
import { Trend } from '../Trend';

type StatTabProps = {
  title?: string;
  value?: number;
  isCurrency?: boolean;
  tooltip?: string;
  previousValue: PreviousValueTypes;
};

const StatTab: FC<StatTabProps> = ({ title, value, previousValue, isCurrency, tooltip }) => {
  const [opened, setOpened] = useState(false);
  return (
    <Paper
      p="md"
      shadow="sm"
      withBorder
      className="w-full min-h-[115px] md:w-[265px] text-center relative hover:shadow-lg transition-shadow"
    >
      <Text className="text-slate-500 font-semibold text-sm">{title}</Text>
      <Text weight={700} className="text-2xl mb-1">
        {isCurrency ? toCurrency(value) : toLocaleString(value)}
      </Text>
      <Trend previousValue={previousValue} />
      <div className="absolute bottom-1 left-2">
        <div className="cursor-pointer">
          <Popover
            opened={opened}
            onClose={() => setOpened(false)}
            width={150}
            withArrow
            position="top"
            withCloseButton
            shadow="md"
            target={<FaInfoCircle onClick={() => setOpened(true)} className="text-violet" />}
          >
            <Text size="sm" pt='xs'>
              {tooltip}
            </Text>
          </Popover>
        </div>
      </div>
    </Paper>
  );
};

export default StatTab;
