import HasSubscriptionProvider from 'components/HasSubscriptionProvider';
import { getCampaignByCampaignId } from 'data/getters/campaigns';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import { FC, useEffect, useState } from 'react';
import { Campaign } from 'schemas/campaign';
import { MarketingCampaign } from 'tcl-packages/types';
import { hasMarketingTrackerSubscription } from 'utils/utils';
import UpdateCampaign from 'views/profile/Campaign/UpdateCampaign';

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
  const session = await getSession({ req });
  const campaignId = params?.campaign as string;

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
