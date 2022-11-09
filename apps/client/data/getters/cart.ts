import { GET_CARTS } from './constatnts/cart';
import { getData } from './getters';

export const getCarts = async (userId: string) => {
  const { carts } = await getData({ query: GET_CARTS, variables: { userId }, fetchPolicy: 'network-only' });
  return carts[0] || null;
};
