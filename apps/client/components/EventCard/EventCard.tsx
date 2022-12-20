import { Spoiler, Text } from '@mantine/core';
import GradientButton from 'components/Buttons/GradientButton';
import Paper from 'components/Paper';
import { ProjectTitle } from 'components/ProjectTitle';
import SocialShare from 'components/SocialShare';
import GradientText from 'components/Text/GradientText';
import { QUERY_EVENT } from 'constants/general';
import Image from 'next/image';
import EventPlaceholder from 'public/images/event_placeholder.png';
import { FC } from 'react';
import { HiUserGroup } from 'react-icons/hi';
import { IoLocationSharp } from 'react-icons/io5';
import routes from 'routes';
import { DiscordEvent } from 'tcl-packages/types';
import { getStartsIn, hasEventEnded } from 'utils/events';
import { formatDate, formateDateWithHours } from 'utils/formatters';
import { Icons } from 'utils/icons';

type EventCardProps = {
  event: DiscordEvent;
};

const EventCard: FC<EventCardProps> = ({ event }) => {
  const hasEnded = hasEventEnded(event);

  return (
    <Paper withBorder className={hasEnded ? 'border-red-500' : 'border-green-500'}>
      <div className="flex justify-between gap-2 p-2">
        <div className="flex-1">
          <Text size="xs" color={hasEnded ? 'red' : 'teal'} className="flex items-center gap-2">
            <Icons.Event />
            {hasEnded ? 'Ended' : getStartsIn(event)}
          </Text>
          <GradientText weight={700} size="xl">
            {event.name}
          </GradientText>
          <Text size="xs">Start Date: {formateDateWithHours(event.scheduledStartTimestamp)}</Text>
          <Text size="xs" className="mb-2">
            {event.guildName}
          </Text>
          <ProjectTitle
            title={event?.project?.name as string}
            size="sm"
            avatar={event?.project?.logo?.url as string}
            component="a"
            href={`${routes.project}/${event?.project?.slug}`}
          />
        </div>
        <div className="flex-1 rounded-md overflow-hidden">
          <Image src={(event.image as string) || EventPlaceholder} width={200} height={100} layout="responsive" />
        </div>
      </div>
      <div className="p-2 border-b">
        <Text size="xs" color="dimmed">
          <Spoiler maxHeight={95} showLabel="Show more" hideLabel="Hide">
            {event.description}
          </Spoiler>
        </Text>
      </div>
      <div className="flex justify-between items-center p-2 border-b">
        <div>
          {event.location ? (
            <Text color="dimmed" className="flex gap-2 items-center">
              <IoLocationSharp />
              {event.location}
            </Text>
          ) : (
            <Text color="dimmed" className="flex gap-2 items-center">
              <HiUserGroup />
              {event.channelName}
            </Text>
          )}
        </div>
        {hasEnded ? null : (
          <div className="mt-2">
            <GradientButton component="a" href={event.inviteUrl as string} target="_blank">
              Participate
            </GradientButton>
          </div>
        )}
      </div>
      <div className="pt-4">
        <SocialShare
          url={`${routes.base}${routes.events}?${QUERY_EVENT}=${event?.id}`}
          title={`Don't miss this ${event?.project?.name} event! ${event.name}. Start date: ${formatDate(
            event.scheduledStartTimestamp,
          )} More details here:`}
          hashtag={event?.project?.slug as string}
        />
      </div>
    </Paper>
  );
};

export default EventCard;
