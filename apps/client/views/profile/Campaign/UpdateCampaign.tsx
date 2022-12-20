import { Container, Text } from '@mantine/core';
import GoBack from 'components/GoBack';
import GradientTitle from 'components/Text/GradientTitle';
import { FC } from 'react';
import { Campaign } from 'schemas/campaign';
import { MarketingCampaign } from 'tcl-packages/types';
import CampaignForm from './CampaignForm';

type UpdateCampaignProps = {
  campaign: Campaign & MarketingCampaign;
};

const UpdateCampaign: FC<UpdateCampaignProps> = ({ campaign }) => {
  return (
    <Container className="py-10">
      <div className="mb-8">
        <GoBack />
        <GradientTitle order={2}>{campaign.name}</GradientTitle>
        <Text size="xs" color="dimmed">
          {campaign.campaignId}
        </Text>
      </div>
      <div>
        <CampaignForm campaignData={campaign} type="update" />
      </div>
    </Container>
  );
};

export default UpdateCampaign;
