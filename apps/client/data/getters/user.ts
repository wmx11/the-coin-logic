import { GET_USER_BY_ID, GET_USER_PAYMENTS, GET_USER_REFERALS } from './constatnts/user';
import { getData } from './getters';

export const getUserById = async (id: string) => {
  const { user } = await getData(GET_USER_BY_ID, { id });
  return user || null;
};

export const getUserReferrals = async (referralCode: string) => {
  const { referredUsers, onboardedProjects } = await getData(GET_USER_REFERALS, { referralCode });
  return { referredUsers, onboardedProjects } || null;
};

export const getUserPayments = async (email: string) => {
  const { user } = await getData(GET_USER_PAYMENTS, { email });
  return user?.payments || null;
};
