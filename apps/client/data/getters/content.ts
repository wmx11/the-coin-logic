import { Pagination } from 'hooks/usePagination';
import {
  GET_BLOG_CONTENT_BY_SLUG,
  GET_BLOG_POSTS,
  GET_BLOG_POSTS_BY_PROJECT_SLUG,
  GET_CONTENT_BY_BLOCK,
  GET_CONTENT_BY_SLUG,
  GET_TEXT_CONTENT_BY_SLUG,
} from './constatnts/content';
import { getData } from './getters';

export const getContentBySlug = async (slug: string) => {
  const { contents } = await getData({ query: GET_CONTENT_BY_SLUG, variables: { slug }, fetchPolicy: 'network-only' });
  return contents[0] || null;
};

export const getTextContentBySlug = async (slug: string) => {
  const { contents } = await getData({
    query: GET_TEXT_CONTENT_BY_SLUG,
    variables: { slug },
    fetchPolicy: 'network-only',
  });
  return contents[0] || null;
};

export const getContentByBlock = async (block: string) => {
  const { contents } = await getData({
    query: GET_CONTENT_BY_BLOCK,
    variables: { block },
    fetchPolicy: 'network-only',
  });
  return contents[0] || null;
};

export const getBlogContentBySlug = async (slug: string) => {
  const { contents } = await getData({
    query: GET_BLOG_CONTENT_BY_SLUG,
    variables: { slug },
    fetchPolicy: 'network-only',
  });
  return contents[0] || null;
};

export const getBlogPosts = async (pagination: Pagination) => {
  const { contents, contentsCount } = await getData({
    query: GET_BLOG_POSTS,
    variables: { ...pagination },
    fetchPolicy: 'network-only',
  });
  return [contents, contentsCount] || null;
};

export const getBlogPostsByProjectSlug = async (slug: string, pagination: Pagination) => {
  const { contents, contentsCount } = await getData({
    query: GET_BLOG_POSTS_BY_PROJECT_SLUG,
    variables: { slug, ...pagination },
    fetchPolicy: 'network-only',
  });
  return [contents, contentsCount] || null;
};
