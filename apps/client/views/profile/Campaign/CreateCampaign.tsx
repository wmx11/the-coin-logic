import { Container } from '@mantine/core';
import GoBack from 'components/GoBack';
import GradientTitle from 'components/Text/GradientTitle';
import CampaignForm from './CampaignForm';

const CreateCampaign = () => {
  return (
    <Container className="py-10">
      <div className="mb-8">
        <GoBack />
        <GradientTitle order={2}>Create new campaign</GradientTitle>
      </div>
      <div>
        <CampaignForm type="create" />
      </div>
    </Container>
  );
};

export default CreateCampaign;
