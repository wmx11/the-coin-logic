import { PER_PAGE, QUERY_EVENT, QUERY_PROJECT } from 'constants/general';
import { getEventByEventId, getEvents, getEventsByProjectSlug } from 'data/getters/events';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { DiscordEvent } from 'types';
import usePagination from './usePagination';

const useEventsFilter = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [events, setEvents] = useState<DiscordEvent[]>();
  const { setCount, getPagination, nextPage, perPage } = usePagination({ perPageCount: PER_PAGE });

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    if (!router.query[QUERY_PROJECT] && !router.query[QUERY_EVENT]) {
      fetchEvents();
    }

    if (router.query[QUERY_PROJECT] && !router.query[QUERY_EVENT]) {
      getEventsBySlug(decodeURIComponent(router.query[QUERY_PROJECT] as string));
    }

    if (router.query[QUERY_EVENT] && !router.query[QUERY_PROJECT]) {
      getEventById(decodeURIComponent(router.query[QUERY_EVENT] as string));
    }
  }, [getPagination().page, perPage, router.isReady, router.query[QUERY_PROJECT], router.query[QUERY_EVENT]]);

  const fetchEvents = async () => {
    setIsLoading(true);
    const [data, count] = await getEvents(getPagination());
    setEvents(data);
    setCount(count);
    setIsLoading(false);
  };

  const getEventsBySlug = async (slug: string) => {
    setIsLoading(true);
    const [data, count] = await getEventsByProjectSlug(slug, getPagination());
    setEvents(data);
    setCount(count);
    setIsLoading(false);
  };

  const getEventById = async (id: string) => {
    setIsLoading(true);
    const [data] = await getEventByEventId(id);
    setEvents([data]);
    setIsLoading(false);
  };

  return { events, isLoading, pagination: getPagination(), setEvents, nextPage, setCount, getEventsBySlug };
};

export default useEventsFilter;
