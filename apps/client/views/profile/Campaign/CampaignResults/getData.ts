import { MarketingCampaign, MarketingTrackerResult } from 'types';
import { StatsData } from 'types/MarketData';

type GetDataProps = {
  campaign: MarketingCampaign;
  campaignResults: MarketingTrackerResult;
};

const getData = ({ campaign, campaignResults }: GetDataProps): StatsData[] => {
  if (!campaignResults) {
    return [];
  }

  const budget = campaign.socialBudget || ((campaign.budget as number) || 0) / 2;

  const results: StatsData[] = [
    {
      title: 'Total Clicks',
      value: campaignResults.totalClicks,
      tooltip: 'Total amount of clicks in the campaign.',
    },
    {
      title: 'Unique Clicks',
      value: campaignResults.uniqueClicks,
      tooltip: 'Unique clicks made by individual users.',
    },
    {
      title: 'Cost Per Click (CPC)',
      value: (budget || 1) / campaignResults.totalClicks,
      isCurrency: true,
      tooltip: 'Cost per click. The total budget is divided by the total amount of clicks.',
    },
    {
      title: 'Cost Per Unique Click (CPC)',
      value: (budget || 1) / (campaignResults?.uniqueClicks || 1),
      isCurrency: true,
      tooltip: 'Cost per unique click. The total budget is divided by the total amount of UNIQUE clicks.',
    },
  ];

  const socialClicks = Object.keys(campaignResults.socialClicks)
    .map((item) => {
      const title = item.charAt(0).toUpperCase() + item.substring(1, item.length);
      return {
        title,
        value: campaignResults.socialClicks[item],
        tooltip: `Unique clicks to ${title}`,
      };
    })
    .sort((a, b) => b.value - a.value);

  return [...results, ...socialClicks];
};

export default getData;
