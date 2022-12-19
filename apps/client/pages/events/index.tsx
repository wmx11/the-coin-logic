import { PER_PAGE, QUERY_EVENT, QUERY_PROJECT } from 'constants/general';
import { getEventByEventId, getEvents, getEventsByProjectSlug } from 'data/getters/events';
import { GetServerSideProps } from 'next';
import { FC } from 'react';
import { DiscordEvent } from 'tcl-packages/types';
import Events from 'views/events/Events';

type EventsProps = {
  events: DiscordEvent[];
  count: number;
};

const events: FC<EventsProps> = ({ events, count }) => {
  return <Events events={events} count={count} />;
};

export default events;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const getter = () => {
    if (query[QUERY_PROJECT]) {
      return getEventsByProjectSlug(query[QUERY_PROJECT] as string, {
        take: PER_PAGE,
        count: 0,
        isLastPage: false,
        limit: 0,
        page: 1,
        pages: 0,
        skip: 0,
      });
    }
    if (query[QUERY_EVENT]) {
      return getEventByEventId(query[QUERY_EVENT] as string);
    }

    return getEvents({ take: PER_PAGE });
  };

  const [events, count] = await getter();

  return {
    props: {
      events,
      count: count || null,
    },
  };
};
