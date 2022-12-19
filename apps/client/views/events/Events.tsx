import { Container, Text } from '@mantine/core';
import EventCard from 'components/EventCard';
import PaginationFilter from 'components/Filters/PaginationFilter';
import PerPageFilter from 'components/Filters/PerPageFilter';
import ProjectsFilter from 'components/Filters/ProjectsFilter';
import GrayBox from 'components/GrayBox';
import Meta from 'components/Meta';
import GradientTitle from 'components/Text/GradientTitle';
import useEventsFilter from 'hooks/useEventsFilter';
import { FC, useEffect } from 'react';
import { DiscordEvent } from 'tcl-packages/types';

type EventsProps = {
  events: DiscordEvent[];
  count: number;
};

const Events: FC<EventsProps> = ({ events, count }) => {
  const { events: eventsData, pagination, isLoading, setEvents, setCount } = useEventsFilter();

  useEffect(() => {
    setEvents(events);
    setCount(count);
  }, []);

  return (
    <>
      <Meta
        title="Cryptocurrency projects Discord Events tracker | Coin Logic"
        description="Discover project events with our Discord Events integration."
      />
      <Container className="py-10">
        <div className="mb-8">
          <GradientTitle>Project Events</GradientTitle>
          <Text size="xs" color="dimmed">
            We aggregate the data and present it to our viewers in a single place. You can filter the events by project,
            and date, easily participate, and share them with your social groups.
          </Text>
        </div>

        <div className="my-4">
          <ProjectsFilter description="Choose a project to narrow down your results." />
        </div>

        {eventsData && eventsData.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventsData?.map((event, index) => {
              return (
                <div key={`event_${index}`}>
                  <EventCard event={event} />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="py-10">
            <GrayBox>
              {eventsData
                ? 'The following project has no events or the events are not tracked.'
                : 'Looks like there are no events here.'}
            </GrayBox>
          </div>
        )}
        <div className="flex items-end justify-between gap-2">
          {pagination?.pages ? (
            <>
              <PaginationFilter pages={pagination?.pages as number} isLoading={isLoading} />
              <PerPageFilter />
            </>
          ) : null}
        </div>
      </Container>
    </>
  );
};

export default Events;
