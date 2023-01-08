import { Text } from '@mantine/core';
import GradientButton from 'components/Buttons/GradientButton';
import ProviderCard from 'components/ContentCollection/ProviderCard';
import GoBack from 'components/GoBack';
import GrayBox from 'components/GrayBox';
import GradientTitle from 'components/Text/GradientTitle';
import Link from 'next/link';
import React, { FC } from 'react';
import routes from 'routes';
import { Provider } from 'types';

type MyNexusProps = {
  provider: Provider;
};

const MyNexus: FC<MyNexusProps> = ({ provider }) => {
  return (
    <div className="w-full">
      <GoBack />
      {provider ? (
        <>
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
        </>
      ) : (
        <GrayBox>
          <div className="text-center">
            <Text>You currently don't have a NEXUS profile</Text>
            <Link href={routes.applyForNexus} passHref>
              <GradientButton component="a">Apply For NEXUS</GradientButton>
            </Link>
          </div>
        </GrayBox>
      )}
    </div>
  );
};

export default MyNexus;
