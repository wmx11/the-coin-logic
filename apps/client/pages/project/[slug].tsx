import { Button, Center, Container, Divider, Paper, Stack, Text } from '@mantine/core';
import { useScrollIntoView } from '@mantine/hooks';
import AreaChartGroup from 'components/Charts/AreaChartGroup';
import Meta from 'components/Meta';
import NotificationBar from 'components/NotificationBar';
import Events from 'components/pages/project/Events';
import Markets from 'components/pages/project/Markets';
import RelatedProjects from 'components/pages/project/RelatedProjects';
import TransactionVolume from 'components/pages/project/TransactionVolume';
import withRedisCache from 'data/withRedisCache';
import { FC, useEffect } from 'react';
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
};

const project: FC<ProjectProps> = ({ projectData }) => {
  const chartStore = useChartStore((state) => state);
  const { project } = projectData;
  const { notifications } = project;
  const { scrollIntoView: scrollMarket, targetRef: targetMarket } = useScrollIntoView<HTMLDivElement>({ offset: 60 });
  const { scrollIntoView: scrollHolders, targetRef: targetHolders } = useScrollIntoView<HTMLDivElement>({ offset: 60 });

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
            <div className="sticky top-[90px] z-[1]">
              {notifications?.map((notification, index) => (
                <NotificationBar notification={notification} key={`notification_${index}`} />
              ))}
            </div>
          )}

          <Paper p="md" shadow="sm" withBorder className="w-full flex flex-wrap gap-4 mb-4 items-center">
            <div className="md:max-w-[320px] w-full md:border-r mr-4">
              <ProjectTitle title={project.name as string} size="md" avatar={project.logo ? project.logo.url : ''} />
              <div>
                <Text color="dimmed" size="xs" className="mb-2">
                  Tags:
                </Text>
                <Badges badges={project.tags as Tag[]} />
              </div>
            </div>
            <div className="w-full md:w-auto">
              <Stack>
                <Button color="violet" variant="outline" onClick={() => scrollMarket({ alignment: 'center' })}>
                  View Market Data
                </Button>
                <Button color="violet" variant="outline" onClick={() => scrollHolders({ alignment: 'center' })}>
                  View Holders Data
                </Button>
              </Stack>
            </div>
          </Paper>

          <RelatedProjects data={projectData} />

          <div className="mb-4">
            <div className={`flex gap-4 flex-wrap md:flex-nowrap md:justify-between`}>
              <div className={`w-full md:w-[66%]`}>
                <AboutProject data={project} />
              </div>
              <div className={`w-full md:w-[34%]`}>
                <Markets data={project} />
                <div className="mt-4">
                  <Events data={project} />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container className="py-10">
        <div className="my-16">
          <TransactionVolume data={projectData} />
        </div>

        <div className="my-16" ref={targetMarket}>
          <MarketData data={projectData} />
          <div className="my-4">{chartStore.chartSection === 'marketData' && <AreaChartGroup />}</div>
        </div>

        <div className="mb-16" ref={targetHolders}>
          <HoldersData data={projectData} />
          <div className="my-4">{chartStore.chartSection === 'holdersData' && <AreaChartGroup />}</div>
        </div>

        <Divider />

        <TrackVitalsDisclaimer />
      </Container>
    </>
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
  const projectData = await withRedisCache(`projectData_${slug}`, () => getProjectAndMarketStatsBySlug(slug));

  return {
    props: {
      projectData,
    },
  };
};
