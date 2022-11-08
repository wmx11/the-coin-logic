import HasSubscriptionProvider from 'components/HasSubscriptionProvider';
import CreateCampaign from 'components/pages/profile/Campaign/CreateCampaign';
import { hasMarketingTrackerSubscription } from 'utils/utils';

const create = () => {
  return (
    <HasSubscriptionProvider subscriptionCheck={hasMarketingTrackerSubscription}>
      <CreateCampaign />
    </HasSubscriptionProvider>
  );
};

export default create;
