import { getUserById, getUserReferrals } from 'data/getters/user';
import { useSession } from 'next-auth/react';
import { useEffect, useMemo, useState } from 'react';
import { User } from 'types';

const useUser = () => {
  const { data: session, status } = useSession();
  const [user, setUser] = useState<User | null>(null);
  const userId = session?.id;

  const getUser = useMemo(async () => {
    if (!userId) {
      return null;
    }
    const user = await getUserById(session.id as string);
    const userReferrals = await getUserReferrals(user.referralCode);
    return { ...user, ...userReferrals };
  }, [session]);

  useEffect(() => {
    getUser.then((data) => setUser(data));
  }, [session]);

  return { user, session, status };
};

export default useUser;
