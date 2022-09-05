import { Button, Title } from '@mantine/core';
import SmallHero from 'components/SmallHero';
import TextContent from 'components/TextContent';
import TextContentWrapper from 'components/TextContent/TextContentWrapper';
import { getContentBySlug } from 'data/getters';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { ContentProps } from 'types/TextContent';

const index: FC<ContentProps> = ({ content }) => {
  const router = useRouter();

  return (
    <>
      <SmallHero>
        <Title order={1} className="text-5xl mb-4">
          About Coin Logic Taking First Steps
        </Title>
        <Title order={4} className="mb-4">
          A small glimpse inside on what started Coin Logic!
        </Title>
        <Button variant="white" color="violet" onClick={() => router.push('/contact-us')}>
          Contact Us
        </Button>
      </SmallHero>
      <TextContentWrapper content={content}>
        <TextContent className="m-auto max-w-none" />
      </TextContentWrapper>
    </>
  );
};

export default index;

export const getServerSideProps = async () => {
  const content = await getContentBySlug('about-us');

  return {
    props: {
      content,
    },
  };
};
