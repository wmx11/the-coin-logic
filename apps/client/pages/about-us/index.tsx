import { Button, Title } from '@mantine/core';
import { SmallBackgroundWrapper } from 'components/BackgroundWrapper/BackgroundWrapper';
import GradientButton from 'components/Buttons/GradientButton';
import SmallHero from 'components/SmallHero';
import GradientTitle from 'components/Text/GradientTitle';
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
      <SmallBackgroundWrapper>
        <div className="text-center">
          <GradientTitle order={1} className="text-5xl mb-4 pb-2">
            About The Coin Logic
          </GradientTitle>
          <GradientButton size="md" onClick={() => router.push('/contact-us')}>
            Contact Us
          </GradientButton>
        </div>
      </SmallBackgroundWrapper>
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
