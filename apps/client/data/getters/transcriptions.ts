import { PaginationTakePerPage } from 'hooks/usePagination';
import { GET_TRANSCRIPTIONS, GET_TRANSCRIPTIONS_BY_PROJECT_SLUG, GET_TRANSCRIPTION_BY_SLUG } from './constatnts/transcriptions';
import { getData } from './getters';

export const getTranscriptionBySlug = async (slug: string) => {
  const { transcriptions } = await getData({
    query: GET_TRANSCRIPTION_BY_SLUG,
    variables: { slug },
    fetchPolicy: 'network-only',
  });
  return transcriptions[0] || null;
};

export const getTranscriptions = async (pagination: PaginationTakePerPage) => {
  const { transcriptions, transcriptionsCount } = await getData({
    query: GET_TRANSCRIPTIONS,
    variables: { ...pagination },
    fetchPolicy: 'network-only',
  });
  return [transcriptions, transcriptionsCount] || null;
};

export const getTranscriptionsByProjectSlug = async (slug: string, pagination: PaginationTakePerPage) => {
  const { transcriptions, transcriptionsCount } = await getData({
    query: GET_TRANSCRIPTIONS_BY_PROJECT_SLUG,
    variables: { slug, ...pagination },
    fetchPolicy: 'network-only',
  });
  return [transcriptions, transcriptionsCount] || null;
};
