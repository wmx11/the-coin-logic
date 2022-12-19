import { PER_PAGE, QUERY_PROJECT } from 'constants/general';
import { getBlogPosts, getBlogPostsByProjectSlug } from 'data/getters';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Content } from 'types';
import usePagination from './usePagination';

const useArticlesFilter = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState<Content[]>();
  const { setCount, getPagination, nextPage, perPage } = usePagination({ perPageCount: PER_PAGE });

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    if (!router.query[QUERY_PROJECT]) {
      fetchArticles();
    }

    if (router.query[QUERY_PROJECT]) {
      getArticlesBySlug(decodeURIComponent(router.query[QUERY_PROJECT] as string));
    }
  }, [getPagination().page, perPage, router.isReady, router.query[QUERY_PROJECT]]);

  const fetchArticles = async () => {
    setIsLoading(true);
    const [data, count] = await getBlogPosts(getPagination());
    setArticles(data);
    setCount(count);
    setIsLoading(false);
  };

  const getArticlesBySlug = async (slug: string) => {
    setIsLoading(true);
    const [data, count] = await getBlogPostsByProjectSlug(slug, getPagination());
    setArticles(data);
    setCount(count);
    setIsLoading(false);
  };

  return {
    articles,
    isLoading,
    pagination: getPagination(),
    nextPage,
    setCount,
    setArticles,
    fetchArticles,
    getArticlesBySlug,
  };
};

export default useArticlesFilter;
