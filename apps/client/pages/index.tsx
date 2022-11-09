import CryptocurrenciesTable from 'components/CryptocurrenciesTable';
import { getTopCoins } from 'data/cryptoData/getters';
import withRedisCache from 'data/withRedisCache';
import useResetToken from 'hooks/useResetToken';
import type { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import useLoginFlowStore from 'store/useLoginFlowStore';
import { Content } from 'types';
import { CryptocurrencyDataResponse } from 'types/CryptocurrencyData';
import setRefCookie from 'utils/setRefCookie';
import { BlogPosts } from '../components/BlogPosts';
import { Hero } from '../components/Hero';
import { JoinOurCommunity } from '../components/JoinOurCommunity';
import { ProjectsTable } from '../components/ProjectsTable';
import TrackVitalsDisclaimer from '../components/TrackVitalsDisclaimer';
import { getBlogPosts, getProjectsCount, getProjectsForTable } from '../data/getters';

type HomeProps = {
  projects: [];
  projectsCount: number;
  blogPosts: Content[];
  topCoins: CryptocurrencyDataResponse[];
};

const Home: NextPage<HomeProps> = ({ projects, projectsCount, blogPosts, topCoins }) => {
  const [projectData, setProjectData] = useState({ projects: [], projectsCount: 0 });
  const { setResetPassword, setLogin } = useLoginFlowStore((state) => state);
  const { token } = useResetToken();

  const router = useRouter();
  const { query } = router;

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
    setProjectData((state) => ({ ...state, projects, projectsCount }));
  }, [projects]);

  return (
    <>
      <Hero />
      <ProjectsTable data={projectData.projects} projectsCount={projectData.projectsCount} />
      <CryptocurrenciesTable data={topCoins} />
      <JoinOurCommunity />
      <BlogPosts data={blogPosts} />
      <TrackVitalsDisclaimer />
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ({ res, query }) => {
  const projects = await withRedisCache('projects', getProjectsForTable);
  const topCoins = await withRedisCache('topCoins', getTopCoins, 10 * 60);
  const projectsCount = await withRedisCache('projectsCount', getProjectsCount);
  const blogPosts = await withRedisCache('blogPosts_homepage', () => getBlogPosts(8));
  setRefCookie({ res, query });

  return {
    props: {
      projects,
      projectsCount,
      blogPosts,
      topCoins,
    },
  };
};
