import { DocumentRendererProps } from '@keystone-6/document-renderer';
import { Center, Container, Text, Title } from '@mantine/core';
import Meta from 'components/Meta';
import { NotFound } from 'components/NotFound';
import TextContent from 'components/TextContent';
import { getBlogContentBySlug } from 'data/getters';
import Image from 'next/image';
import { FC } from 'react';
import { Content } from 'types';
import { formatDate } from 'utils/formatters';

type ContentTypes = {
  content: Content & {
    content: DocumentRendererProps;
  };
};

const index: FC<ContentTypes> = ({ content }) => {
  if (!content) {
    return (
      <Container className="py-10 h-screen flex items-center justify-center">
        <Center>
          <NotFound />
        </Center>
      </Container>
    );
  }

  const {
    title,
    image,
    summary,
    slug,
    content: { document },
    dateAdded,
    contentType,
  } = content;

  return (
    <>
      <Meta
        title={`${title} | Coin Logic`}
        description={`${summary}`}
        image={image ? image.url : ''}
        url={`https://thecoinlogic.com/blog-post/${slug}`}
      />

      <Container className="py-10">
        <section className="prose prose-md max-w-none">
          <div className="mb-2">
            <Image
              className="rounded-md"
              src={image ? image.url : ''}
              alt={title as string}
              width="800px"
              height="450px"
              layout="intrinsic"
              loading="lazy"
            />
          </div>

          <Title order={1}>{title}</Title>

          <Text size="sm" color="dimmed" className="">
            Published: {formatDate(dateAdded)}
          </Text>

          <Text size="sm" color="dimmed" className="mb-2">
            {contentType?.title}
          </Text>

          <TextContent content={content} className="max-w-none" />
        </section>
      </Container>
    </>
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
  const content = await getBlogContentBySlug(slug);

  return {
    props: {
      content,
    },
  };
};
