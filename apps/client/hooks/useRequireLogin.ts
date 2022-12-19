import useLoginFlowStore from 'store/useLoginFlowStore';
import useUser from './useUser';

const useRequireLogin = () => {
  const { user } = useUser();
  const { setLogin } = useLoginFlowStore((state) => state);

  const requireLogin = () => {
    if (user === null) {
      setLogin(true);
      return true;
    }
    return false;
  };

  return { requireLogin };
};

export default useRequireLogin;
