import { useRouter } from 'next/router';

const useResetToken = () => {
  const router = useRouter();
  const { query } = router;
  
  return { token: query['reset-token'] };
};

export default useResetToken;
