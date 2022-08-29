import TextContent from 'components/TextContent';
import TextContentWrapper from 'components/TextContent/TextContentWrapper';
import { getContentBySlug } from 'data/getters';
import { FC } from 'react';
import { ContentProps } from 'types/TextContent';

const index: FC<ContentProps> = ({ content }) => {
  return (
    <TextContentWrapper content={content}>
      <TextContent className="m-auto" />
    </TextContentWrapper>
  );
};

export default index;

export const getServerSideProps = async () => {
  const content = await getContentBySlug('cookie-policy');

  return {
    props: {
      content,
    },
  };
};
