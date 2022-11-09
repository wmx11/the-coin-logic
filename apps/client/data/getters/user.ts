import { GET_USER_BY_ID, GET_USER_MARKETING_CAMPAIGNS, GET_USER_PROJECTS, GET_USER_REFERALS } from './constatnts/user';
import { getData } from './getters';

export const getUserById = async (id: string) => {
  const { user, ordersCount } = await getData({
    query: GET_USER_BY_ID,
    variables: { id },
    fetchPolicy: 'network-only',
  });
  return { ...user, ordersCount } || null;
};

export const getUserReferrals = async (referralCode: string) => {
  const { referredUsers, onboardedProjects } = await getData({ query: GET_USER_REFERALS, variables: { referralCode } });
  return { referredUsers, onboardedProjects } || null;
};

export const getUserMarketingCampaigns = async (email: string) => {
  const { user } = await getData({
    query: GET_USER_MARKETING_CAMPAIGNS,
    variables: { email },
    fetchPolicy: 'network-only',
  });
  return user?.marketingCampaigns || null;
};

export const getUserProjects = async (email: string) => {
  const { user } = await getData({ query: GET_USER_PROJECTS, variables: { email }, fetchPolicy: 'network-only' });
  return user?.projects || null;
};
