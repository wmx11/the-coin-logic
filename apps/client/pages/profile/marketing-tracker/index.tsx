import MarketingTracker from 'views/profile/MarketingTracker';
import UserLayout from 'views/profile/ProfileLayout';
import { getUserMarketingCampaigns } from 'data/getters/user';
import useUser from 'hooks/useUser';
import { ReactElement, useCallback, useEffect, useState } from 'react';

const MarketingTrackerIndex = () => {
  const { user, session } = useUser();
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

MarketingTrackerIndex.getLayout = function getLayout(page: ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};
