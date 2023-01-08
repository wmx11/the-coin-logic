import { Container, Text, Title } from '@mantine/core';
import BackgroundWrapper from 'components/BackgroundWrapper';
import { SmallBackgroundWrapper } from 'components/BackgroundWrapper/BackgroundWrapper';
import ProviderCard from 'components/ContentCollection/ProviderCard';
import { JoinOurCommunity } from 'components/JoinOurCommunity';
import Meta from 'components/Meta';
import GradientText from 'components/Text/GradientText';
import GradientTitle from 'components/Text/GradientTitle';
import { getProviders } from 'data/getters/providers';
import { GetServerSideProps } from 'next';
import { FC } from 'react';
import { Provider } from 'types';

type NexusPageProps = {
  data: Provider[];
};

const NexusPage: FC<NexusPageProps> = ({ data }) => {
  const providers =
    data && data.length ? (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.map((item, index) => {
          return <ProviderCard provider={item} key={`provider_${index}`} />;
        })}
      </div>
    ) : null;

  return (
    <>
      <Meta
        title="TCL NEXUS - Cryptocurrency, blockchain networking hub | Coin Logic"
        description="Dive into the NEXUS. Discover cryptocurrency Enthusiasts, YouTubers, Developers, Influencers, Community Managers, and more! Network with people and build meaningful connections."
      />
      <BackgroundWrapper className="min-h-screen flex items-center">
        <Container size="md">
          <div className="text-center mb-16">
            <Title className="text-white text-6xl mb-8">Welcome to NEXUS</Title>
            <Text className="text-white">
              Welcome to NEXUS, the premier cryptocurrency and blockchain networking hub. Connect with like-minded
              individuals, learn about the latest developments in the industry, and stay up-to-date on the ever-evolving
              world of digital currencies. Join our community today and be at the forefront of the blockchain revolution
            </Text>
          </div>
        </Container>
      </BackgroundWrapper>
      <SmallBackgroundWrapper>
        <GradientTitle align="center">Explore NEXUS profiles!</GradientTitle>
        <GradientText align="center" size="sm">
          See our NEXUS profiles. Have you worked with them? Do you have previous experience? Give them a star rating,
          leave comments, cast a daily vote!
        </GradientText>
      </SmallBackgroundWrapper>
      <Container className="py-10">{providers}</Container>
      <JoinOurCommunity />
    </>
  );
};

export default NexusPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await getProviders();

  return {
    props: {
      data,
    },
  };
};