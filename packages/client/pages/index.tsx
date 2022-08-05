import type { NextPage } from 'next';
import Head from 'next/head';

import Hero from '../components/Hero/Hero';
import { ProjectsTable } from '../components/ProjectsTable';
import JoinOurCommunity from '../components/JoinOurCommunity';
import BlogPosts from '../components/BlogPosts';
import TrackVitalsDisclaimer from '../components/TrackVitalsDisclaimer';
import { getProjectsCount, getProjectsForHomepageList } from '../data/getters';
import { MarketDataWithChangeAndProjectTypes } from '../types/MarketData';

type HomeProps = {
  projects: MarketDataWithChangeAndProjectTypes[];
  projectsCount: number;
};

const Home: NextPage<HomeProps> = ({ projects, projectsCount }) => {
  return (
    <div>
      <Head>
        <title>TCL</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Hero />
        <ProjectsTable data={projects} projectsCount={projectsCount} />
        <JoinOurCommunity />
        <BlogPosts />
        <TrackVitalsDisclaimer />
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const projects = await getProjectsForHomepageList();
  const projectsCount = await getProjectsCount();

  return {
    props: {
      projects,
      projectsCount,
    },
    revalidate: 5,
  };
};
