import { Container, Text } from '@mantine/core';
import { useScrollIntoView } from '@mantine/hooks';
import Meta from 'components/Meta';
import Paper from 'components/Paper';
import GradientTitle from 'components/Text/GradientTitle';
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/router';
import AMAs from 'public/images/amas.svg';
import AssureDefi from 'public/images/assure_defi_logo.svg';
import CommunityEvents from 'public/images/community_events.svg';
import CryptoLink from 'public/images/cryptolink_service.png';
import Marketing from 'public/images/marketing.svg';
import PrismaShield from 'public/images/prisma_shield_logo.svg';
import PrismaShieldWhite from 'public/images/prisma_shield_logo_white.svg';
import Tracking from 'public/images/tracking.svg';
import { FC, useEffect, useRef } from 'react';
import useThemeStore from 'store/useThemeStore';

type ServiceCardProps = {
  title: string;
  description: string;
  image?: string | StaticImageData;
  isReverse?: boolean;
  anchor?: string;
};

const ServiceCard: FC<ServiceCardProps> = ({ title, description, image, isReverse, anchor }) => {
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({ offset: 60 });
  const router = useRouter();

  useEffect(() => {
    const { service } = router.query;

    if (targetRef?.current?.id === service) {
      scrollIntoView();
    }
  }, []);

  return (
    <>
      <Paper withBorder className="grid grid-cols-2 gap-4 mb-16">
        <div className={`flex justify-center ${isReverse ? 'order-2' : ''} `}>
          <Image src={image as string} width={250} height={250} layout="intrinsic" />
        </div>
        <div className="flex flex-col justify-center" id={anchor} ref={targetRef}>
          <GradientTitle className="mb-2">{title}</GradientTitle>
          <Text size="sm">{description}</Text>
        </div>
      </Paper>
    </>
  );
};

const index = () => {
  const theme = useThemeStore((state) => state.theme);
  return (
    <>
      <Meta
        title="TheCoinLogic Services: Listing, Tracking, Analytics and More | Coin Logic"
        description="TheCoinLogic offers services for cryptocurrency, DeFi, and NFT projects from listing, tracking, analytics, to audits, KYC, community management from partners."
      />
      <Container className="py-10">
        <div className="mb-16">
          <div className="text-center">
            <GradientTitle>Features and Services</GradientTitle>
            <Text size="sm" color="dimmed">
              Taking care and helping new, and already established projects
            </Text>
          </div>
        </div>
        <div className="">
          <ServiceCard
            title="Data Aggregation, Analytics, & Tracking"
            description={`Our in-house indexing solution allows us to track and aggregate market, holder, and social media data about projects without relying on third-party APIs like CoinMarketCap or CoinGecko. Are you a project that is just starting out? You can list on The Coin Logic and start tracking your metrics right away. Track your metrics, pair them with your events and announcements, and keep your community up to date!`}
            image={Tracking}
            anchor="tracking"
          />
          <ServiceCard
            title="Trustless Bridging as a Service"
            description={`CryptoLink's TBaaS service allows projects to seamlessly transfer any token, NFT, or data across multiple blockchain networks with ease. With CryptoLink's service, projects can expand their reach and interact with new communities on different chains.`}
            image={CryptoLink}
            isReverse
            anchor="tbaas"
          />
          <ServiceCard
            title="Contract Audits"
            description={`Prisma Shield’s Deep Logic Audit is a thorough review of smart contracts that are conducted by humans. It not only checks for security vulnerabilities but also examines the code's mathematical precision and logical consistency to ensure that the smart contract adheres to the requirements outlined in the project's whitepaper and functions properly. As part of this service, Prisma Shield also performs testing on the main net and works closely with the project’s team to fully understand the project and provide the highest quality code reviews.`}
            image={theme === 'dark' ? PrismaShieldWhite : PrismaShield}
            anchor="audits"
          />
          <ServiceCard
            title="K.Y.C"
            description={`Assure is an impartial service that verifies, records, and securely stores identity information and project roles for individuals who go through the verification process. While Assure does not make decisions about potential criminal activity, they do assist with investigations if investors suspect fraud on a verified project.`}
            image={AssureDefi}
            isReverse
            anchor="kyc"
          />
          <ServiceCard
            title="Marketing"
            description="Marketing is the best way to reach the masses and potential customers. Our partners at Cardinal House have great resources to help you market your project. Reach thousands of interested people through digital marketing, YouTube reviews, AMAs, community events, and more!"
            image={Marketing}
            anchor="marketing"
          />
          <ServiceCard
            title="Community Events"
            description="A strong project has a strong community. We understand the importance of a well informed, active, and proactive communities. Our partners at Cardinal House provide the best community event management for DeFi projects. Build your community through game nights, giveaways, challenges, surprises, and more!"
            image={CommunityEvents}
            isReverse
            anchor="community"
          />
          <ServiceCard
            title="AMAs"
            description="AMAs are a great way to reach new potential investors and get fresh eyes on your project. They serve as a very useful tool in sharing what your project is about and who the team is around the project. Contact Cardinal House to schedule an AMA!"
            image={AMAs}
            anchor="ama"
          />
        </div>
      </Container>
    </>
  );
};

export default index;
