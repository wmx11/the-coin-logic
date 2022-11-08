import { Button, Text } from '@mantine/core';
import GradientButton from 'components/Buttons/GradientButton';
import GoBack from 'components/GoBack';
import GrayBox from 'components/GrayBox';
import GradientTitle from 'components/Text/GradientTitle';
import useUser from 'hooks/useUser';
import Link from 'next/link';
import { FC } from 'react';
import routes from 'routes';
import { MarketingCampaign } from 'types';
import { Icons } from 'utils/icons';
import { hasMarketingTrackerSubscription } from 'utils/utils';
import MarketingCampaignsTable from './MarketingCampaignsTable';

type MarketingTrackerProps = {
  marketingCampaigns: MarketingCampaign[];
};

const MarketingTracker: FC<MarketingTrackerProps> = ({ marketingCampaigns }) => {
  const { user, subscription } = useUser();
  const hasProjects = (user?.projects?.length || 0) > 0;

  const hasSubscription = (() => {
    if (user?.isNotChargeable) {
      return true;
    }

    if (!subscription) {
      return false;
    }

    return hasMarketingTrackerSubscription(subscription);
  })();

  const CreateNewCampaignButton = () => {
    return (
      <Link href={`${routes.marketingTracker}/create`} passHref>
        <Button component="a" color="violet" variant="outline" leftIcon={<Icons.Add />}>
          Create new campaign
        </Button>
      </Link>
    );
  };

  return (
    <div className="w-full">
      <GoBack />
      <div>
        <div className="flex justify-between items-center flex-wrap my-8">
          {hasProjects && hasSubscription && <GradientTitle order={3}>My Campaigns</GradientTitle>}
          {hasProjects && hasSubscription && <CreateNewCampaignButton />}
        </div>

        {!hasSubscription ? (
          <GrayBox>
            <Text>Looks like you don't have a subscription to use this Marketing Campaign Tracking tool.</Text>
            <Link href={routes.pricing} passHref>
              <GradientButton component="a" color="violet">
                Explore Product Pricing
              </GradientButton>
            </Link>
          </GrayBox>
        ) : null}

        {!hasProjects && hasSubscription && (
          <GrayBox>
            <Text>
              You currently have no projects assigned to your account. Please register a project on TCL in order to use
              the marketing tracker tool.
            </Text>
            <Link href={routes.addProject} passHref>
              <GradientButton component="a" color="violet" leftIcon={<Icons.Add />}>
                Add a project
              </GradientButton>
            </Link>
          </GrayBox>
        )}

        {marketingCampaigns.length === 0 && hasProjects && hasSubscription && (
          <GrayBox>
            <Text>You currently have no active campaigns.</Text>
            <CreateNewCampaignButton />
          </GrayBox>
        )}

        {marketingCampaigns.length > 0 && hasSubscription && (
          <MarketingCampaignsTable marketingCampaigns={marketingCampaigns} />
        )}
      </div>
    </div>
  );
};

export default MarketingTracker;
