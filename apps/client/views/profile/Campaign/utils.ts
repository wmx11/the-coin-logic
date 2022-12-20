import { MarketingCampaign, MarketingTrackerResult } from 'types';
import { exportToXlsx } from 'tcl-packages/utils/exportToXlsx';

type exportToCsvProps = {
  campaign: MarketingCampaign;
  campaignResults: MarketingTrackerResult;
};

export const exportToCsv = (data: exportToCsvProps, filename: string) => {
  if (!data) {
    return null;
  }

  const { campaign, campaignResults } = data;
  const parsedFilename = filename.toLowerCase().split(' ').join('_').trim();

  const preparedData = [
    {
      sheetName: 'Campaign Details',
      data: [
        {
          name: campaign.name,
          id: campaign.campaignId,
          startDate: campaign.startDate,
          endDate: campaign.endDate,
          status: campaign.status,
          budget: campaign.budget,
          marketBudget: campaign.marketBudget,
          socialBudget: campaign.socialBudget,
          isInternal: campaign.isInternal,
          trackMarket: campaign.trackMarket,
          trackSocial: campaign.trackSocial,
          priceGoal: campaign.priceGoal,
          marketCapGoal: campaign.marketCapGoal,
          volumeGoal: campaign.volumeGoal,
          holdersGoal: campaign.holdersGoal,
          twitterGoal: campaign.twitterGoal,
          discordGoal: campaign.discordGoal,
          telegramGoal: campaign.telegramGoal,
        },
      ],
    },
    {
      sheetName: 'Project Snapshot Averages',
      data: [
        {
          price: campaign.marketStatSnapshot.price,
          marketCap: campaign.marketStatSnapshot.marketCap,
          volume: campaign.marketStatSnapshot.volume,
          holders: campaign.marketStatSnapshot.holders,
          twitter: campaign.marketStatSnapshot.twitter,
          discord: campaign.marketStatSnapshot.discord,
          telegram: campaign.marketStatSnapshot.telegram,
        },
      ],
    },
    {
      sheetName: 'Final Snapshot',
      data: [
        {
          price: campaign?.finalSnapshot?.price,
          marketCap: campaign?.finalSnapshot?.marketCap,
          volume: campaign?.finalSnapshot?.volume,
          holders: campaign?.finalSnapshot?.holders,
          twitter: campaign?.finalSnapshot?.twitter,
          discord: campaign?.finalSnapshot?.discord,
          telegram: campaign?.finalSnapshot?.telegram,
        },
      ],
    },
    {
      sheetName: 'Campaign Results',
      data: [
        {
          totalClicks: campaignResults?.totalClicks,
          uniqueClicks: campaignResults?.uniqueClicks,
          website: campaignResults?.socialClicks?.website,
          whitepaper: campaignResults?.socialClicks?.whitepaper,
          twitter: campaignResults?.socialClicks?.twitter,
          telegram: campaignResults?.socialClicks?.telegram,
          discord: campaignResults?.socialClicks?.discord,
          reddit: campaignResults?.socialClicks?.reddit,
          youtube: campaignResults?.socialClicks?.youtube,
          medium: campaignResults?.socialClicks?.medium,
          exchange: campaignResults?.socialClicks?.exchange,
        },
      ],
    },
    {
      sheetName: 'Referring Websites',
      data: campaignResults?.refererResults.map((item: { referer: string; _count: { _all: number } }) => ({
        referer: item.referer,
        count: item._count._all,
      })),
    },
    {
      sheetName: 'Traffic By Country',
      data: campaignResults?.countryResults.map(
        (item: { country: string; countryCode: string; _count: { _all: number } }) => ({
          country: item.country,
          countryCode: item.countryCode,
          count: item._count._all,
        }),
      ),
    },
    {
      sheetName: 'Traffic By Device',
      data: campaignResults?.deviceResults.map((item: { device: string; os: string; _count: { _all: number } }) => ({
        device: item.device,
        os: item.os,
        count: item._count._all,
      })),
    },
  ];

  exportToXlsx(preparedData, parsedFilename, true);
};
