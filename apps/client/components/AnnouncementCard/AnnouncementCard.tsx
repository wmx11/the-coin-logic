import { Spoiler, Text } from '@mantine/core';
import GradientButton from 'components/Buttons/GradientButton';
import Paper from 'components/Paper';
import { ProjectTitle } from 'components/ProjectTitle';
import SocialShare from 'components/SocialShare';
import { QUERY_ANNOUNCEMENT } from 'constants/general';
import { FC } from 'react';
import routes from 'routes';
import { DiscordAnnouncement } from 'tcl-packages/types';
import { formateDateWithHours } from 'utils/formatters';
import { Icons } from 'utils/icons';
import { addLinksToText } from 'utils/utils';

type AnnouncementCardProps = {
  announcement: DiscordAnnouncement;
};

const AnnouncementCard: FC<AnnouncementCardProps> = ({ announcement }) => {
  if (!announcement) {
    return null;
  }

  const { dateAdded, project, content, messageUrl, title, id } = announcement;

  const parsedContent = addLinksToText(content);

  return (
    <Paper className="mb-4" withBorder>
      <div className="border-b">
        <Text className="flex gap-2 items-center mb-2" weight={700} color="violet">
          {<Icons.Announcement />}
          {title}
        </Text>
        <Text size="xs" color="dimmed" className="mb-2">
          Added {formateDateWithHours(dateAdded)}
        </Text>
        <div>
          <ProjectTitle
            title={project?.name as string}
            avatar={project?.logo?.url || ''}
            size="sm"
            href={`${routes.project}/${project?.slug}`}
            component="a"
          />
        </div>
        <Text size="sm" className="my-4 whitespace-pre-wrap">
          <Spoiler showLabel="Show More" hideLabel="Hide" maxHeight={92}>
            <div dangerouslySetInnerHTML={{ __html: parsedContent }}></div>
          </Spoiler>
        </Text>
      </div>
      <div className="mt-4 flex justify-between">
        <SocialShare
          url={`${routes.base}${routes.announcements}?${QUERY_ANNOUNCEMENT}=${id}`}
          title={`Announcement from ${project?.name}: ${title}. Read it here:`}
          hashtag={project?.slug as string}
        />
        <GradientButton size="xs" component="a" target="__blank" href={messageUrl as string}>
          View in Discord
        </GradientButton>
      </div>
    </Paper>
  );
};

export default AnnouncementCard;
