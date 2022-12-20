import { Button, Text } from '@mantine/core';
import { PER_PAGE, QUERY_PER_PAGE } from 'constants/general';
import { useRouter } from 'next/router';
import { useState } from 'react';

const PerPageFilter = () => {
  const router = useRouter();
  const [perPage, setPerPage] = useState(PER_PAGE);

  const handleClick = (perPage: number) => {
    router.push({ query: { ...router.query, [QUERY_PER_PAGE]: perPage } }, '', { shallow: true });
    setPerPage(perPage);
  };

  return (
    <div>
      <Text size="xs" color="dimmed" className="mb-2">
        Per Page:
      </Text>
      <div className="flex gap-2 items-center">
        <Button size="xs" color={perPage === 10 ? 'grape' : 'violet'} onClick={() => handleClick(10)}>
          10
        </Button>
        <Button size="xs" color={perPage === 25 ? 'grape' : 'violet'} onClick={() => handleClick(25)}>
          25
        </Button>
        <Button size="xs" color={perPage === 50 ? 'grape' : 'violet'} onClick={() => handleClick(50)}>
          50
        </Button>
      </div>
    </div>
  );
};

export default PerPageFilter;
