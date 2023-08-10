import { Container } from '@mantine/core';
import AddYourProject from 'components/AddYourProject';
import { getAnnouncementsHighlights } from 'data/getters/announcements';
import { getEventsHighlights } from 'data/getters/events';
import {
  getNftProjectsForTable,
  getProjectsForTable,
  getTrendingProjects
} from 'data/getters/server/projects';
import withRedisCache from 'data/redis';
import useResetToken from 'hooks/useResetToken';
import type { GetServerSideProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';
import useLoginFlowStore from 'store/useLoginFlowStore';
import { Content, DiscordAnnouncement, DiscordEvent } from 'types';
import { CryptocurrencyDataResponse } from 'types/CryptocurrencyData';
import { TrendingHighlights } from 'types/Project';
import setRefCookie from 'utils/setRefCookie';
import { ContentCardsCollection } from '../components/ContentCollection';
import { Hero } from '../components/Hero';
import { ProjectsTable } from '../components/ProjectsTable';
import { getBlogPosts } from '../data/getters';

type HomeProps = {
  projects: [];
  nftProjects: [];
  blogPosts: Content[];
  highlights: {
    eventsHighlights: DiscordEvent[];
    announcementsHighlights: DiscordAnnouncement[];
  } & TrendingHighlights;
};

const Home: NextPage<HomeProps> = ({ projects, nftProjects, blogPosts, highlights }) => {
  const router = useRouter();
  const { setResetPassword, setLogin } = useLoginFlowStore((state) => state);
  const { token } = useResetToken();
  const { query } = router;

  const Highlights = dynamic<any>(() => import('views/home/Highlights'));

  const NFTProjectsTable = dynamic<any>(() => import('components/ProjectsTable/NFTProjectsTable'), {
    ssr: false,
  });

  const TrackVitalsDisclaimer = dynamic<any>(() => import('../components/TrackVitalsDisclaimer'), {
    ssr: false,
  });

  const openLogInOrPasswordResetModal = useCallback(() => {
    if (query.signIn) {
      return setLogin(true);
    }

    if (token) {
      return setResetPassword(true);
    }

    return null;
  }, []);

  useEffect(() => {
    openLogInOrPasswordResetModal();
  }, []);

  return (
    <>
      <Hero />
      <Highlights highlights={highlights} />
      <ProjectsTable data={projects} />
      <NFTProjectsTable projects={nftProjects} />
      <Container>
        <ContentCardsCollection data={blogPosts} />
      </Container>
      <TrackVitalsDisclaimer />
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ({ res, query }) => {
  const [
    projects,
    nftProjects,
    blogPosts,
    eventsHighlights,
    announcementsHighlights,
    trendingHighlights,
  ] = await Promise.all([
    withRedisCache('projects', getProjectsForTable),
    withRedisCache('projects_nft', getNftProjectsForTable),
    withRedisCache('blogPosts_homepage', () =>
      getBlogPosts({ take: 6, skip: 0, limit: 0, count: 0, isLastPage: false, page: 0, pages: 0 }),
    ),
    getEventsHighlights(),
    getAnnouncementsHighlights(),
    withRedisCache('trending_projects', () => getTrendingProjects(), 10 * 60),
  ]);

  setRefCookie({ res, query });

  return {
    props: {
      projects,
      nftProjects: nftProjects,
      blogPosts: blogPosts[0],
      highlights: {
        eventsHighlights,
        announcementsHighlights,
        trendingHighlights,
      },
    },
  };
};
