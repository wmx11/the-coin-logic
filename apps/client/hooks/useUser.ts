import { SESSION_TOKEN } from 'constants/general';
import { getUserById, getUserProjects, getUserReferrals } from 'data/getters/user';
import { useSession } from 'next-auth/react';
import { useEffect, useMemo, useState } from 'react';
import { User } from 'types';
import { products } from 'types/Products';
import useLocalStorage from './useLocalStorage';

const useUser = () => {
  const { data: session, status } = useSession();
  const [user, setUser] = useState<(User & { ordersCount: number }) | null>(null);
  const [storedValue, setValue] = useLocalStorage(SESSION_TOKEN, session?.token);
  const userId = session?.id;

  const getUser = useMemo(async () => {
    if (!userId) {
      return null;
    }

    const user = await getUserById(session.id as string);
    const userReferrals = await getUserReferrals(user.referralCode);
    const projects = await getUserProjects(user.email);
    return { id: userId, ...user, ...userReferrals, projects };
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
    getUser.then((data) => setUser(data));
    if (session) {
      setValue(session?.token);
    }
  }, [session]);

  return { user, session, status, subscription: getSubscription() };
};

export default useUser;
