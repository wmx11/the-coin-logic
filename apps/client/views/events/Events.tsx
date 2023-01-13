import { Container, Text } from '@mantine/core';
import { SmallBackgroundWrapper } from 'components/BackgroundWrapper/BackgroundWrapper';
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
        title="Cryptocurrency, DeFi & NFT Projects' Events | Coin Logic"
        description="Stay up to date and track events of cryptocurrency, DeFi, and NFT projects listed on TheCoinLogic."
      />
      <SmallBackgroundWrapper>
        <div className="text-center">
          <GradientTitle>Projects' Events</GradientTitle>
          <Text size="sm" color="dimmed">
            We aggregate the data and present it to our viewers in a single place. You can filter the events by project,
            and date, easily participate, and share them with your social groups.
          </Text>
        </div>
      </SmallBackgroundWrapper>
      <Container className="py-10">
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
            <GrayBox>Looks like there are no events here 😮</GrayBox>
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
