import { PER_PAGE, QUERY_PROJECT, QUERY_QUIZ } from 'constants/general';
import { getQuizByQuizId, getQuizzes, getQuizzesByProjectSlug } from 'data/getters/product';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Quiz } from 'types';
import usePagination from './usePagination';

const useQuizzesFilter = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [quizzes, setQuizzes] = useState<Quiz[]>();
  const { setCount, getPagination, nextPage } = usePagination({ perPageCount: PER_PAGE });

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    if (!router.query[QUERY_PROJECT] && !router.query[QUERY_QUIZ]) {
      fetchQuizzes();
    }

    if (router.query[QUERY_PROJECT] && !router.query[QUERY_QUIZ]) {
      getQuizzesBySlug(decodeURIComponent(router.query[QUERY_PROJECT] as string));
    }

    if (router.query[QUERY_QUIZ] && !router.query[QUERY_PROJECT]) {
      getQuizById(decodeURIComponent(router.query[QUERY_QUIZ] as string));
    }
  }, [getPagination().page, router.isReady, router.query[QUERY_PROJECT], router.query[QUERY_QUIZ]]);

  const fetchQuizzes = async () => {
    setIsLoading(true);
    const [data, count] = await getQuizzes(getPagination());
    setQuizzes(data);
    setCount(count);
    setIsLoading(false);
  };

  const getQuizzesBySlug = async (slug: string) => {
    setIsLoading(true);
    const [data, count] = await getQuizzesByProjectSlug(slug, getPagination());
    setQuizzes(data);
    setCount(count);
    setIsLoading(false);
  };

  const getQuizById = async (id: string) => {
    setIsLoading(true);
    const [data] = await getQuizByQuizId(id);
    setQuizzes([data]);
    setIsLoading(false);
  };

  return { quizzes, isLoading, pagination: getPagination(), setQuizzes, nextPage, setCount, getQuizzesBySlug };
};

export default useQuizzesFilter;
