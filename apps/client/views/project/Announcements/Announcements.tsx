import { ScrollArea, Spoiler, Text } from '@mantine/core';
import MoreLink from 'components/MoreLink';
import Paper from 'components/Paper';
import SocialShare from 'components/SocialShare';
import GradientTitle from 'components/Text/GradientTitle';
import { QUERY_ANNOUNCEMENT, QUERY_PROJECT } from 'constants/general';
import { FC } from 'react';
import routes from 'routes';
import { Project } from 'types';
import { formateDateWithHours } from 'utils/formatters';

type AnnouncementsProps = {
  data: Project;
};

const Announcements: FC<AnnouncementsProps> = ({ data }) => {
  const { announcements } = data;

  return (
    <Paper>
      <div className="flex items-center justify-between gap-2">
        <GradientTitle order={4}>Latest Announcements</GradientTitle>
        <MoreLink href={`${routes.announcements}?${QUERY_PROJECT}=${data.slug}`} />
      </div>
      <div className="my-4 p-3">
        {announcements && announcements.length ? (
          <ScrollArea style={{ height: 350 }} offsetScrollbars>
            {announcements.map((item, index) => {
              return (
                <div className="mb-4" key={`announcement_${index}`}>
                  <Text size="sm" weight={600}>
                    {item.title}
                  </Text>
                  <Text size="xs" color="dimmed">
                    {formateDateWithHours(item.dateAdded)}
                  </Text>
                  <Text size="xs" color="dimmed" className="whitespace-pre-wrap">
                    <Spoiler showLabel="Show More" hideLabel="Hide" maxHeight={40}>
                      {item.content}
                    </Spoiler>
                  </Text>
                  <SocialShare
                    url={`${routes.base}${routes.announcements}?${QUERY_ANNOUNCEMENT}=${item.id}`}
                    title={`Announcement from ${data?.name}: ${item.title}. Read it here:`}
                    hashtag={data?.slug as string}
                    size={18}
                  />
                </div>
              );
            })}
          </ScrollArea>
        ) : (
          <>
            <Text size="xs" color="dimmed">
              Looks like {data.name} has no announcements yet
            </Text>
          </>
        )}
      </div>

      <Text size="xs" color="dimmed">
        Announcements displayed here are taken from the {data.name} Discord server.
      </Text>
    </Paper>
  );
};

export default Announcements;
