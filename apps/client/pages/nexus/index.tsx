import { Container } from '@mantine/core';
import { SmallBackgroundWrapper } from 'components/BackgroundWrapper/BackgroundWrapper';
import GradientButton from 'components/Buttons/GradientButton';
import ProviderCard from 'components/ContentCollection/ProviderCard';
import { JoinOurCommunity } from 'components/JoinOurCommunity';
import Meta from 'components/Meta';
import GradientText from 'components/Text/GradientText';
import GradientTitle from 'components/Text/GradientTitle';
import { QUERY_CALLBACK } from 'constants/general';
import { getProviders } from 'data/getters/providers';
import useRequireLogin from 'hooks/useRequireLogin';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { FC } from 'react';
import routes from 'routes';
import useUserStore from 'store/useUserStore';
import { Provider } from 'types';

type NexusPageProps = {
  data: Provider[];
};

const NexusPage: FC<NexusPageProps> = ({ data }) => {
  const { requireLogin } = useRequireLogin();
  const user = useUserStore((state) => state.user);
  const router = useRouter();

  const handleClick = () => {
    if (requireLogin()) {
      router.push({ query: { [QUERY_CALLBACK]: routes.applyForNexus } }, undefined, { scroll: false });
      return false;
    }

    router.push(routes.applyForNexus);
  };

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
        title="NEXUS - Cryptocurrency, blockchain networking hub | Coin Logic"
        description="Dive into the NEXUS. Discover cryptocurrency Enthusiasts, YouTubers, Developers, Influencers, Community Managers, and more! Network with people and build meaningful connections."
      />
      <SmallBackgroundWrapper>
        <div className="flex flex-col items-center gap-4">
          <GradientTitle align="center">Welcome to NEXUS</GradientTitle>
          <GradientText align="center" size="sm">
            Welcome to NEXUS, the premier cryptocurrency and blockchain networking hub. Connect with like-minded
            individuals, learn about the latest developments in the industry, and stay up-to-date on the ever-evolving
            world of digital currencies. Join our community today and be at the forefront of the blockchain revolution
          </GradientText>
          {!user || !user?.providerProfile ? (
            <GradientButton className="text-center" onClick={handleClick}>
              Apply for your NEXUS profile
            </GradientButton>
          ) : null}
        </div>
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
