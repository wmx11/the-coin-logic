import { initializeApollo } from 'data/apollo-client';
import {
  GET_BLOG_CONTENT_BY_SLUG,
  GET_BLOG_POSTS,
  GET_CONTENT_BY_BLOCK,
  GET_CONTENT_BY_SLUG,
  GET_TEXT_CONTENT_BY_SLUG,
} from './constatnts/content';
import { getData } from './getters';

export const getContentBySlug = async (slug: string) => {
  const { contents } = await getData({ query: GET_CONTENT_BY_SLUG, variables: { slug }, client: initializeApollo() });
  return contents[0] || null;
};

export const getTextContentBySlug = async (slug: string) => {
  const { contents } = await getData({
    query: GET_TEXT_CONTENT_BY_SLUG,
    variables: { slug },
    client: initializeApollo(),
  });
  return contents[0] || null;
};

export const getContentByBlock = async (block: string) => {
  const { contents } = await getData({ query: GET_CONTENT_BY_BLOCK, variables: { block }, client: initializeApollo() });
  return contents[0] || null;
};

export const getBlogContentBySlug = async (slug: string) => {
  const { contents } = await getData({
    query: GET_BLOG_CONTENT_BY_SLUG,
    variables: { slug },
    client: initializeApollo(),
  });
  return contents[0] || null;
};

export const getBlogPosts = async (take: number | null) => {
  const { contents } = await getData({ query: GET_BLOG_POSTS, variables: { take }, client: initializeApollo() });
  return contents || null;
};
