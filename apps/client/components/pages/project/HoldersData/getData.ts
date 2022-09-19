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
    project: { name, trackHoldersFromTokenAmount },
  } = data;

  return [
    {
      value: holders as number,
      previousValue: holdersChange as PreviousValueTypes,
      title: `Holders (from ${trackHoldersFromTokenAmount} tokens)`,
      isCurrency: false,
      tooltip: `Current ${name} holders amount counting from ${trackHoldersFromTokenAmount} tokens.`,
      chartEntry: 'getHolders',
    },
    {
      value: avgHoldings as number,
      previousValue: avgHoldingsChange as PreviousValueTypes,
      title: 'Average Holdings',
      isCurrency: false,
      tooltip: `Calculates (adds up all holder wallets tokens and divides by the number of holder wallets) the average wallet token holding.`,
      chartEntry: 'getAvgHoldings',
    },
    {
      value: newHolders as number,
      previousValue: newHoldersChange as PreviousValueTypes,
      title: 'New Holders',
      isCurrency: false,
      tooltip: `Amount of new holders onboarding ${name}.`,
      chartEntry: 'getNewHolders',
    },
    {
      value: recurringHolders as number,
      previousValue: recurringHoldersChange as PreviousValueTypes,
      title: 'Recurring Buys or Transfers',
      isCurrency: false,
      tooltip: `Amount of already existing holders purchasing, transacting, or transfering ${name} tokens.`,
      chartEntry: 'getRecurringHolders',
    },
    {
      value: leavingHolders as number,
      previousValue: leavingHoldersChange as PreviousValueTypes,
      title: 'Leaving Holders',
      isCurrency: false,
      tooltip: `Amount of holders that have sold their ${name} tokens and have less than ${trackHoldersFromTokenAmount} tokens in their wallet.`,
      chartEntry: 'getLeavingHolders',
    },
  ];
};
