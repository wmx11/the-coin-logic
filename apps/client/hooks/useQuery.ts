import { useRouter } from 'next/router';

const useQuery = () => {
  const router = useRouter();

  const routerQuery = router.query;

  const addQuery = (query: Record<string, string>) => {
    router.push({ query: { ...routerQuery, ...query } });
  };

  return { ...routerQuery, addQuery };
};

export default useQuery;
