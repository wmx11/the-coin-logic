import { Container, Text } from '@mantine/core';
import { useResizeObserver } from '@mantine/hooks';
import { SmallBackgroundWrapper } from 'components/BackgroundWrapper/BackgroundWrapper';
import Meta from 'components/Meta';
import Paper from 'components/Paper';
import GradientTitle from 'components/Text/GradientTitle';
import Image from 'next/image';
import AMAs from 'public/images/amas.svg';
import AssureDefi from 'public/images/assure_defi_logo.svg';
import CommunityEvents from 'public/images/community_events.svg';
import Marketing from 'public/images/marketing.svg';
import PrismaShield from 'public/images/prisma_shield_logo.svg';
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
      <animated.div ref={ref} style={{ ...styles }}>
        <Paper withBorder>
          <div className="flex justify-center">
            <Image src={image as string} width={250} height={250} layout="intrinsic" />
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
      <Meta
        title="TheCoinLogic Services: Listing, Tracking, Analytics and More | Coin Logic"
        description="TheCoinLogic offers services for cryptocurrency, DeFi, and NFT projects from listing, tracking, analytics, to audits, KYC, community management from partners."
      />
      <SmallBackgroundWrapper>
        <div className="text-center">
          <GradientTitle>Our Features and services</GradientTitle>
          <Text size="sm" color="dimmed">
            Taking care and helping new, and already established projects
          </Text>
        </div>
      </SmallBackgroundWrapper>
      <Container className="py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            title="Listing & Tracking"
            description="List and track your project data in real-time. Bring transparency through data right to your community! General market data such as price, market cap, supply, liquidity, custom data like treasury, insurance, and utility wallets. Track holders from a specified token amount. Never be out of the loop with what’s happening with your project."
            image={Tracking}
          />
          <ServiceCard
            title="Contract Audits"
            description={`Prisma Shield’s Deep Logic Audit is a thorough review of smart contracts that are conducted by humans. It not only checks for security vulnerabilities but also examines the code's mathematical precision and logical consistency to ensure that the smart contract adheres to the requirements outlined in the project's whitepaper and functions properly. As part of this service, Prisma Shield also performs testing on the main net and works closely with the project’s team to fully understand the project and provide the highest quality code reviews.`}
            image={PrismaShield}
          />
          <ServiceCard
            title="K.Y.C"
            description={`Assure is an impartial service that verifies, records, and securely stores identity information and project roles for individuals who go through the verification process. While Assure does not make decisions about potential criminal activity, they do assist with investigations if investors suspect fraud on a verified project.`}
            image={AssureDefi}
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
