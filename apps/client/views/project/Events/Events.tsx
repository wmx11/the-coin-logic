import { ScrollArea, Spoiler, Text } from '@mantine/core';
import GradientButton from 'components/Buttons/GradientButton';
import MoreLink from 'components/MoreLink';
import Paper from 'components/Paper';
import SocialShare from 'components/SocialShare';
import GradientText from 'components/Text/GradientText';
import GradientTitle from 'components/Text/GradientTitle';
import { QUERY_EVENT, QUERY_PROJECT } from 'constants/general';
import Image from 'next/image';
import EventPlaceholder from 'public/images/event_placeholder.png';
import { FC } from 'react';
import routes from 'routes';
import { Project } from 'types';
import { getStartsIn, hasEventEnded } from 'utils/events';
import { formatDate, formateDateWithHours } from 'utils/formatters';

type EventsProps = {
  data: Project;
};

const Events: FC<EventsProps> = ({ data }) => {
  return (
    <div>
      <Paper>
        <div className="flex items-center justify-between gap-2">
          <GradientTitle order={4}>Upcoming Events</GradientTitle>
          <MoreLink href={`${routes.events}?${QUERY_PROJECT}=${data.slug}`} />
        </div>

        <div className="my-4 p-3">
          {data.events?.length ? (
            <ScrollArea style={{ height: 350 }} offsetScrollbars>
              {data.events?.map((event, index) => {
                const hasEnded = hasEventEnded({
                  startDate: event.scheduledStartTimestamp,
                  endDate: event.scheduledEndTimestamp,
                });
                return (
                  <div className="mb-4" key={`event_${index}`}>
                    <div className="my-2 rounded-md overflow-hidden">
                      <Image
                        src={(event.image as string) || EventPlaceholder}
                        width={400}
                        height={160}
                        layout="responsive"
                      />
                    </div>
                    <div className="flex justify-between items-center gap-4">
                      <GradientText className="flex-1" weight={700}>
                        {event.name}
                      </GradientText>
                      <Text className="flex-1" size="xs" align="right">
                        {hasEnded ? null : formateDateWithHours(event.scheduledStartTimestamp)}
                        <Text color={hasEnded ? 'red' : 'green'}>
                          {hasEnded
                            ? 'Ended'
                            : getStartsIn({
                                startDate: event.scheduledStartTimestamp,
                                endDate: event.scheduledEndTimestamp,
                              })}
                        </Text>
                      </Text>
                    </div>
                    <Text size="xs" color="dimmed">
                      <Spoiler maxHeight={95} showLabel="Show more" hideLabel="Hide">
                        <div dangerouslySetInnerHTML={{ __html: event.description as string }}></div>
                      </Spoiler>
                    </Text>
                    {event.location ? (
                      <>
                        <GradientText>Where: {event.location}</GradientText>
                      </>
                    ) : (
                      <>
                        <GradientText>Where: {event.guildName}</GradientText>
                        <Text size="xs" color="dimmed">
                          Channel: {event.channelName}
                        </Text>
                      </>
                    )}

                    {hasEnded ? null : (
                      <GradientButton
                        size="xs"
                        fullWidth
                        className="my-4"
                        component="a"
                        href={event.inviteUrl as string}
                        target="__blank"
                      >
                        Participate
                      </GradientButton>
                    )}
                    <SocialShare
                      url={`${routes.base}${routes.events}?${QUERY_EVENT}=${event.id}`}
                      title={`Don't miss this ${event?.project?.name} event! ${event.name}. Start date: ${formatDate(
                        event.scheduledStartTimestamp,
                      )} More details here:`}
                      hashtag={data?.slug as string}
                      size={20}
                    />
                  </div>
                );
              })}
            </ScrollArea>
          ) : (
            <>
              <Text size="xs" color="dimmed">
                There are no scheduled events for {data.name}
              </Text>
            </>
          )}
        </div>

        <Text size="xs" color="dimmed">
          Events displayed here are taken from the {data.name} Discord server.
        </Text>
      </Paper>
    </div>
  );
};

export default Events;
