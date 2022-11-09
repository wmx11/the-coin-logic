import { MarketingTrackerResult } from 'types';
import { GET_CAMPAIGN_BY_CAMPAIGN_ID, GET_CAMPAIGN_RESULTS_BY_CAMPAIGN_ID } from './constatnts/campaigns';
import { getData } from './getters';

export const getCampaignByCampaignId = async (campaignId: string, userId: string) => {
  const { marketingCampaigns } = await getData({
    query: GET_CAMPAIGN_BY_CAMPAIGN_ID,
    variables: { campaignId, userId },
    fetchPolicy: 'network-only',
  });
  return marketingCampaigns[0] || null;
};

export const getCampaignResultsByCampaignId = async (campaignId: string) => {
  const { marketingTrackerResults }: { marketingTrackerResults: MarketingTrackerResult[] } = await getData({
    query: GET_CAMPAIGN_RESULTS_BY_CAMPAIGN_ID,
    variables: { campaignId },
    fetchPolicy: 'network-only',
  });

  if (!marketingTrackerResults) {
    return null;
  }

  return marketingTrackerResults[0] || null;
};
