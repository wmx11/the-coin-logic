import { GET_PRODUCTS, GET_PRODUCT_BY_SKU } from './constatnts/product';
import { getData } from './getters';

export const getProductBySku = async (sku: string) => {
  const { products } = await getData({ query: GET_PRODUCT_BY_SKU, variables: { sku }, fetchPolicy: 'network-only' });
  return products[0] || null;
};

export const getProducts = async () => {
  const { products } = await getData({ query: GET_PRODUCTS, fetchPolicy: 'network-only' });
  return products || null;
};
