import { PER_PAGE, QUERY_PROJECT } from 'constants/general';
import { getTranscriptions, getTranscriptionsByProjectSlug } from 'data/getters/transcriptions';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Transcription } from 'types';
import usePagination from './usePagination';

const useTranscriptionsFilter = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [transcriptions, setTranscriptions] = useState<Transcription[]>();
  const { setCount, getPagination, nextPage, perPage } = usePagination({ perPageCount: PER_PAGE });

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    if (!router.query[QUERY_PROJECT]) {
      fetchTranscriptions();
    }

    if (router.query[QUERY_PROJECT]) {
      getTranscriptionsBySlug(decodeURIComponent(router.query[QUERY_PROJECT] as string));
    }
  }, [getPagination().page, perPage, router.isReady, router.query[QUERY_PROJECT]]);

  const fetchTranscriptions = async () => {
    setIsLoading(true);
    const [data, count] = await getTranscriptions(getPagination());
    setTranscriptions(data);
    setCount(count);
    setIsLoading(false);
  };

  const getTranscriptionsBySlug = async (slug: string) => {
    setIsLoading(true);
    const [data, count] = await getTranscriptionsByProjectSlug(slug, getPagination());
    setTranscriptions(data);
    setCount(count);
    setIsLoading(false);
  };

  return {
    transcriptions,
    isLoading,
    pagination: getPagination(),
    nextPage,
    setCount,
    setTranscriptions,
    fetchTranscriptions,
    getTranscriptionsBySlug,
  };
};

export default useTranscriptionsFilter;
