import { Container, Text } from '@mantine/core';
import { BlogPosts } from 'components/BlogPosts';
import Meta from 'components/Meta';
import GradientTitle from 'components/Text/GradientTitle';
import { getBlogPosts } from 'data/getters';
import withRedisCache from 'data/withRedisCache';
import React, { FC } from 'react';
import { Content } from 'types';

type ArticlesProps = {
  blogPosts: Content[];
};

const Articles: FC<ArticlesProps> = ({ blogPosts }) => {
  return (
    <>
      <Meta
        title="Cryptocurrency articles, news, educational content | Coin Logic"
        description="Explore The Coin Logic product updates, cryptocurrency news, educational content, and how crypto, and DeFi communities can leverage data."
      />
      <Container className="py-10">
        <GradientTitle align="center">The Coin Logic Articles & Blog</GradientTitle>
        <Text size="sm" color="dimmed" align="center">
          Jump into The Coin Logic product updates, news, educational content, and how communities, and cryptocurrency
          projects can leverage data
        </Text>
        <BlogPosts data={blogPosts} />
      </Container>
    </>
  );
};

export default Articles;

export const getServerSideProps = async () => {
  const blogPosts = await withRedisCache('blogPosts_articles', () => getBlogPosts(null));

  return {
    props: {
      blogPosts,
    },
  };
};
