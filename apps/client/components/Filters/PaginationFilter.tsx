import { Pagination } from '@mantine/core';
import { QUERY_PAGE } from 'constants/general';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';

type PaginationFilterProps = {
  pages: number;
  onChange?: () => void;
  isLoading?: boolean;
};

const PaginationFilter: FC<PaginationFilterProps> = ({ pages, onChange, isLoading }) => {
  const router = useRouter();
  const [activePage, setPage] = useState(parseInt(router.query[QUERY_PAGE] as string, 10) || 1);

  const handlePageChange = (page: number) => {
    router.push({ query: { ...router.query, [QUERY_PAGE]: page } }, '', { shallow: true });
    setPage(page);
    onChange && onChange();
  };

  return (
    <div>
      <Pagination total={pages} color="violet" page={activePage} onChange={handlePageChange} disabled={isLoading} />
    </div>
  );
};

export default PaginationFilter;
