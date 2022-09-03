import { Container, Paper, Text, Title } from '@mantine/core';
import Meta from 'components/Meta';
import TextContent from 'components/TextContent';
import { getContentBySlug } from 'data/getters';
import Image, { StaticImageData } from 'next/image';
import auditing from 'public/images/auditing.png';
import { FC, ReactNode } from 'react';
import { AiOutlineBarChart } from 'react-icons/ai';
import { FiTarget, FiUserCheck } from 'react-icons/fi';
import { GiNestBirds } from 'react-icons/gi';
import { IoMicSharp } from 'react-icons/io5';
import { MdEmojiEvents } from 'react-icons/md';
import { ContentProps } from 'types/TextContent';

type ServiceCardProps = {
  title: string;
  description: string;
  image?: StaticImageData;
  alt?: string;
  icon?: ReactNode;
};

const ServiceCard: FC<ServiceCardProps> = ({ title, description, image, alt, icon }) => {
  return (
    <Paper
      p="lg"
      shadow="sm"
      withBorder
      className="flex justify-between items-center hover:shadow-lg transition-shadow"
    >
      <div className="flex-1 md:max-w-[78%]">
        <Title order={2} className="text-violet mb-2">
          {title}
        </Title>
        <Text size="sm">{description}</Text>
      </div>
      <div className="flex-0 flex justify-end">
        {image && <Image src={image} alt={alt as string} width="100px" height="100px" layout="intrinsic" />}
        {icon && icon}
      </div>
    </Paper>
  );
};

const index: FC<ContentProps> = ({ content }) => {
  return (
    <>
      <Meta title="Listing, tracking, audits, KYC, and other services | Coin Logic" />
      <Container className="py-10">
        <Title order={1} className="text-center mb-16">
          Our Features & Services
        </Title>

        <div className="grid md:grid-cols-2 gap-8">
          <ServiceCard
            title="Listing & Tracking"
            description="List and track your project data in real-time. Bring transparency through data right to your community! General market data such as price, market cap, supply, liquidity, custom data like treasury, insurance, and utility wallets. Track holders from a specified token amount. Never be out of the loop with what’s happening with your project."
            icon={<AiOutlineBarChart size={35} className="text-violet" />}
          />
          <ServiceCard
            title="Contract Audits"
            description="Smart contract audits are one of the best ways to ensure your project is secure and free of logic errors. Audits can help you spot bugs way before the project grows to sizes where migrations are a headache to handle. Audit your project smart contract with one of the most competitive prices in the space through our partners at Cardinal House! They are revolutionizing the space in a couple key ways in addition to all audit standards. Firstly, Cardinal House Audits do a manual review of the smart contracts to ensure that all intended functionalities are present. Secondly, they also do Unit/Integration Testing as a secondary service to dive deeper into all the edge cases."
            image={auditing}
            alt="Auditing logo"
          />
          <ServiceCard
            title="K.Y.C (Know Your Customer)"
            description="K.Y.C is one way to make you and your project transparent. Having you and your team complete a full K.Y.C will bring trust to the community and will set a certain mindframe for future actions and management of the project. Our partners at K.C Consulting provide the best legal K.Y.C services!"
            icon={<FiUserCheck size={35} className="text-violet" />}
          />
          <ServiceCard
            title="Marketing"
            description="Marketing is the best way to reach the masses and potential customers. Our partners at Cardinal House have great resources to help you market your project. Reach thousands of interested people through digital marketing, YouTube reviews, AMAs, community events, and more!"
            icon={<FiTarget size={35} className="text-violet" />}
          />
          <ServiceCard
            title="Community Events"
            description="A strong project has a strong community. We understand the importance of a well informed, active, and proactive communities. Our partners at Cardinal House provide the best community event management for DeFi projects. Build your community through game nights, giveaways, challenges, surprises, and more!"
            icon={<MdEmojiEvents size={35} className="text-violet" />}
          />
          <ServiceCard
            title="AMAs (Ask Me Anything)"
            description="AMAs are a great way to reach new potential investors and get fresh eyes on your project. They serve as a very useful tool in sharing what your project is about and who the team is around the project. Contact Cardinal House to schedule an AMA!"
            icon={<IoMicSharp size={35} className="text-violet" />}
          />
          <ServiceCard
            title="Ivy Nest (Coming Soon!)"
            description="You wont want to be late to this once its out!"
            icon={<GiNestBirds size={35} className="text-violet" />}
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
