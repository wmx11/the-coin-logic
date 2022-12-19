import { Pagination, PaginationTakePerPage } from 'hooks/usePagination';
import { getData } from '../getters';
import {
  GET_ANNOUNCEMENTS,
  GET_ANNOUNCEMENTS_BY_SLUG,
  GET_ANNOUNCEMENTS_HIGHLIGHTS,
  GET_ANNOUNCEMENT_BY_ID,
} from './constatnts/announcements';

export const getAnnouncements = async (pagination: PaginationTakePerPage) => {
  const { discordAnnouncements, discordAnnouncementsCount } = await getData({
    query: GET_ANNOUNCEMENTS,
    variables: { ...pagination },
    fetchPolicy: 'network-only',
  });
  return [discordAnnouncements, discordAnnouncementsCount] || null;
};

export const getAnnouncementsByProjectSlug = async (slug: string, pagination: Pagination) => {
  const { discordAnnouncements, discordAnnouncementsCount } = await getData({
    query: GET_ANNOUNCEMENTS_BY_SLUG,
    variables: { slug, ...pagination },
    fetchPolicy: 'network-only',
  });
  return [discordAnnouncements, discordAnnouncementsCount] || null;
};

export const getAnnouncementByAnnouncementId = async (id: string) => {
  const { discordAnnouncement } = await getData({
    query: GET_ANNOUNCEMENT_BY_ID,
    variables: { id },
    fetchPolicy: 'network-only',
  });
  return [discordAnnouncement] || null;
};

export const getAnnouncementsHighlights = async () => {
  const { discordAnnouncements } = await getData({
    query: GET_ANNOUNCEMENTS_HIGHLIGHTS,
    fetchPolicy: 'network-only',
  });
  return discordAnnouncements || null;
};
