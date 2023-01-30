import { PreviousValueTypes, StatsData } from 'types/MarketData';
import { ProjectWithMarketStatsAndChanges } from 'types/Project';

export const getData = (data: ProjectWithMarketStatsAndChanges): StatsData[] => {
  const {
    holders,
    avgHoldings,
    newHolders,
    recurringHolders,
    leavingHolders,
    project: { name, trackHoldersFromTokenAmount },
  } = data;

  return [
    {
      value: holders as number,
      previousValue: {
        change: data.holdersChange24,
        percentage: data.holdersChange24Percentage,
      } as PreviousValueTypes,
      title: `Holders (from ${trackHoldersFromTokenAmount} tokens)`,
      isCurrency: false,
      tooltip: `Current ${name} holders amount counting from ${trackHoldersFromTokenAmount} tokens.`,
      chartEntry: 'holders',
    },
    {
      value: avgHoldings as number,
      previousValue: {
        change: data.avgHoldingsChange24,
        percentage: data.avgHoldingsChange24Percentage,
      } as PreviousValueTypes,
      title: 'Average Holdings',
      isCurrency: false,
      tooltip: `Calculates (adds up all holder wallets tokens and divides by the number of holder wallets) the average wallet token holding.`,
      chartEntry: 'avgHoldings',
    },
    {
      value: newHolders as number,
      previousValue: {
        change: data.newHoldersChange24,
        percentage: data.newHoldersChange24Percentage,
      } as PreviousValueTypes,
      title: 'New Holders',
      isCurrency: false,
      tooltip: `Amount of new holders onboarding ${name}.`,
      chartEntry: 'newHolders',
    },
    {
      value: recurringHolders as number,
      previousValue: {
        change: data.recurringHoldersChange24,
        percentage: data.recurringHoldersChange24Percentage,
      } as PreviousValueTypes,
      title: 'Recurring Buys or Transfers',
      isCurrency: false,
      tooltip: `Amount of already existing holders purchasing, transacting, or transfering ${name} tokens.`,
      chartEntry: 'recurringHolders',
    },
    {
      value: leavingHolders as number,
      previousValue: {
        change: data.leavingHoldersChange24,
        percentage: data.leavingHoldersChange24Percentage,
      } as PreviousValueTypes,
      title: 'Leaving Holders',
      isCurrency: false,
      tooltip: `Amount of holders that have sold their ${name} tokens and have less than ${trackHoldersFromTokenAmount} tokens in their wallet.`,
      chartEntry: 'leavingHolders',
    },
  ];
};
