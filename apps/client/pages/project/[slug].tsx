import { Center, Container } from '@mantine/core';
import AddYourProject from 'components/AddYourProject';
import Meta from 'components/Meta';
import Paper from 'components/Paper';
import SubscribeToEmail from 'components/SubscribeToEmail';
import withRedisCache from 'data/redis';
import useUser from 'hooks/useUser';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import { FC, useEffect } from 'react';
import useChartStore from 'store/useChartStore';
import useThemeStore from 'store/useThemeStore';
import { ProjectWithMarketStatsAndChanges } from 'types/Project';
import toCurrency from 'utils/toCurrency';
import toLocaleString from 'utils/toLocaleString';
import Announcements from 'views/project/Announcements';
import AuditsAndKyc from 'views/project/AuditsAndKyc';
import Controls from 'views/project/Controls';
import Events from 'views/project/Events';
import Header from 'views/project/Header';
import Notifications from 'views/project/Header/Notifications';
import Markets from 'views/project/Markets';
import RelatedProjects from 'views/project/RelatedProjects';
import TransactionVolume from 'views/project/TransactionVolume';
import TransparencyScore from 'views/project/TransparencyScore';
import { NotFound } from '../../components/NotFound';
import TrackVitalsDisclaimer from '../../components/TrackVitalsDisclaimer';
import { getProjectAndMarketStatsBySlug } from '../../data/getters';
import AboutProject from '../../views/project/AboutProject';
import MarketData from '../../views/project/MarketData';
import BuyAndSellTokens from 'views/project/BuyAndSellTokens';

type ProjectProps = {
  projectData: ProjectWithMarketStatsAndChanges;
};

const project: FC<ProjectProps> = ({ projectData }) => {
  const { project } = projectData;

  const { displayTransparencyScore, displayBlogPosts, trackData, trackHolders, trackSocials, trackPrice, isNft } =
    project;

  if (!project) {
    return (
      <Container className="py-10 h-screen flex items-center justify-center">
        <Center>
          <NotFound />
        </Center>
      </Container>
    );
  }

  const theme = useThemeStore((state) => state.theme);
  const chartStore = useChartStore((state) => state);
  const { user } = useUser();

  const SocialAnalysisData = dynamic<any>(() => import('views/project/SocialAnalysisData'));
  const AreaChartGroup = dynamic<any>(() => import('components/Charts/AreaChartGroup'));
  const HoldersData = dynamic<any>(() => import('../../views/project/HoldersData'));
  const Articles = dynamic<any>(() => import('views/project/Articles'));
  const Transcriptions = dynamic<any>(() => import('views/project/Transcriptions'));
  const Interactions = dynamic<any>(() => import('views/project/Interactions'));

  // Clear all charts data on unmount
  useEffect(() => {
    if (!isNft) {
      chartStore.fetchChartData({ entry: 'price', projectId: project.id, section: 'marketData' });
    }
    return () => chartStore.clearAll();
  }, []);

  const changeText =
    (isNft ? projectData?.avgPriceChange24Percentage ?? 0 : projectData?.priceChange24Percentage ?? 0) >= 0
      ? 'up'
      : 'down';

  const metaDescription = isNft
    ? `${project?.name} average price today is ${toLocaleString(projectData?.avgPrice || 0)} ${
        project?.network?.symbol || ''
      }. Average price is ${changeText} ${toLocaleString(
        projectData?.avgPriceChange24Percentage || 0,
      )}% in the last 24 hours. It has a market cap of ${toLocaleString(projectData?.marketCap || 0)} ${
        project?.network?.symbol || ''
      }.`
    : `${project?.name} price today is ${toCurrency((projectData.price as number) || 0)}. ${
        project?.name
      } price is ${changeText} ${toLocaleString(
        projectData?.priceChange24Percentage || 0,
      )}% in the last 24 hours. It has a market cap of ${toLocaleString(projectData?.marketCap || 0)}.`;

  return (
    <>
      <Meta
        title={`${project.name} Live Price Chart, News, Analytics | Coin Logic`}
        image={project.logo?.url}
        description={metaDescription}
      />
      <div className={theme === 'light' ? 'bg-zinc-50' : ''}>
        <Container className="pb-10">
          <Notifications project={project} />
          {user && user?.projects?.find((item) => item.id === project.id) ? (
            <div className="mb-4">
              <Controls data={projectData} />
            </div>
          ) : null}

          <div className="w-full flex flex-col lg:flex-row gap-4 mb-4 items-start justify-between">
            <div className="flex-1">
              <Header project={project} data={projectData} />

              {projectData.relatedProjects && projectData.relatedProjects.length > 0 ? (
                <Paper className="mb-4">
                  <RelatedProjects data={projectData} />
                </Paper>
              ) : null}

              {displayTransparencyScore ? (
                <div className="flex gap-4 flex-wrap md:flex-nowrap md:justify-between">
                  <div className="w-full md:w-[66%]">
                    <TransparencyScore data={project} />
                  </div>
                  <div className="w-full md:w-[34%]">
                    <AuditsAndKyc project={project} />
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          <div className="mb-4">
            <div className="flex gap-4 flex-wrap md:flex-nowrap md:justify-between">
              <div className="w-full md:w-[66%]">
                <AboutProject data={project} />
              </div>
              <div className="w-full md:w-[34%] flex flex-col gap-4">
                <Markets data={project} />
                <BuyAndSellTokens data={project} />
                <Announcements data={project} />
                <Events data={project} />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container className="py-10">
        {(trackData || trackPrice) && chartStore.isInitial ? (
          <div className="my-4">{chartStore.chartSection === 'marketData' && <AreaChartGroup />}</div>
        ) : null}

        {trackData && !isNft ? (
          <div className="my-16">
            <TransactionVolume data={projectData} />
          </div>
        ) : null}

        {trackData ? (
          <>
            <div className="my-16">
              <MarketData data={projectData} />
            </div>
            {!chartStore.isInitial ? (
              <div className="my-4">{chartStore.chartSection === 'marketData' && <AreaChartGroup />}</div>
            ) : null}
          </>
        ) : null}

        {trackHolders ? (
          <div className="mb-16">
            <HoldersData data={projectData} />
            <div className="my-4">{chartStore.chartSection === 'holdersData' && <AreaChartGroup />}</div>
          </div>
        ) : null}

        {trackSocials ? (
          <div className="mb-16">
            <SocialAnalysisData data={projectData} />
            <div className="my-4">{chartStore.chartSection === 'socialMediaData' && <AreaChartGroup />}</div>
          </div>
        ) : null}

        {displayBlogPosts ? (
          <div className="my-16">
            <Articles data={project} />
          </div>
        ) : null}

        <div className="mb-16">
          <Transcriptions data={projectData} />
        </div>

        <div className="mb-16">
          <Interactions data={projectData} />
        </div>
      </Container>
      <SubscribeToEmail />
      <AddYourProject />
      <TrackVitalsDisclaimer />
    </>
  );
};

export default project;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slug = params?.slug;
  const projectData = await withRedisCache(`projectData_${slug}`, () => getProjectAndMarketStatsBySlug(slug as string));

  return {
    props: {
      projectData,
    },
  };
};
