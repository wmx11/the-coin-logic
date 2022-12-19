import { formatISO } from 'date-fns';
import { Pagination, PaginationTakePerPage } from 'hooks/usePagination';
import { GET_EVENTS, GET_EVENTS_BY_SLUG, GET_EVENTS_HIGHLIGHTS, GET_EVENT_BY_ID } from './constatnts/events';
import { getData } from './getters';

export const getEvents = async (pagination: PaginationTakePerPage) => {
  const date = formatISO(new Date());
  const { discordEvents, discordEventsCount } = await getData({
    query: GET_EVENTS,
    variables: { date, ...pagination },
    fetchPolicy: 'network-only',
  });
  return [discordEvents, discordEventsCount] || null;
};

export const getEventsByProjectSlug = async (slug: string, pagination: Pagination) => {
  const date = formatISO(new Date());
  const { discordEvents, discordEventsCount } = await getData({
    query: GET_EVENTS_BY_SLUG,
    variables: { slug, date, ...pagination },
    fetchPolicy: 'network-only',
  });
  return [discordEvents, discordEventsCount] || null;
};

export const getEventByEventId = async (id: string) => {
  const { discordEvent } = await getData({
    query: GET_EVENT_BY_ID,
    variables: { id },
    fetchPolicy: 'network-only',
  });
  return [discordEvent] || null;
};

export const getEventsHighlights = async () => {
  const date = formatISO(new Date());
  const { discordEvents } = await getData({
    query: GET_EVENTS_HIGHLIGHTS,
    variables: { date },
    fetchPolicy: 'network-only',
  });
  return discordEvents || null;
};
