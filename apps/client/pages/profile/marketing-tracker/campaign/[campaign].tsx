import Campaign from 'components/pages/profile/Campaign';
import { getProjectAndMarketStatsBySlug } from 'data/getters';
import { getCampaignByCampaignId, getCampaignResultsByCampaignId } from 'data/getters/campaigns';
import withRedisCache from 'data/withRedisCache';
import React, { FC } from 'react';
import { MarketingCampaign, MarketingTrackerResult } from 'types';
import { ProjectWithMarketStatsAndChanges } from 'types/Project';

type CampaignProps = {
  campaign: MarketingCampaign;
  projectData: ProjectWithMarketStatsAndChanges;
  campaignResults: MarketingTrackerResult;
};

const campaign: FC<CampaignProps> = ({ campaign, projectData, campaignResults }) => {
  return <Campaign campaign={campaign} projectData={projectData} campaignResults={campaignResults} />;
};

export default campaign;

type Params = {
  params: {
    campaign: string;
  };
};

export const getServerSideProps = async ({ params }: Params) => {
  const campaignId = params.campaign;
  const campaign = await getCampaignByCampaignId(campaignId);
  const campaignResults = await getCampaignResultsByCampaignId(campaignId);
  const projectData = await getProjectAndMarketStatsBySlug(campaign.project.slug);
  // const projectData = await withRedisCache(`projectData_${campaign.project.slug}`, () =>
  //   getProjectAndMarketStatsBySlug(campaign.project.slug),
  // );

  return {
    props: { campaign, projectData, campaignResults },
  };
};
