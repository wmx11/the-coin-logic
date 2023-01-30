import { Container, Text } from '@mantine/core';
import AddYourProject from 'components/AddYourProject';
import { SmallBackgroundWrapper } from 'components/BackgroundWrapper/BackgroundWrapper';
import { ContentCardsCollection } from 'components/ContentCollection';
import PaginationFilter from 'components/Filters/PaginationFilter';
import PerPageFilter from 'components/Filters/PerPageFilter';
import ProjectsFilter from 'components/Filters/ProjectsFilter';
import GrayBox from 'components/GrayBox';
import Meta from 'components/Meta';
import GradientTitle from 'components/Text/GradientTitle';
import { PER_PAGE } from 'constants/general';
import { getBlogPosts } from 'data/getters';
import withRedisCache from 'data/redis';
import useArticlesFilter from 'hooks/useArticlesFilter';
import { FC, useEffect } from 'react';
import { Content } from 'types';

type ArticlesProps = {
  blogPosts: Content[];
  blogPostsCount: number;
};

const Articles: FC<ArticlesProps> = ({ blogPosts, blogPostsCount }) => {
  const { articles, pagination, isLoading, setArticles, setCount } = useArticlesFilter();

  useEffect(() => {
    setArticles(blogPosts);
    setCount(blogPostsCount);
  }, []);

  return (
    <>
      <Meta
        title="TheCoinLogic Articles & News: Your Cryptocurrency Knowledge Source"
        description="TheCoinLogic provides the information necessary to better leverage knowledge in the crypto space. Get the top news, market insights, and expert opinions."
      />
      <SmallBackgroundWrapper>
        <div className="text-center">
          <GradientTitle>The Coin Logic Articles & Blog</GradientTitle>
          <Text size="sm" color="dimmed">
            Jump into The Coin Logic product updates, news, educational content, and how communities, and cryptocurrency
            projects can leverage data
          </Text>
        </div>
      </SmallBackgroundWrapper>
      <Container className="py-10">
        <div className="my-4">
          <ProjectsFilter description="Choose a project to narrow down your results." />
        </div>

        {(articles || blogPosts) && (articles || blogPosts).length ? (
          <ContentCardsCollection data={articles || blogPosts} />
        ) : (
          <div className="py-10">
            <GrayBox>No articles here 😮</GrayBox>
          </div>
        )}

        <div className="flex items-end justify-between gap-2 mt-4">
          {pagination?.pages ? (
            <>
              <PaginationFilter pages={pagination?.pages as number} isLoading={isLoading} />
              <PerPageFilter />
            </>
          ) : null}
        </div>
      </Container>
      <section className="mt-4">
        <AddYourProject />
      </section>
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
