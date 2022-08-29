import useResetToken from 'hooks/useResetToken';
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

import { useCallback, useEffect, useState } from 'react';
import useLoginFlowStore from 'store/useLoginFlowStore';
import { Content } from 'types';
import setRefCookie from 'utils/setRefCookie';
import { BlogPosts } from '../components/BlogPosts';
import { Hero } from '../components/Hero';
import { JoinOurCommunity } from '../components/JoinOurCommunity';
import { ProjectsTable } from '../components/ProjectsTable';
import TrackVitalsDisclaimer from '../components/TrackVitalsDisclaimer';
import { getBlogPosts, getProjectsCount, getProjectsForHomepageList } from '../data/getters';

type HomeProps = {
  projects: [];
  projectsCount: number;
  blogPosts: Content[];
};

const Home: NextPage<HomeProps> = ({ projects, projectsCount, blogPosts }) => {
  const { token } = useResetToken();
  const [projectData, setProjectData] = useState({ projects: [], projectsCount: 0 });
  const { setResetPassword } = useLoginFlowStore((state) => state);

  const openResetPasswordModalForResetToken = useCallback(() => {
    if (!token) {
      return null;
    }

    setResetPassword(true);
  }, []);

  useEffect(() => {
    openResetPasswordModalForResetToken();
    setProjectData((state) => ({ ...state, projects, projectsCount }));
  }, [projects]);

  return (
    <div>
      <div>
        <Hero />
        <ProjectsTable data={projectData.projects} projectsCount={projectData.projectsCount} />
        <JoinOurCommunity />
        <BlogPosts data={blogPosts} />
        <TrackVitalsDisclaimer />
      </div>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ({ res, query }) => {
  const projects = await getProjectsForHomepageList();
  const projectsCount = await getProjectsCount();
  const blogPosts = await getBlogPosts(8);
  setRefCookie({ res, query });

  return {
    props: {
      projects,
      projectsCount,
      blogPosts,
    },
  };
};
