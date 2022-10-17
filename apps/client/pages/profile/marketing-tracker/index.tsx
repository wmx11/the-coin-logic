import MarketingTracker from 'components/pages/profile/MarketingTracker';
import { getUserMarketingCampaigns } from 'data/getters/user';
import useUser from 'hooks/useUser';
import { useCallback, useEffect, useState } from 'react';

const MarketingTrackerIndex = () => {
  const { user, session, status } = useUser();
  const [marketingCampaigns, setMarketingCampaigns] = useState([]);

  const getMarketingCampaigns = useCallback(async () => {
    if (!user) {
      return;
    }
    const data = await getUserMarketingCampaigns(user?.email as string);
    setMarketingCampaigns(data);
  }, [session, user]);

  useEffect(() => {
    getMarketingCampaigns();
  }, [session, user]);

  return <MarketingTracker marketingCampaigns={marketingCampaigns} />;
};

export default MarketingTrackerIndex;
