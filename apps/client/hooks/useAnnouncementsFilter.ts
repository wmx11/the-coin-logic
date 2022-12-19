import { PER_PAGE, QUERY_ANNOUNCEMENT, QUERY_PROJECT } from 'constants/general';
import {
  getAnnouncementByAnnouncementId,
  getAnnouncements,
  getAnnouncementsByProjectSlug,
} from 'data/getters/announcements';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { DiscordAnnouncement } from 'types';
import usePagination from './usePagination';

const useAnnouncementsFilter = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [announcements, setAnnouncements] = useState<DiscordAnnouncement[]>();
  const { setCount, getPagination, nextPage, perPage } = usePagination({ perPageCount: PER_PAGE });

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    if (!router.query[QUERY_PROJECT] && !router.query[QUERY_ANNOUNCEMENT]) {
      fetchAnnouncements();
    }

    if (router.query[QUERY_PROJECT] && !router.query[QUERY_ANNOUNCEMENT]) {
      getAnnouncementsBySlug(decodeURIComponent(router.query[QUERY_PROJECT] as string));
    }

    if (router.query[QUERY_ANNOUNCEMENT] && !router.query[QUERY_PROJECT]) {
      getAnnouncementById(decodeURIComponent(router.query[QUERY_ANNOUNCEMENT] as string));
    }
  }, [getPagination().page, perPage, router.isReady, router.query[QUERY_PROJECT], router.query[QUERY_ANNOUNCEMENT]]);

  const fetchAnnouncements = async () => {
    setIsLoading(true);
    const [data, count] = await getAnnouncements(getPagination());
    setAnnouncements(data);
    setCount(count);
    setIsLoading(false);
  };

  const getAnnouncementsBySlug = async (slug: string) => {
    setIsLoading(true);
    const [data, count] = await getAnnouncementsByProjectSlug(slug, getPagination());
    setAnnouncements(data);
    setCount(count);
    setIsLoading(false);
  };

  const getAnnouncementById = async (id: string) => {
    setIsLoading(true);
    const [data] = await getAnnouncementByAnnouncementId(id);
    setAnnouncements([data]);
    setIsLoading(false);
  };

  return {
    announcements,
    isLoading,
    pagination: getPagination(),
    nextPage,
    setCount,
    setAnnouncements,
    fetchAnnouncements,
    getAnnouncementsBySlug,
    getAnnouncementById,
  };
};

export default useAnnouncementsFilter;
