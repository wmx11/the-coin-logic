import { GET_USER_BY_ID, GET_USER_PAYMENTS, GET_USER_REFERALS } from './constatnts/user';
import { getData } from './getters';

export const getUserById = async (id: string) => {
  const { user } = await getData({ query: GET_USER_BY_ID, variables: { id } });
  return user || null;
};

export const getUserReferrals = async (referralCode: string) => {
  const { referredUsers, onboardedProjects } = await getData({ query: GET_USER_REFERALS, variables: { referralCode } });
  return { referredUsers, onboardedProjects } || null;
};

export const getUserPayments = async (email: string) => {
  const { user } = await getData({ query: GET_USER_PAYMENTS, variables: { email } });
  return user?.payments || null;
};
