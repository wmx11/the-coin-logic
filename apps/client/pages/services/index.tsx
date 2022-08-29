import Meta from 'components/Meta';
import TextContent from 'components/TextContent';
import TextContentWrapper from 'components/TextContent/TextContentWrapper';
import { getContentBySlug } from 'data/getters';
import { FC } from 'react';
import { ContentProps } from 'types/TextContent';

const index: FC<ContentProps> = ({ content }) => {
  return (
    <>
      <Meta title="Listing, tracking, audits, KYC, and other services | Coin Logic"/>
      <TextContentWrapper content={content}>
        <TextContent className="m-auto max-w-none" />
      </TextContentWrapper>
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
