import { Center, Container, Text } from '@mantine/core';
import axios from 'axios';
import GradientButton from 'components/Buttons/GradientButton';
import AreaChartGroup from 'components/Charts/AreaChartGroup';
import Meta from 'components/Meta';
import NotificationBar from 'components/NotificationBar';
import AuditsAndKyc from 'components/pages/project/AuditsAndKyc';
import Events from 'components/pages/project/Events';
import Markets from 'components/pages/project/Markets';
import RelatedProjects from 'components/pages/project/RelatedProjects';
import SocialAnalysisData from 'components/pages/project/SocialAnalysisData';
import TransactionVolume from 'components/pages/project/TransactionVolume';
import withRedisCache from 'data/withRedisCache';
import { GetServerSideProps } from 'next';
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from 'pages/api/auth/[...nextauth]';
import { ProjectRatings } from 'pages/api/project/get-rates';
import { FC, useEffect } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import routes from 'routes';
import useChartStore from 'store/useChartStore';
import { Tag } from 'types';
import { ProjectWithMarketStatsAndChanges } from 'types/Project';
import { Badges } from '../../components/Badges';
import { NotFound } from '../../components/NotFound';
import AboutProject from '../../components/pages/project/AboutProject';
import HoldersData from '../../components/pages/project/HoldersData';
import MarketData from '../../components/pages/project/MarketData';
import { ProjectTitle } from '../../components/ProjectTitle';
import TrackVitalsDisclaimer from '../../components/TrackVitalsDisclaimer';
import { getProjectAndMarketStatsBySlug } from '../../data/getters';

type ProjectProps = {
  projectData: ProjectWithMarketStatsAndChanges;
  isRatedToday: boolean;
  ratings: ProjectRatings;
};

const project: FC<ProjectProps> = ({ projectData, isRatedToday, ratings }) => {
  const chartStore = useChartStore((state) => state);
  const { project } = projectData;
  const { notifications } = project;

  if (!project) {
    return (
      <Container className="py-10 h-screen flex items-center justify-center">
        <Center>
          <NotFound />
        </Center>
      </Container>
    );
  }

  // Clear all charts data on unmount
  useEffect(() => () => chartStore.clearAll(), []);

  return (
    <>
      <Meta
        title={`${project.name} Price today, analytics, holders, charts | Coin Logic`}
        image={project.logo?.url}
        description={`Get the latest ${project.name} price, market cap, analytics, holders, charts from Coin Logic - The Trusted and Transparent DeFi Analytics Platform.`}
      />
      <div className="bg-zinc-50">
        <Container className="py-10">
          {notifications && (
            <div className="sticky top-[10px] z-[1]">
              {notifications?.map((notification, index) => (
                <NotificationBar notification={notification} key={`notification_${index}`} />
              ))}
            </div>
          )}

          <div className="w-full flex flex-wrap gap-4 mb-4 items-start justify-between">
            <div>
              <div className="w-full mb-4">
                <ProjectTitle title={project.name as string} size="md" avatar={project.logo ? project.logo.url : ''} />
                <div>
                  <Text color="dimmed" size="xs" className="mb-2">
                    Tags:
                  </Text>
                  <Badges isLimited={false} badges={project.tags as Tag[]} />
                </div>
              </div>

              <div className="flex gap-2 w-full md:w-auto">
                <GradientButton
                  component="a"
                  href={project.website as string}
                  target="_blank"
                  rightIcon={<FiExternalLink />}
                >
                  Website
                </GradientButton>
                <GradientButton
                  component="a"
                  href={project.whitepaper as string}
                  target="_blank"
                  rightIcon={<FiExternalLink />}
                >
                  Whitepaper
                </GradientButton>
              </div>

              {projectData.relatedProjects ? (
                <div className="my-8">
                  <RelatedProjects data={projectData} />
                </div>
              ) : null}
            </div>

            <div className="">
              <AuditsAndKyc project={project} />
            </div>
          </div>

          <div className="mb-4">
            <div className={`flex gap-4 flex-wrap md:flex-nowrap md:justify-between`}>
              <div className={`w-full md:w-[66%]`}>
                <AboutProject data={project} isRatedToday={isRatedToday} ratings={ratings} />
              </div>
              <div className="w-full md:w-[34%] flex flex-col gap-4">
                <Markets data={project} />
                <Events data={project} />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container className="py-10">
        <div className="my-16">
          <TransactionVolume data={projectData} />
        </div>

        <div className="my-16">
          <MarketData data={projectData} />
          <div className="my-4">{chartStore.chartSection === 'marketData' && <AreaChartGroup />}</div>
        </div>

        <div className="mb-16">
          <HoldersData data={projectData} />
          <div className="my-4">{chartStore.chartSection === 'holdersData' && <AreaChartGroup />}</div>
        </div>

        <div className="mb-16">
          <SocialAnalysisData data={projectData} />
          <div className="my-4">{chartStore.chartSection === 'socialMediaData' && <AreaChartGroup />}</div>
        </div>

        <TrackVitalsDisclaimer />
      </Container>
    </>
  );
};

export default project;

export const getServerSideProps: GetServerSideProps = async ({ req, res, params }) => {
  const slug = params?.slug;

  const session = await unstable_getServerSession(req, res, authOptions);

  const projectData = await withRedisCache(`projectData_${slug}`, () => getProjectAndMarketStatsBySlug(slug as string));

  if (!projectData) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const { data } = await axios.post(routes.api.project.rateCheck, {
    project: projectData.project,
    user: session,
  });

  const { data: rates } = await axios.post(routes.api.project.getRates, {
    project: projectData.project,
  });

  return {
    props: {
      projectData,
      isRatedToday: data.isRatedToday,
      ratings: rates.ratings,
    },
  };
};
