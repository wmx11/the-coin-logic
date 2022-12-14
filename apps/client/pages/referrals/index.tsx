import { Button } from '@mantine/core';
import TextContent from 'components/TextContent';
import TextContentWrapper from 'components/TextContent/TextContentWrapper';
import { getContentBySlug } from 'data/getters';
import { FC } from 'react';
import { ContentProps } from 'types/TextContent';
import { toast } from 'react-toastify';

const index: FC<ContentProps> = ({ content }) => {
  return (
    <TextContentWrapper content={content}>
      <TextContent className="m-auto max-w-none" />
    </TextContentWrapper>
  );
};

export default index;

export const getServerSideProps = async () => {
  const content = await getContentBySlug('referrals');

  return {
    props: {
      content,
    },
  };
};
