import { Button, Container, Text, Title } from '@mantine/core';
import GoBack from 'components/GoBack';
import Link from 'next/link';
import { FC } from 'react';
import { FaPlus } from 'react-icons/fa';
import routes from 'routes';
import { MarketingCampaign } from 'types';
import MarketingCampaignsTable from './MarketingCampaignsTable';

type MarketingTrackerProps = {
  marketingCampaigns: MarketingCampaign[];
};

const MarketingTracker: FC<MarketingTrackerProps> = ({ marketingCampaigns }) => {
  const CreateNewCampaignButton = () => {
    return (
      <Link href={`${routes.marketingTracker}/create`} passHref>
        <Button component="a" color="violet" variant="outline" leftIcon={<FaPlus />}>
          Create new campaign
        </Button>
      </Link>
    );
  };

  return (
    <>
      <Container className="py-10">
        <div className="mb-8">
          <GoBack />
          <Title order={1}>Marketing Tracker Dashboard</Title>
        </div>

        <div className="flex justify-between items-center flex-wrap mb-8">
          <Title order={2}>My Campaigns</Title>
          <div>
            <CreateNewCampaignButton />
          </div>
        </div>

        {marketingCampaigns.length === 0 && (
          <div className="bg-zinc-100 p-10 flex flex-col items-center justify-center gap-4 rounded-md mb-8">
            <Text>You currently have no active campaigns.</Text>
            <CreateNewCampaignButton />
          </div>
        )}

        {marketingCampaigns.length > 0 && <MarketingCampaignsTable marketingCampaigns={marketingCampaigns} />}
      </Container>
    </>
  );
};

export default MarketingTracker;
