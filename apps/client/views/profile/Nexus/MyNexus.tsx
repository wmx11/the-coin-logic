import { Text } from '@mantine/core';
import ProviderCard from 'components/ContentCollection/ProviderCard';
import GoBack from 'components/GoBack';
import GradientTitle from 'components/Text/GradientTitle';
import React, { FC } from 'react';
import { Provider } from 'types';

type MyNexusProps = {
  provider: Provider;
};

const MyNexus: FC<MyNexusProps> = ({ provider }) => {
  return (
    <div className="w-full">
      <GoBack />
      <div className="my-4">
        <GradientTitle order={2}>Welcome to your NEXUS profile, {provider.name}</GradientTitle>
        <Text size="xs" color="dimmed">
          Here you will find your own NEXUS profile.
        </Text>
      </div>
      <div className="grid grid-col-2">
        <div>
          <ProviderCard provider={provider} showControls={true} />
        </div>
      </div>
    </div>
  );
};

export default MyNexus;
