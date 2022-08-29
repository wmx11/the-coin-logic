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

type Params = {
  params: {
    slug: string;
  };
};

export const getServerSideProps = async ({ params }: Params) => {
  const slug = params.slug;
  const content = await getContentBySlug(slug);

  return {
    props: {
      content,
    },
  };
};
