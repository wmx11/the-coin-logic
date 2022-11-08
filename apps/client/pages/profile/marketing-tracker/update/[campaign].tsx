import HasSubscriptionProvider from 'components/HasSubscriptionProvider';
import UpdateCampaign from 'components/pages/profile/Campaign/UpdateCampaign';
import { getCampaignByCampaignId } from 'data/getters/campaigns';
import { GetServerSideProps } from 'next';
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from 'pages/api/auth/[...nextauth]';
import { FC, useEffect, useState } from 'react';
import { Campaign } from 'schemas/campaign';
import { MarketingCampaign } from 'tcl-packages/types';
import { hasMarketingTrackerSubscription } from 'utils/utils';

type CampaignProps = {
  campaign: Campaign & MarketingCampaign;
};

const campaign: FC<CampaignProps> = ({ campaign }) => {
  const [campaignData, setCampaignData] = useState<Campaign & MarketingCampaign>();

  useEffect(() => {
    if (campaignData) {
      return;
    }
    setCampaignData(campaign);
  }, [campaign]);

  if (!campaignData) {
    return null;
  }

  return (
    <HasSubscriptionProvider subscriptionCheck={hasMarketingTrackerSubscription}>
      <UpdateCampaign campaign={campaignData} />
    </HasSubscriptionProvider>
  );
};

export default campaign;

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

  return {
    props: { campaign },
  };
};
