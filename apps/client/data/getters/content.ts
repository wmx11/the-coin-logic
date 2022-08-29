import {
  GET_BLOG_CONTENT_BY_SLUG,
  GET_BLOG_POSTS,
  GET_CONTENT_BY_BLOCK,
  GET_CONTENT_BY_SLUG,
} from './constatnts/content';
import { getData } from './getters';

export const getContentBySlug = async (slug: string) => {
  const { contents } = await getData(GET_CONTENT_BY_SLUG, { slug });
  return contents[0] || null;
};

export const getContentByBlock = async (block: string) => {
  const { contents } = await getData(GET_CONTENT_BY_BLOCK, { block });
  return contents[0] || null;
};

export const getBlogContentBySlug = async (slug: string) => {
  const { contents } = await getData(GET_BLOG_CONTENT_BY_SLUG, { slug });
  return contents[0] || null;
};

export const getBlogPosts = async (take: number | null) => {
  const { contents } = await getData(GET_BLOG_POSTS, { take });
  return contents || null;
};
