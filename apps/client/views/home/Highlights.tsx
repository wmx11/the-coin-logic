import { Text } from '@mantine/core';
import { SmallBackgroundWrapper } from 'components/BackgroundWrapper/BackgroundWrapper';
import HighlightCard from 'components/HighlightCard';
import { HighlightCardItem } from 'components/HighlightCard/HighlightCard';
import TrendingProjectsHighlights from 'components/HighlightCard/TrendingProjectsHighlights';
import UpcomingProjectsHighlights from 'components/HighlightCard/UpcomingProjectsHighlights';
import GradientTitle from 'components/Text/GradientTitle';
import { QUERY_PROJECT } from 'constants/general';
import Link from 'next/link';
import { FC } from 'react';
import routes from 'routes';
import { DiscordAnnouncement, DiscordEvent } from 'types';
import { TrendingHighlights } from 'types/Project';
import { formateDateWithHours } from 'utils/formatters';
import { Icons } from 'utils/icons';

type HighlightsProps = {
  highlights: {
    eventsHighlights: DiscordEvent[];
    announcementsHighlights: DiscordAnnouncement[];
  } & TrendingHighlights;
};

const Highlights: FC<HighlightsProps> = ({ highlights }) => {
  return (
    <SmallBackgroundWrapper containerSize="xl">
      <GradientTitle order={2} className="mb-4">
        Recent Highlights
      </GradientTitle>
      <div className="flex flex-wrap gap-4">
        <TrendingProjectsHighlights trendingHighlights={highlights.trendingHighlights} />
        <UpcomingProjectsHighlights />

        <HighlightCard title="Upcoming Events" icon={<Icons.Event />} moreLink={routes.events}>
          {highlights?.eventsHighlights?.length ? (
            highlights.eventsHighlights.map((event, index) => {
              const Content = () => {
                return (
                  <Link href={`${routes.events}?${QUERY_PROJECT}=${event.project?.slug}`}>
                    <a>
                      <Text weight={600}>{event.name}</Text>
                      <Text size="xs" color="dimmed">
                        {formateDateWithHours(event.scheduledStartTimestamp)}
                      </Text>
                      <Text size="xs" color="dimmed">
                        {event?.project?.name}
                      </Text>
                    </a>
                  </Link>
                );
              };
              return <HighlightCardItem index={index + 1} key={`events_highlight_${index}`} content={<Content />} />;
            })
          ) : (
            <Text size="xs" color="dimmed">
              There are no upcoming events
            </Text>
          )}
        </HighlightCard>
        <HighlightCard title="Latest Announcements" icon={<Icons.Announcement />} moreLink={routes.announcements}>
          {highlights?.announcementsHighlights?.length ? (
            highlights.announcementsHighlights.map((announcement, index) => {
              const Content = () => {
                return (
                  <Link href={`${routes.announcements}?${QUERY_PROJECT}=${announcement.project?.slug}`}>
                    <a>
                      <Text weight={600}>{announcement?.title}</Text>
                      <Text size="xs" color="dimmed">
                        {formateDateWithHours(announcement.dateAdded)}
                      </Text>
                      <Text size="xs" color="dimmed">
                        {announcement?.project?.name}
                      </Text>
                    </a>
                  </Link>
                );
              };
              return (
                <HighlightCardItem index={index + 1} key={`announcement_highlight_${index}`} content={<Content />} />
              );
            })
          ) : (
            <Text size="xs" color="dimmed">
              There are no latest announcements
            </Text>
          )}
        </HighlightCard>
      </div>
    </SmallBackgroundWrapper>
  );
};

export default Highlights;
