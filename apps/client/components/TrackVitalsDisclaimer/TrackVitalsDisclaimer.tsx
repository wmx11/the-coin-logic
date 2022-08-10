import { Button, Center, Container, Text, Title } from '@mantine/core';
import React, { useState } from 'react';
import SignUpModal from '../Modals/SignUpModal';

function TrackVitalsDisclaimer() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="my-40">
      <Container>
        <Center>
          <div className="text-center">
            <Title order={2} className="mb-4">
              Track your project vitals today
            </Title>
            <Text className="mb-4">
              Sign up now and we will help you set up your analytics dashboard on The Coin Logic
            </Text>
            <Button onClick={() => setOpened(true)} color="violet" size="lg">
              Sign up to get started
            </Button>

            <SignUpModal opened={opened} setOpened={() => setOpened(false)} />
          </div>
        </Center>
      </Container>
    </div>
  );
}

export default TrackVitalsDisclaimer;
