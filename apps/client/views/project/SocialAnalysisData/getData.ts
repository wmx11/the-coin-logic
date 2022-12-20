import { PreviousValueTypes, StatsData } from 'types/MarketData';
import { ProjectWithMarketStatsAndChanges } from 'types/Project';

export const getData = (data: ProjectWithMarketStatsAndChanges): StatsData[] => {
  const {
    twitter,
    discord,
    telegram,
    twitterChange,
    discordChange,
    telegramChange,
    project: { name },
  } = data;

  return [
    {
      value: discord as number,
      previousValue: discordChange as PreviousValueTypes,
      title: 'Discord Members',
      isCurrency: false,
      tooltip: `Current ${name} Discord Members Count.`,
      chartEntry: 'getDiscordMembers',
    },
    {
      value: telegram as number,
      previousValue: telegramChange as PreviousValueTypes,
      title: 'Telegram Members',
      isCurrency: false,
      tooltip: `Current ${name} Telegram Members Count.`,
      chartEntry: 'getTelegramMembers',
    },
    {
      value: twitter as number,
      previousValue: twitterChange as PreviousValueTypes,
      title: 'Twitter Followers',
      isCurrency: false,
      tooltip: `Current ${name} Twitter Followers Count.`,
      chartEntry: 'getTwitterFollowers',
    },
  ];
};
