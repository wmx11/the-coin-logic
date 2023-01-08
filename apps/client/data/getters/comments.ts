import { Comment } from 'types';
import { GET_PROJECT_COMMENTS_BY_ID, GET_PROVIDER_COMMENTS_BY_ID } from './constatnts/comments';
import { getData } from './getters';

export const getProjectCommentsById = async (data: {
  id: string;
  take: number;
  skip: number;
}): Promise<[Comment[], number]> => {
  const { comments, commentsCount } = await getData({
    query: GET_PROJECT_COMMENTS_BY_ID,
    variables: { ...data },
    fetchPolicy: 'network-only',
  });
  return [comments, commentsCount] || null;
};

export const getProviderCommentsById = async (data: {
  id: string;
  take: number;
  skip: number;
}): Promise<[Comment[], number]> => {
  const { comments, commentsCount } = await getData({
    query: GET_PROVIDER_COMMENTS_BY_ID,
    variables: { ...data },
    fetchPolicy: 'network-only',
  });
  return [comments, commentsCount] || null;
};
