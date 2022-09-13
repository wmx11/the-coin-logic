import { Container, Divider, Text, Title } from '@mantine/core';
import PricingCard from 'components/PricingCard';
import TextContent from 'components/TextContent';
import TextContentWrapper from 'components/TextContent/TextContentWrapper';
import { getContentBySlug } from 'data/getters';
import { useRouter } from 'next/router';
import { FC } from 'react';
import routes from 'routes';
import { ContentProps } from 'types/TextContent';

const index: FC<ContentProps> = ({ content }) => {
  const router = useRouter();

  return (
    <Container className="py-10">
      <div className="flex gap-8 items-center justify-center w-full flex-wrap flex-col md:flex-row">
        <div className="flex-1 min-w-[200px] md:max-w-[400px]">
          <Title order={1} className="mb-4 font-bold text-5xl">
            Monitor your DeFi journey today!
          </Title>
          <Text size="sm" color="dimmed">
            Become a transparent DeFi project through data. Leverage analytics and make better decisions. Stay in the
            loop.
          </Text>
        </div>

        <div className="flex gap-8 flex-wrap md:flex-nowrap">
          <PricingCard
            label="Regular"
            price="Free"
            description="Our regular plan is free for everyone. Monitor and analyze data for any TCL listed project. Use the tools and data to make your journey through DeFi easier."
            offers={[
              'Access to market data',
              'Access to holders data',
              'Access to social media analytics data',
              'Access to charts',
              'Access to regular tools',
            ]}
            onClick={() => router.replace('/')}
            cta={'Get Started'}
          />
          <PricingCard
            label="Owner"
            price="From $1,000, one-time"
            description="Our owner plan is used by project owners or associates to list their project on TCL and reap the
            benefits of transparent, real-time data tracking. All this is further augmented with analytics tools
            that make tracking data, marketing, release efforts that much easier."
            offers={[
              'Real-time data tracking',
              'Admin dashboard',
              'Market data tracking',
              'Custom market data tracking',
              'Holders data tracking',
              'Social media analytics data tracking',
              'Downloads in .csv',
              'Discord events integration',
              'Discord announcements integration',
              'And more',
            ]}
            cta={'Contact us'}
            onClick={() => router.replace(routes.contact)}
            styles={{
              cardBody: 'bg-violet',
              label: 'text-white',
              price: 'text-white',
              description: 'text-white',
              offer: 'text-white',
              offerIcon: 'text-white',
              cta: 'text-violet',
              ctaVariant: 'white',
            }}
          />
        </div>
      </div>

      <Divider className="my-8" />

      <TextContent content={content} className="m-auto max-w-none" />
    </Container>
  );
  return (
    <TextContentWrapper content={content}>
      <TextContent className="m-auto max-w-none" />
    </TextContentWrapper>
  );
};

export default index;

export const getServerSideProps = async () => {
  const content = await getContentBySlug('pricing');

  return {
    props: {
      content,
    },
  };
};
