import { MarketingCampaign } from 'types';
import { StatsData } from 'types/MarketData';
import getChangesPartial from 'utils/getChangesPartial';
import { resolvePercentage } from 'utils/utils';

type GetGoalsDataTypes = {
  campaign: MarketingCampaign;
};

const getGoalsData = ({ campaign }: GetGoalsDataTypes): StatsData[] => {
  if (!campaign) {
    return [];
  }

  const {
    twitterGoal,
    discordGoal,
    telegramGoal,
    marketStatSnapshot,
    finalSnapshot,
    trackMarket,
    trackSocial,
    priceGoal,
    marketCapGoal,
    volumeGoal,
    holdersGoal,
    marketBudget,
    budget,
    socialBudget,
  } = campaign;

  const results: StatsData[] = [
    {
      title: 'Total Budget',
      value: budget as number,
      isCurrency: true,
    },
  ];

  const resolveDataWithPercentage = ({ goal, key }: { goal: number; key: string }) => {
    const percentage = resolvePercentage((goal as number) || 0, marketStatSnapshot[key]);
    const resolvedData = percentage;

    if (finalSnapshot) {
      return [resolvedData, finalSnapshot[key]];
    }

    return resolvedData;
  };

  const getChanges = getChangesPartial(finalSnapshot, marketStatSnapshot);

  if (trackMarket) {
    results.push(
      {
        title: 'Market Metrics Budget',
        value: marketBudget as number,
        isCurrency: true,
      },
      {
        title: `Price Goal (${priceGoal || 0}%)`,
        value: resolveDataWithPercentage({ goal: priceGoal as number, key: 'price' }),
        previousValue: getChanges('price').priceChange,
        isCurrency: true,
      },
      {
        title: `Market Cap Goal (${marketCapGoal || 0}%)`,
        value: resolveDataWithPercentage({ goal: marketCapGoal as number, key: 'marketCap' }),
        previousValue: getChanges('marketCap').marketCapChange,
        isCurrency: true,
      },
      {
        title: `Volume Goal (${volumeGoal || 0}%)`,
        value: resolveDataWithPercentage({ goal: volumeGoal as number, key: 'volume' }),
        previousValue: getChanges('volume').volumeChange,
        isCurrency: true,
      },
      {
        title: `Holders Goal (${holdersGoal || 0}%)`,
        value: resolveDataWithPercentage({ goal: holdersGoal as number, key: 'holders' }),
        previousValue: getChanges('holders').holdersChange,
        isCurrency: false,
      },
    );
  }

  if (trackSocial) {
    results.push(
      {
        title: 'Social Metrics Budget',
        value: socialBudget as number,
        isCurrency: true,
      },
      {
        title: `Twitter Followers Goal (${twitterGoal || 0}%)`,
        value: resolveDataWithPercentage({ goal: twitterGoal as number, key: 'twitter' }),
        previousValue: getChanges('twitter').twitterChange,
        isCurrency: false,
      },
      {
        title: `Discord Members Goal (${discordGoal || 0}%)`,
        value: resolveDataWithPercentage({ goal: discordGoal as number, key: 'discord' }),
        previousValue: getChanges('discord').discordChange,
        isCurrency: false,
      },
      {
        title: `Telegram Members Goal (${telegramGoal || 0}%)`,
        value: resolveDataWithPercentage({ goal: telegramGoal as number, key: 'telegram' }),
        previousValue: getChanges('telegram').telegramChange,
        isCurrency: false,
      },
    );
  }

  return results;
};

export default getGoalsData;
