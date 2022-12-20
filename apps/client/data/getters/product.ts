import { Pagination, PaginationTakePerPage } from 'hooks/usePagination';
import {
  GET_PRODUCTS,
  GET_PRODUCT_BY_SKU,
  GET_QUIZZES,
  GET_QUIZZES_BY_PROJECT_SLUG,
  GET_QUIZ_BY_QUIZ_ID,
  GET_QUIZ_BY_SLUG,
} from './constatnts/product';
import { getData } from './getters';

export const getProductBySku = async (sku: string) => {
  const { products } = await getData({ query: GET_PRODUCT_BY_SKU, variables: { sku }, fetchPolicy: 'network-only' });
  return products[0] || null;
};

export const getProducts = async () => {
  const { products, paymentPlans } = await getData({ query: GET_PRODUCTS, fetchPolicy: 'network-only' });
  return { products, paymentPlans } || null;
};

export const getQuizzes = async (pagination: PaginationTakePerPage) => {
  const { quizzes, quizzesCount } = await getData({
    query: GET_QUIZZES,
    variables: { ...pagination },
    fetchPolicy: 'network-only',
  });
  return [quizzes, quizzesCount] || null;
};

export const getQuizzesByProjectSlug = async (slug: string, pagination: Pagination) => {
  const { quizzes, quizzesCount } = await getData({
    query: GET_QUIZZES_BY_PROJECT_SLUG,
    variables: { slug, ...pagination },
    fetchPolicy: 'network-only',
  });
  return [quizzes, quizzesCount] || null;
};

export const getQuizBySlug = async (slug: string) => {
  const { quizzes } = await getData({
    query: GET_QUIZ_BY_SLUG,
    variables: { slug },
    fetchPolicy: 'network-only',
  });
  return quizzes[0] || null;
};

export const getQuizByQuizId = async (id: string) => {
  const { quiz } = await getData({
    query: GET_QUIZ_BY_QUIZ_ID,
    variables: { id },
    fetchPolicy: 'network-only',
  });
  return [quiz] || null;
};
