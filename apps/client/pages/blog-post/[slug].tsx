import React, { FC } from 'react';
import { DocumentRenderer, DocumentRendererProps } from '@keystone-6/document-renderer';
import { NotFound } from 'components/NotFound';
import { Center, Container, Text, Title } from '@mantine/core';
import { getBlogContentBySlug } from 'data/getters';
import Image from 'next/image';
import { Content } from 'types';
import { formatDate } from 'utils/formatters';
import TextContent from 'components/TextContent';
import Head from 'next/head';
import Meta from 'components/Meta';

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
              height="350px"
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
