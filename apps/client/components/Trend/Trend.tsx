import { Text } from '@mantine/core';
import React, { FC } from 'react';
import { AiOutlineEllipsis } from 'react-icons/ai';
import { GoTriangleDown, GoTriangleUp } from 'react-icons/go';
import { PreviousValue } from 'types/MarketData';
import toLocaleString from '../../utils/toLocaleString';

type TrendProps = PreviousValue & {
  value?: number | string;
  inline?: boolean;
};

const Trend: FC<TrendProps> = ({ value, previousValue, inline }) => {
  const trendValue = previousValue?.change || 0;
  const percentage = previousValue?.percentage || 0;
  const trendText = trendValue >= 0 ? `+${toLocaleString(trendValue)}` : `${toLocaleString(trendValue)}`;
  const trendColor = trendValue > 0 ? 'text-green-500' : 'text-red-500';
  const trendIndicator = trendValue > 0 ? <GoTriangleUp /> : <GoTriangleDown />;

  const inlineComponent = previousValue?.percentage ? (
    <div className="flex flex-col justify-center">
      <span className={`${trendColor} flex items-center`}>
        {trendIndicator}
        {value}
      </span>
      <div className={`${trendColor} text-xs`}>({toLocaleString(percentage)}%)</div>
    </div>
  ) : (
    <>{value}</>
  );

  if (trendValue === 0 && !inline) {
    return (
      <div className="flex justify-center">
        <AiOutlineEllipsis />
      </div>
    );
  }

  if (inline) {
    return inlineComponent;
  }

  return (
    <div className={trendColor}>
      <div className="absolute top-2 left-2 text-xs">{trendIndicator}</div>
      <Text className="text-xs font-semibold">
        {trendText} {percentage !== 0 ? `(${toLocaleString(percentage)}%)` : ''}
      </Text>
    </div>
  );
};

export default Trend;
