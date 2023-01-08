import { GET_PERSON_TAGS } from './constatnts/tags';
import { getData } from './getters';

export const getPersonTags = async () => {
  const { tags } = await getData({
    query: GET_PERSON_TAGS,
    fetchPolicy: 'network-only',
  });
  return tags || null;
};
