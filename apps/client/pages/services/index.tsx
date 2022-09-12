import { Button, Container, ScrollArea, Text, Title } from '@mantine/core';
import { useResizeObserver } from '@mantine/hooks';
import Meta from 'components/Meta';
import SmallHero from 'components/SmallHero';
import TextContent from 'components/TextContent';
import { getContentBySlug } from 'data/getters';
import { StaticImageData } from 'next/image';
import { useRouter } from 'next/router';
import { FC, ReactNode } from 'react';
import { AiOutlineSecurityScan } from 'react-icons/ai';
import { FiTarget } from 'react-icons/fi';
import { GiNestBirds } from 'react-icons/gi';
import { IoMicSharp } from 'react-icons/io5';
import { MdBarChart, MdEmojiEvents } from 'react-icons/md';
import { RiShieldUserLine } from 'react-icons/ri';
import { animated, useSpring } from 'react-spring';
import { ContentProps } from 'types/TextContent';

type ServiceCardProps = {
  title: string;
  description: string;
  image?: StaticImageData;
  alt?: string;
  icon?: ReactNode;
};

const ServiceCard: FC<ServiceCardProps> = ({ title, description, image, alt, icon }) => {
  const [ref, rect] = useResizeObserver();
  const styles = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });

  return (
    <>
      <animated.div
        className="p-4 shadow-md rounded-md border group bg-violet hover:shadow-lg hover:scale-105 transition-transform cursor-pointer relative overflow-hidden"
        ref={ref}
        style={{ ...styles }}
      >
        <div className="relative w-full h-full flex items-center justify-center z-10">
          <Title
            className="text-white p-10 group-hover:opacity-0 transition-opacity text-center flex flex-col justify-center items-center"
            order={1}
            align="center"
          >
            {title}
          </Title>
          <div className="hidden text-white group-hover:block absolute left-0 right-0 top-0 h-full">
            <ScrollArea style={{ height: rect.height - 16 || 160 }}>
              <Text size="sm">{description}</Text>
            </ScrollArea>
          </div>
          <div className="absolute right-0 top-0 text-white group-hover:opacity-0 transition-opacity">{icon}</div>
        </div>
      </animated.div>
    </>
  );
};

const index: FC<ContentProps> = ({ content }) => {
  const router = useRouter();

  return (
    <>
      <Meta title="Listing, tracking, audits, KYC, and other services | Coin Logic" />
      <SmallHero>
        <Title order={1} className="text-5xl mb-4">
          Changing DeFi One Step at a Time
        </Title>
        <Title order={4} className="mb-4">
          Leverage our services to boost your success!
        </Title>
        <Button variant="white" color="violet" onClick={() => router.push('/contact-us')}>
          Contact Us
        </Button>
      </SmallHero>
      <Container className="py-10">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          <ServiceCard
            title="Listing & Tracking"
            description="List and track your project data in real-time. Bring transparency through data right to your community! General market data such as price, market cap, supply, liquidity, custom data like treasury, insurance, and utility wallets. Track holders from a specified token amount. Never be out of the loop with what’s happening with your project."
            icon={<MdBarChart size={35} />}
          />
          <ServiceCard
            title="Contract Audits"
            description="Smart contract audits are one of the best ways to ensure your project is secure and free of logic errors. Audits can help you spot bugs way before the project grows to sizes where migrations are a headache to handle. Audit your project smart contract with one of the most competitive prices in the space through our partners at Cardinal House! They are revolutionizing the space in a couple key ways in addition to all audit standards. Firstly, Cardinal House Audits do a manual review of the smart contracts to ensure that all intended functionalities are present. Secondly, they also do Unit/Integration Testing as a secondary service to dive deeper into all the edge cases."
            icon={<AiOutlineSecurityScan size={35} />}
            alt="Auditing logo"
          />
          <ServiceCard
            title="K.Y.C"
            description="K.Y.C is one way to make you and your project transparent. Having you and your team complete a full K.Y.C will bring trust to the community and will set a certain mindframe for future actions and management of the project. Our partners at K.C Consulting provide the best legal K.Y.C services!"
            icon={<RiShieldUserLine size={35} />}
          />
          <ServiceCard
            title="Marketing"
            description="Marketing is the best way to reach the masses and potential customers. Our partners at Cardinal House have great resources to help you market your project. Reach thousands of interested people through digital marketing, YouTube reviews, AMAs, community events, and more!"
            icon={<FiTarget size={35} />}
          />
          <ServiceCard
            title="Community Events"
            description="A strong project has a strong community. We understand the importance of a well informed, active, and proactive communities. Our partners at Cardinal House provide the best community event management for DeFi projects. Build your community through game nights, giveaways, challenges, surprises, and more!"
            icon={<MdEmojiEvents size={35} />}
          />
          <ServiceCard
            title="AMAs"
            description="AMAs are a great way to reach new potential investors and get fresh eyes on your project. They serve as a very useful tool in sharing what your project is about and who the team is around the project. Contact Cardinal House to schedule an AMA!"
            icon={<IoMicSharp size={35} />}
          />
          <ServiceCard
            title="Ivy Nest (Coming Soon!)"
            description="You wont want to be late to this once its out!"
            icon={<GiNestBirds size={35} />}
          />
        </div>

        {content && (
          <div className="my-8">
            <TextContent content={content} className="max-w-none" />
          </div>
        )}
      </Container>
    </>
  );
};

export default index;

export const getServerSideProps = async () => {
  const content = await getContentBySlug('services');

  return {
    props: {
      content,
    },
  };
};
