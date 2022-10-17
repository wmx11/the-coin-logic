import { Container, Title } from '@mantine/core';
import GoBack from 'components/GoBack';
import React from 'react';

const UpdateCampaign = () => {
  return (
    <Container className="py-10">
      <div className="mb-8">
        <GoBack />
        <Title order={1}>Update campaign</Title>
      </div>
    </Container>
  );
};

export default UpdateCampaign;
