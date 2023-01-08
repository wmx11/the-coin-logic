import { getUserById, getUserProjects, getUserReferrals } from 'data/getters/user';
import { isEqual } from 'lodash';
import { useSession } from 'next-auth/react';
import { useCallback, useEffect } from 'react';
import useUserStore from 'store/useUserStore';
import { products } from 'utils/products';

const useUser = () => {
  const { data: session, status } = useSession();
  const { user, setUser, removeUser } = useUserStore();
  const userId = session?.id;

  const getUser = useCallback(async () => {
    if (!session && user) {
      removeUser();
    }

    if (!userId) {
      return null;
    }

    const userData = await getUserById(session.id as string);

    const [userReferrals, projects] = await Promise.all([
      getUserReferrals(userData.referralCode),
      getUserProjects(userData.email),
    ]);

    const data = { id: userId, ...userData, ...userReferrals, ...projects };

    const equal = isEqual(user, data);

    if (equal) {
      return;
    }

    setUser(data);
  }, [session]);

  const getSubscription = (): { sku: string; slug: string; name: string } | null => {
    if (!user?.subscriptionStatus?.isValid) {
      return null;
    }

    return user?.subscriptionStatus?.products.filter((item: { sku: string }) =>
      Object.keys(products.sku).filter((key) => item.sku === products.sku[key as keyof typeof products.sku]),
    )[0];
  };

  useEffect(() => {
    getUser();
  }, [session]);

  const isProjectEditor = (projectId: string) => {
    if (user?.isAdmin) {
      return true;
    }
    const isEditor = user?.roles?.find(({ isEditor }) => isEditor);
    const canManageProject = user?.managedProjects?.find(({ id }) => id === projectId);
    return isEditor !== undefined && canManageProject !== undefined;
  };

  const isProjectOwner = (projectId: string) => {
    if (user?.isAdmin) {
      return true;
    }
    const ownsProject = user?.projects?.find(({ id }) => id === projectId);
    return ownsProject !== undefined;
  };

  const isFollower = (ids: { id: string }[]) => !!ids?.find((item) => item?.id === user?.id);

  const isProvider = (id: string) => user?.providerProfile?.id === id;

  return {
    user,
    session,
    status,
    subscription: getSubscription(),
    isFollower,
    isProvider,
    isProjectEditor,
    isProjectOwner,
  };
};

export default useUser;
