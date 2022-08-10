import React, { FC } from 'react';
import { Center, Container, Divider, Grid, Text } from '@mantine/core';
import { Badges } from '../../components/Badges';
import AboutProject from '../../components/pages/project/AboutProject';
import Announcements from '../../components/pages/project/Announcements';
import HoldersData from '../../components/pages/project/HoldersData';
import MarketData from '../../components/pages/project/MarketData';
import SocialAnalysisData from '../../components/pages/project/SocialAnalysisData';
import { ProjectTitle } from '../../components/ProjectTitle';
import TrackVitalsDisclaimer from '../../components/TrackVitalsDisclaimer';
import { getProjectTypeBySlug } from '../../data/getters/getters';
import { NotFound } from '../../components/NotFound';
import { Tag } from 'types';
import { ProjectWithMarketStatsAndChanges } from 'types/Project';
import useMobileScreen from 'hooks/useMobileScreen';

type ProjectProps = {
  projectData: ProjectWithMarketStatsAndChanges;
};

const project: FC<ProjectProps> = ({ projectData }) => {
  const { isMobileScreen } = useMobileScreen();

  if (!projectData) {
    return (
      <Container className="py-10 h-screen flex items-center justify-center">
        <Center>
          <NotFound />
        </Center>
      </Container>
    );
  }

  const { project } = projectData;

  return (
    <Container className="py-10">
      <div className="flex justify-between mb-8">
        <div>
          <ProjectTitle title={project.name as string} size="md" avatar={project.logo ? project.logo.url : ''} />
          <div>
            <Text color="dimmed" size="xs" className="mb-2">
              Tags:
            </Text>
            <Badges badges={project.tags as Tag[]} />
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className={`flex gap-4 flex-wrap md:flex-nowrap`}>
          <div className={`w-full md:w-[69%]`}>
            <AboutProject data={project} />
          </div>
          <div className={`w-full md:w-[29%]`}>
            <Announcements />
          </div>
        </div>
      </div>

      <div className="my-16">
        <MarketData data={projectData} />
      </div>

      <div className="mb-16">
        <HoldersData />
      </div>

      {/* <div className="mb-16">
        <SocialAnalysisData />
      </div> */}

      <Divider />

      <TrackVitalsDisclaimer />
    </Container>
  );
};

export default project;

type Params = {
  params: {
    slug: string;
  };
};

export const getServerSideProps = async ({ params }: Params) => {
  const slug = params.slug;
  const projectData = await getProjectTypeBySlug(slug);

  return {
    props: {
      projectData,
    },
  };
};
