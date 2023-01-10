import useLoginFlowStore from 'store/useLoginFlowStore';
import useUserStore from 'store/useUserStore';

const useRequireLogin = () => {
  const user = useUserStore((state) => state.user);
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
