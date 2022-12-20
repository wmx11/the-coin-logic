import { getUserById, getUserProjects, getUserReferrals } from 'data/getters/user';
import { useSession } from 'next-auth/react';
import { useCallback, useEffect } from 'react';
import useUserStore from 'store/useUserStore';
import { products } from 'types/Products';

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

  return { user, session, status, subscription: getSubscription() };
};

export default useUser;
