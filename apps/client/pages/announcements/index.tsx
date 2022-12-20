import { PER_PAGE, QUERY_ANNOUNCEMENT, QUERY_PROJECT } from 'constants/general';
import {
  getAnnouncementByAnnouncementId,
  getAnnouncements,
  getAnnouncementsByProjectSlug,
} from 'data/getters/announcements';
import { GetServerSideProps } from 'next';
import { FC } from 'react';
import { DiscordAnnouncement } from 'tcl-packages/types';
import Announcements from 'views/announcements/Announcements';

type AnnouncementsPageProps = {
  announcements: DiscordAnnouncement[];
  count: number;
};

const AnnouncementsPage: FC<AnnouncementsPageProps> = ({ announcements, count }) => {
  return <Announcements announcements={announcements} count={count} />;
};

export default AnnouncementsPage;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const getter = () => {
    if (query[QUERY_PROJECT]) {
      return getAnnouncementsByProjectSlug(query[QUERY_PROJECT] as string, {
        take: PER_PAGE,
        count: 0,
        isLastPage: false,
        limit: 0,
        page: 1,
        pages: 0,
        skip: 0,
      });
    }

    if (query[QUERY_ANNOUNCEMENT]) {
      return getAnnouncementByAnnouncementId(query[QUERY_ANNOUNCEMENT] as string);
    }

    return getAnnouncements({ take: PER_PAGE });
  };

  const [announcements, announcementsCount] = await getter();

  return {
    props: {
      announcements,
      count: announcementsCount || null,
    },
  };
};
