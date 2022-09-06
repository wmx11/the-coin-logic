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
    },
    {
      value: avgHoldings as number,
      previousValue: avgHoldingsChange as PreviousValueTypes,
      title: 'Average Holdings',
      isCurrency: false,
      tooltip: `Calculates (adds up all holder wallets tokens and divides by the number of holder wallets) the average wallet token holding.`,
    },
    {
      value: newHolders as number,
      previousValue: newHoldersChange as PreviousValueTypes,
      title: 'New Holders',
      isCurrency: false,
      tooltip: `Amount of new holders onboarding ${name}.`,
    },
    {
      value: recurringHolders as number,
      previousValue: recurringHoldersChange as PreviousValueTypes,
      title: 'Recurring Buys',
      isCurrency: false,
      tooltip: `Amount of already existing holders purchasing or transacting ${name} tokens.`,
    },
    {
      value: leavingHolders as number,
      previousValue: leavingHoldersChange as PreviousValueTypes,
      title: 'Leaving Holders',
      isCurrency: false,
      tooltip: `Amount of holders that have sold their ${name} tokens and have less than ${trackHoldersFromTokenAmount} tokens in their wallet.`,
    },
  ];
};
