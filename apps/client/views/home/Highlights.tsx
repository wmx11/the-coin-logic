import { Container, Text } from '@mantine/core';
import HighlightCard from 'components/HighlightCard';
import { HighlightCardItem } from 'components/HighlightCard/HighlightCard';
import { ProjectTitle } from 'components/ProjectTitle';
import GradientText from 'components/Text/GradientText';
import { Trend } from 'components/Trend';
import { QUERY_PROJECT } from 'constants/general';
import Link from 'next/link';
import React, { FC } from 'react';
import routes from 'routes';
import { DiscordAnnouncement, DiscordEvent } from 'types';
import { formateDateWithHours } from 'utils/formatters';
import { Icons } from 'utils/icons';
import toLocaleString from 'utils/toLocaleString';

type HighlightsProps = {
  highlights: {
    eventsHighlights: DiscordEvent[];
    announcementsHighlights: DiscordAnnouncement[];
    trendingHighlights: { name: string; slug: string; logo: string; change: number; votes: number }[];
  };
};

const Highlights: FC<HighlightsProps> = ({ highlights }) => {
  return (
    <div className="bg-zinc-50">
      <Container className="py-10 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <HighlightCard title="Trending" icon={<Icons.Fire />} moreLink={routes.projects}>
            {highlights?.trendingHighlights?.length ? (
              highlights.trendingHighlights.map(({ name, change, logo, slug, votes }, index) => {
                const Content = () => {
                  return (
                    <div className="flex justify-between items-center w-full">
                      <ProjectTitle
                        title={name}
                        avatar={logo}
                        size="sm"
                        component="a"
                        href={`${routes.project}/${slug}`}
                      />
                      <div className="text-right">
                        <Trend inline={true} previousValue={{ change, percentage: change }} />
                        <GradientText size="xs" color="dimmed">
                          +{toLocaleString(votes || 0) || 0} votes
                        </GradientText>
                      </div>
                    </div>
                  );
                };
                return <HighlightCardItem index={index + 1} key={`project_highlight_${index}`} content={<Content />} />;
              })
            ) : (
              <Text size="xs" color="dimmed">
                There are no trending projects
              </Text>
            )}
          </HighlightCard>
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
      </Container>
    </div>
  );
};

export default Highlights;
