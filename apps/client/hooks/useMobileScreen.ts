import { useMediaQuery } from '@mantine/hooks';

const useMobileScreen = () => {
  const isMobileScreen = useMediaQuery('(max-width: 767px)');
  return { isMobileScreen };
};

export default useMobileScreen;
