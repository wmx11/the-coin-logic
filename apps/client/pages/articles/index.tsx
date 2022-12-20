import { Container, Text } from '@mantine/core';
import { BlogPosts } from 'components/BlogPosts';
import PaginationFilter from 'components/Filters/PaginationFilter';
import PerPageFilter from 'components/Filters/PerPageFilter';
import ProjectsFilter from 'components/Filters/ProjectsFilter';
import GrayBox from 'components/GrayBox';
import Meta from 'components/Meta';
import GradientTitle from 'components/Text/GradientTitle';
import { PER_PAGE } from 'constants/general';
import { getBlogPosts } from 'data/getters';
import withRedisCache from 'data/withRedisCache';
// import useArticlesFilter from 'hooks/useArticlesFilter';
import { FC, useEffect } from 'react';
import { Content } from 'types';

type ArticlesProps = {
  blogPosts: Content[];
  blogPostsCount: number;
};

const Articles: FC<ArticlesProps> = ({ blogPosts, blogPostsCount }) => {
  // const { articles, pagination, isLoading, setArticles, setCount } = useArticlesFilter();

  // useEffect(() => {
  //   setArticles(blogPosts);
  //   setCount(blogPostsCount);
  // }, []);

  return (
    <>
      <Meta
        title="Cryptocurrency articles, news, educational content | Coin Logic"
        description="Explore The Coin Logic product updates, cryptocurrency news, educational content, and how crypto, and DeFi communities can leverage data."
      />
      <Container className="py-10">
        <div className="mb-8">
          <GradientTitle>The Coin Logic Articles & Blog</GradientTitle>
          <Text size="xs" color="dimmed">
            Jump into The Coin Logic product updates, news, educational content, and how communities, and cryptocurrency
            projects can leverage data
          </Text>
        </div>
        {/* <div className="my-4">
          <ProjectsFilter description="Choose a project to narrow down your results." />
        </div> */}

        {(blogPosts) && (blogPosts).length ? (
          <BlogPosts data={blogPosts} />
        ) : (
          <div className="py-10">
            <GrayBox>No articles here 😮</GrayBox>
          </div>
        )}

        {/* <div className="flex items-end justify-between gap-2 mt-4">
          {pagination?.pages ? (
            <>
              <PaginationFilter pages={pagination?.pages as number} isLoading={isLoading} />
              <PerPageFilter />
            </>
          ) : null}
        </div> */}
      </Container>
    </>
  );
};

export default Articles;

export const getServerSideProps = async () => {
  const [blogPosts, blogPostsCount] = await withRedisCache('blogPosts_articles', () =>
    getBlogPosts({ take: PER_PAGE, skip: 0, limit: 0, count: 0, isLastPage: false, page: 1, pages: 0 }),
  );

  return {
    props: {
      blogPosts,
      blogPostsCount,
    },
  };
};
