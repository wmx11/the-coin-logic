import { Container } from '@mantine/core';
import { getTopCoins } from 'data/cryptocurrency/getters';
import { getAnnouncementsHighlights } from 'data/getters/announcements';
import { getEventsHighlights } from 'data/getters/events';
import { getTrendingProjects } from 'data/getters/server/getTrendingProjects';
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
import { getBlogPosts, getProjectsCount, getProjectsForTable } from '../data/getters';

type HomeProps = {
  projects: [];
  projectsCount: number;
  blogPosts: Content[];
  topCoins: CryptocurrencyDataResponse[];
  highlights: {
    eventsHighlights: DiscordEvent[];
    announcementsHighlights: DiscordAnnouncement[];
  } & TrendingHighlights;
};

const Home: NextPage<HomeProps> = ({ projects, projectsCount, blogPosts, topCoins, highlights }) => {
  const router = useRouter();
  const { setResetPassword, setLogin } = useLoginFlowStore((state) => state);
  const { token } = useResetToken();
  const { query } = router;

  const Highlights = dynamic<any>(() => import('views/home/Highlights'));
  const CryptocurrenciesTable = dynamic<any>(() => import('components/CryptocurrenciesTable'));
  const JoinOurCommunity = dynamic<any>(
    () => import('../components/JoinOurCommunity').then((mod) => mod.JoinOurCommunity),
    {
      ssr: false,
    },
  );
  const SubscribeToEmail = dynamic<any>(() => import('components/SubscribeToEmail'), { ssr: false });
  const TrackVitalsDisclaimer = dynamic<any>(() => import('../components/TrackVitalsDisclaimer'), { ssr: false });

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
      <ProjectsTable data={projects} projectsCount={projectsCount} />
      <CryptocurrenciesTable data={topCoins} />
      <JoinOurCommunity />
      <Container>
        <ContentCardsCollection data={blogPosts} />
      </Container>
      <SubscribeToEmail />
      <TrackVitalsDisclaimer />
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ({ res, query }) => {
  const [projects, projectsCount, blogPosts, topCoins, eventsHighlights, announcementsHighlights, trendingHighlights] =
    await Promise.all([
      withRedisCache('projects', getProjectsForTable),
      withRedisCache('projectsCount', getProjectsCount),
      withRedisCache('blogPosts_homepage', () =>
        getBlogPosts({ take: 6, skip: 0, limit: 0, count: 0, isLastPage: false, page: 0, pages: 0 }),
      ),
      withRedisCache('topCoins', getTopCoins, 10 * 60),
      getEventsHighlights(),
      getAnnouncementsHighlights(),
      withRedisCache('trending_projects', () => getTrendingProjects(5), 10 * 60),
    ]);

  setRefCookie({ res, query });

  return {
    props: {
      projects,
      projectsCount,
      blogPosts: blogPosts[0],
      topCoins,
      highlights: {
        eventsHighlights,
        announcementsHighlights,
        trendingHighlights,
      },
    },
  };
};
