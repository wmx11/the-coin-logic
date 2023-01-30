import { PreviousValueTypes, StatsData } from 'types/MarketData';
import { ProjectWithMarketStatsAndChanges } from 'types/Project';

export const getData = (data: ProjectWithMarketStatsAndChanges): StatsData[] => {
  const {
    twitter,
    discord,
    telegram,
    project: { name },
  } = data;

  return [
    {
      value: discord as number,
      previousValue: {
        change: data.discordChange24,
        percentage: data.discordChange24Percentage,
      } as PreviousValueTypes,
      title: 'Discord Members',
      isCurrency: false,
      tooltip: `Current ${name} Discord Members Count.`,
      chartEntry: 'discord',
    },
    {
      value: telegram as number,
      previousValue: {
        change: data.telegramChange24,
        percentage: data.telegramChange24Percentage,
      } as PreviousValueTypes,
      title: 'Telegram Members',
      isCurrency: false,
      tooltip: `Current ${name} Telegram Members Count.`,
      chartEntry: 'telegram',
    },
    {
      value: twitter as number,
      previousValue: {
        change: data.twitterChange24,
        percentage: data.twitterChange24Percentage,
      } as PreviousValueTypes,
      title: 'Twitter Followers',
      isCurrency: false,
      tooltip: `Current ${name} Twitter Followers Count.`,
      chartEntry: 'twitter',
    },
  ];
};
