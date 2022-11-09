import HasSubscriptionProvider from 'components/HasSubscriptionProvider';
import Campaign from 'components/pages/profile/Campaign';
import {
  AverageMarketChangeForPeriodOfTime,
  getProjectAndMarketStatsBySlug,
  getProjectAverageMarketChangeForPeriodOfTime,
} from 'data/getters';
import { getCampaignByCampaignId, getCampaignResultsByCampaignId } from 'data/getters/campaigns';
import { GetServerSideProps } from 'next';
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from 'pages/api/auth/[...nextauth]';
import { FC } from 'react';
import { MarketingCampaign, MarketingTrackerResult } from 'types';
import { ProjectWithMarketStatsAndChanges } from 'types/Project';
import { hasMarketingTrackerSubscription } from 'utils/utils';

type CampaignProps = {
  campaign: MarketingCampaign;
  projectData: ProjectWithMarketStatsAndChanges;
  campaignResults: MarketingTrackerResult;
  projectAverages: AverageMarketChangeForPeriodOfTime;
};

const CampaignPage: FC<CampaignProps> = ({ campaign, projectData, campaignResults, projectAverages }) => {
  return (
    <HasSubscriptionProvider subscriptionCheck={hasMarketingTrackerSubscription}>
      <Campaign
        campaign={campaign}
        projectData={projectData}
        campaignResults={campaignResults}
        projectAverages={projectAverages}
      />
    </HasSubscriptionProvider>
  );
};

export default CampaignPage;

export const getServerSideProps: GetServerSideProps = async ({ req, res, params }) => {
  const campaignId = params?.campaign as string;
  const session = await unstable_getServerSession(req, res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const campaign = await getCampaignByCampaignId(campaignId, session?.id as string);
  const campaignResults = await getCampaignResultsByCampaignId(campaignId);
  const projectData = await getProjectAndMarketStatsBySlug(campaign?.project?.slug);
  const projectAverages = await getProjectAverageMarketChangeForPeriodOfTime(
    campaign?.project?.id,
    new Date(campaign?.startDate),
    new Date(campaign?.endDate),
  );

  return {
    props: { campaign, projectData, campaignResults, projectAverages },
  };
};
