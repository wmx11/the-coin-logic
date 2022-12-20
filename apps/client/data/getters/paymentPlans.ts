import { GET_PAYMENT_PLANS } from './constatnts/paymentPlans';
import { getData } from './getters';

export const getPaymentPlans = async () => {
  const { paymentPlans } = await getData({ query: GET_PAYMENT_PLANS, fetchPolicy: 'network-only' });
  return paymentPlans;
};
