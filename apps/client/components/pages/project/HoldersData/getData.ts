import { PreviousValueTypes, StatsData } from 'types/MarketData';
import { ProjectWithMarketStatsAndChanges } from 'types/Project';

export const getData = (data: ProjectWithMarketStatsAndChanges): StatsData[] => {
  const {
    holders,
    avgHoldings,
    newHolders,
    recurringHolders,
    leavingHolders,
    holdersChange,
    avgHoldingsChange,
    newHoldersChange,
    recurringHoldersChange,
    leavingHoldersChange,
    project: { trackHoldersFromTokenAmount },
  } = data;

  return [
    {
      value: holders as number,
      previousValue: holdersChange as PreviousValueTypes,
      title: `Holders (from ${trackHoldersFromTokenAmount} tokens)`,
      isCurrency: false,
    },
    {
      value: avgHoldings as number,
      previousValue: avgHoldingsChange as PreviousValueTypes,
      title: 'Average Holdings',
      isCurrency: false,
    },
    {
      value: newHolders as number,
      previousValue: newHoldersChange as PreviousValueTypes,
      title: 'New Holders',
      isCurrency: false,
    },
    {
      value: recurringHolders as number,
      previousValue: recurringHoldersChange as PreviousValueTypes,
      title: 'Recurring Holders',
      isCurrency: false,
    },
    {
      value: leavingHolders as number,
      previousValue: leavingHoldersChange as PreviousValueTypes,
      title: 'Leaving Holders',
      isCurrency: false,
    },
  ];
};
