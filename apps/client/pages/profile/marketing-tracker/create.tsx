import HasSubscriptionProvider from 'components/HasSubscriptionProvider';
import CreateCampaign from 'views/profile/Campaign/CreateCampaign';
import { hasMarketingTrackerSubscription } from 'utils/utils';

const create = () => {
  return (
    <HasSubscriptionProvider subscriptionCheck={hasMarketingTrackerSubscription}>
      <CreateCampaign />
    </HasSubscriptionProvider>
  );
};

export default create;
