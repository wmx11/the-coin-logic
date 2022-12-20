import { AverageMarketChangeForPeriodOfTime } from 'data/getters';
import { MarketingCampaign } from 'types';
import { StatsData } from 'types/MarketData';
import { ProjectWithMarketStatsAndChanges } from 'types/Project';
import getChangesPartial from 'utils/getChangesPartial';

type GetMetricsDataProps = {
  campaign: MarketingCampaign;
  projectData: ProjectWithMarketStatsAndChanges;
  projectAverages: AverageMarketChangeForPeriodOfTime;
};

const getMetricsData = ({ campaign, projectData, projectAverages }: GetMetricsDataProps): StatsData[] => {
  if (!campaign || !projectData) {
    return [];
  }

  const {
    marketStatSnapshot,
    finalSnapshot,
    trackMarket,
    trackSocial,
    marketBudget,
    budget,
    socialBudget,
  } = campaign;

  const marketMapping = {
    price: marketStatSnapshot?.price,
    marketCap: marketStatSnapshot?.marketCap,
    volume: marketStatSnapshot?.volume,
    holders: marketStatSnapshot?.holders,
  };

  const socialMapping = {
    twitter: marketStatSnapshot?.twitter,
    discord: marketStatSnapshot?.discord,
    telegram: marketStatSnapshot?.telegram,
  };

  const mapping = {
    ...marketMapping,
    ...socialMapping,
    buys: marketStatSnapshot?.buys,
    sells: marketStatSnapshot?.sells,
  };

  const budgetForMarket = marketBudget
    ? marketBudget / Object.keys(marketMapping).length
    : (budget as number) / Object.keys(marketMapping).length;

  const budgetForSocial = socialBudget
    ? socialBudget / Object.keys(socialMapping).length
    : (budget as number) / Object.keys(socialMapping).length;

  const getChanges = getChangesPartial(finalSnapshot || projectAverages, mapping);

  const results = { marketData: [] as StatsData[], socialData: [] as StatsData[] };

  if (trackMarket && Object.values(marketMapping).some((value) => value > 0)) {
    results.marketData.push({
      subGroup: {
        title: 'Market Metrics',
        data: [],
      },
    });
  }

  if (trackSocial && Object.values(socialMapping).some((value) => value > 0)) {
    results.socialData.push({
      subGroup: {
        title: 'Social Metrics',
        data: [],
      },
    });
  }

  const marketDataSubgroup = results.marketData[0]?.subGroup?.data;
  const socialDataSubgroup = results.socialData[0]?.subGroup?.data;

  if (!marketDataSubgroup && !socialDataSubgroup) {
    return [];
  }

  if (mapping.price) {
    marketDataSubgroup?.push(
      {
        title: 'Avg. Buys',
        value: [marketStatSnapshot?.buys, (finalSnapshot || projectAverages)?.buys],
        isCurrency: false,
        previousValue: getChanges('buys').buysChange,
      },
      {
        title: 'Avg. Sells',
        value: [marketStatSnapshot?.sells, (finalSnapshot || projectAverages)?.sells],
        isCurrency: false,
        previousValue: getChanges('sells').sellsChange,
      },
      {
        title: 'Avg. Price',
        value: [marketStatSnapshot?.price, (finalSnapshot || projectAverages)?.price],
        isCurrency: true,
        previousValue: getChanges('price').priceChange,
      },
      {
        title: 'Cost per Price Tick',
        value: (budgetForMarket as number) / (getChanges('price').priceChange.percentage),
        isCurrency: true,
        previousValue: getChanges('default').defaultChange,
      },
    );
  }

  if (mapping.marketCap) {
    marketDataSubgroup?.push(
      {
        title: 'Avg. Market Cap',
        value: [marketStatSnapshot?.marketCap, (finalSnapshot || projectAverages)?.marketCap],
        isCurrency: true,
        previousValue: getChanges('marketCap').marketCapChange,
      },
      {
        title: 'Cost per Market Cap Tick',
        value: (budgetForMarket as number) / (getChanges('marketCap').marketCapChange.percentage),
        isCurrency: true,
        previousValue: getChanges('default').defaultChange,
      },
    );
  }

  if (mapping.volume) {
    marketDataSubgroup?.push(
      {
        title: 'Avg. Volume',
        value: [marketStatSnapshot?.volume, (finalSnapshot || projectAverages)?.volume],
        isCurrency: true,
        previousValue: getChanges('volume').volumeChange,
      },
      {
        title: 'Cost per Volume Tick',
        value: (budgetForMarket as number) / (getChanges('volume').volumeChange.percentage),
        isCurrency: true,
        previousValue: getChanges('default').defaultChange,
      },
    );
  }

  if (mapping.holders) {
    marketDataSubgroup?.push(
      {
        title: 'Avg. Holders',
        value: [marketStatSnapshot?.holders, (finalSnapshot || projectAverages)?.holders],
        isCurrency: false,
        previousValue: getChanges('holders').holdersChange,
      },
      {
        title: 'Cost per Holder',
        value: (budgetForMarket as number) / (getChanges('holders').holdersChange.change || 0),
        isCurrency: true,
        previousValue: getChanges('default').defaultChange,
      },
    );
  }

  if (mapping.twitter) {
    socialDataSubgroup?.push(
      {
        title: 'Avg. Twitter Followers',
        value: [marketStatSnapshot?.twitter, (finalSnapshot || projectAverages)?.twitter],
        isCurrency: false,
        previousValue: getChanges('twitter').twitterChange,
      },
      {
        title: 'Cost per Twitter Follower',
        value: (budgetForSocial as number) / getChanges('twitter').twitterChange.change,
        isCurrency: true,
        previousValue: getChanges('default').defaultChange,
      },
    );
  }

  if (mapping.discord) {
    socialDataSubgroup?.push(
      {
        title: 'Avg. Discord Members',
        value: [marketStatSnapshot?.discord, (finalSnapshot || projectAverages)?.discord],
        isCurrency: false,
        previousValue: getChanges('discord').discordChange,
      },
      {
        title: 'Cost per Discord Member',
        value: (budgetForSocial as number) / getChanges('discord').discordChange.change,
        isCurrency: true,
        previousValue: getChanges('default').defaultChange,
      },
    );
  }

  if (mapping.telegram) {
    socialDataSubgroup?.push(
      {
        title: 'Avg. Telegram Members',
        value: [marketStatSnapshot?.telegram, (finalSnapshot || projectAverages)?.telegram],
        isCurrency: false,
        previousValue: getChanges('telegram').telegramChange,
      },
      {
        title: 'Cost per Telegram Member',
        value: (budgetForSocial as number) / getChanges('telegram').telegramChange.change,
        isCurrency: true,
        previousValue: getChanges('default').defaultChange,
      },
    );
  }

  return [...results.marketData, ...results.socialData];
};

export default getMetricsData;
