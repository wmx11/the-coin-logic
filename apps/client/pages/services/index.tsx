import { Container, Text } from '@mantine/core';
import { useResizeObserver } from '@mantine/hooks';
import Meta from 'components/Meta';
import Paper from 'components/Paper';
import GradientTitle from 'components/Text/GradientTitle';
import Image from 'next/image';
import AMAs from 'public/images/amas.svg';
import CommunityEvents from 'public/images/community_events.svg';
import ContractAudits from 'public/images/contract_audits.svg';
import KYC from 'public/images/kyc.svg';
import Marketing from 'public/images/marketing.svg';
import Tracking from 'public/images/tracking.svg';
import { FC } from 'react';
import { animated, useSpring } from 'react-spring';

type ServiceCardProps = {
  title: string;
  description: string;
  image?: string;
};

const ServiceCard: FC<ServiceCardProps> = ({ title, description, image }) => {
  const [ref, rect] = useResizeObserver();
  const styles = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });

  return (
    <>
      <animated.div className="" ref={ref} style={{ ...styles }}>
        <Paper>
          <div className="flex justify-center">
            <Image src={image as string} width={200} height={200} />
          </div>
          <GradientTitle className="mb-2">{title}</GradientTitle>
          <Text size="sm">{description}</Text>
        </Paper>
      </animated.div>
    </>
  );
};

const index = () => {
  return (
    <>
      <Meta title="Listing, tracking, audits, KYC, and other services | Coin Logic" />
      <Container className="py-10">
        <div className="mb-16">
          <GradientTitle>Our Features and Services</GradientTitle>
          <Text size="xs" color="dimmed">
            Taking care and helping new, and already established projects
          </Text>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            title="Listing & Tracking"
            description="List and track your project data in real-time. Bring transparency through data right to your community! General market data such as price, market cap, supply, liquidity, custom data like treasury, insurance, and utility wallets. Track holders from a specified token amount. Never be out of the loop with what’s happening with your project."
            image={Tracking}
          />
          <ServiceCard
            title="Contract Audits"
            description="Smart contract audits are one of the best ways to ensure your project is secure and free of logic errors. Audits can help you spot bugs way before the project grows to sizes where migrations are a headache to handle. Audit your project smart contract with one of the most competitive prices in the space through our partners at Cardinal House! They are revolutionizing the space in a couple key ways in addition to all audit standards. Firstly, Cardinal House Audits do a manual review of the smart contracts to ensure that all intended functionalities are present. Secondly, they also do Unit/Integration Testing as a secondary service to dive deeper into all the edge cases."
            image={ContractAudits}
          />
          <ServiceCard
            title="K.Y.C"
            description="K.Y.C is one way to make you and your project transparent. Having you and your team complete a full K.Y.C will bring trust to the community and will set a certain mindframe for future actions and management of the project. Our partners at Assure DeFi provide the best legal K.Y.C services!"
            image={KYC}
          />
          <ServiceCard
            title="Marketing"
            description="Marketing is the best way to reach the masses and potential customers. Our partners at Cardinal House have great resources to help you market your project. Reach thousands of interested people through digital marketing, YouTube reviews, AMAs, community events, and more!"
            image={Marketing}
          />
          <ServiceCard
            title="Community Events"
            description="A strong project has a strong community. We understand the importance of a well informed, active, and proactive communities. Our partners at Cardinal House provide the best community event management for DeFi projects. Build your community through game nights, giveaways, challenges, surprises, and more!"
            image={CommunityEvents}
          />
          <ServiceCard
            title="AMAs"
            description="AMAs are a great way to reach new potential investors and get fresh eyes on your project. They serve as a very useful tool in sharing what your project is about and who the team is around the project. Contact Cardinal House to schedule an AMA!"
            image={AMAs}
          />
        </div>
      </Container>
    </>
  );
};

export default index;
