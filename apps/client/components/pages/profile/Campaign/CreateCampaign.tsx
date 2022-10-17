import { Button, Checkbox, Container, Select, Stack, TextInput, Title } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { DatePicker } from '@mantine/dates';
import GoBack from 'components/GoBack';
import React from 'react';
import CampaignForm from './CampaignForm';

const CreateCampaign = () => {
  const form = useForm({
    // validate: zodResolver(userProfileSchema),
    initialValues: {
      campaignName: '',
    },
  });

  return (
    <Container className="py-10">
      <div className="mb-8">
        <GoBack />
        <Title order={1}>Create new campaign</Title>
      </div>

      <div>
        <CampaignForm />
      </div>
    </Container>
  );
};

export default CreateCampaign;
