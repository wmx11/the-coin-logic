import { PER_PAGE, QUERY_PAGE, QUERY_PER_PAGE } from 'constants/general';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

type UsePaginationProps = {
  itemCount?: number;
  perPageCount?: number;
};

export type Pagination = {
  take: number;
  skip: number;
  limit: number;
  pages: number;
  page: number;
  isLastPage: boolean;
  count: number;
};

export type PaginationTakePerPage = {
  take?: number;
  skip?: number;
  limit?: number;
};

const usePagination = (data?: UsePaginationProps) => {
  const [count, setCount] = useState(data?.itemCount || 0);
  const [perPage, setPerPage] = useState(data?.perPageCount || PER_PAGE);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState<Pagination>();

  const router = useRouter();
  const query = router.query;

  useEffect(() => {
    if (query[QUERY_PAGE]) {
      setPage(parseInt(query[QUERY_PAGE] as string, 10));
    }

    if (query[QUERY_PER_PAGE]) {
      setPerPage(parseInt(query[QUERY_PER_PAGE] as string, 10));
    }
  }, [query[QUERY_PAGE], query[QUERY_PER_PAGE]]);

  const getSkip = () => {
    const skip = Math.floor(page * perPage - perPage);

    if (page === 1) {
      return 0;
    }

    if (skip >= count) {
      return count;
    }

    return skip;
  };

  const getPages = () => Math.ceil(count / perPage);
  const nextPage = () => setPage((prevPage) => prevPage + 1);

  const getPagination = () =>
    ({
      take: perPage,
      skip: getSkip(),
      limit: getSkip(),
      pages: getPages(),
      page,
      isLastPage: getSkip() >= count,
      count,
    } as Pagination);

  return {
    page,
    pagination,
    perPage,
    setPagination,
    nextPage,
    setCount,
    setPerPage,
    setPage,
    getPages,
    getSkip,
    getPagination,
  };
};

export default usePagination;
