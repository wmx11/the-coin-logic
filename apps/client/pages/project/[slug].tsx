import { Center, Container, Text } from '@mantine/core';
import GradientButton from 'components/Buttons/GradientButton';
import Meta from 'components/Meta';
import NotificationBar from 'components/NotificationBar';
import Paper from 'components/Paper';
import PaymentPlanBadge from 'components/PaymentPlans/PaymentPlanBadge';
import SubscribeToEmail from 'components/SubscribeToEmail';
import GradientText from 'components/Text/GradientText';
import GradientTitle from 'components/Text/GradientTitle';
import { Trend } from 'components/Trend';
import withRedisCache from 'data/redis';
import useUser from 'hooks/useUser';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import { FC, useEffect } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import useChartStore from 'store/useChartStore';
import { PaymentPlan, Tag } from 'types';
import { ProjectWithMarketStatsAndChanges } from 'types/Project';
import toCurrency from 'utils/toCurrency';
import Announcements from 'views/project/Announcements';
import AuditsAndKyc from 'views/project/AuditsAndKyc';
import Controls from 'views/project/Controls';
import Events from 'views/project/Events';
import Markets from 'views/project/Markets';
import RelatedProjects from 'views/project/RelatedProjects';
import TransactionVolume from 'views/project/TransactionVolume';
import TransparencyScore from 'views/project/TransparencyScore';
import { Badges } from '../../components/Badges';
import { NotFound } from '../../components/NotFound';
import { ProjectTitle } from '../../components/ProjectTitle';
import TrackVitalsDisclaimer from '../../components/TrackVitalsDisclaimer';
import { getProjectAndMarketStatsBySlug } from '../../data/getters';
import AboutProject from '../../views/project/AboutProject';
import MarketData from '../../views/project/MarketData';

type ProjectProps = {
  projectData: ProjectWithMarketStatsAndChanges;
};

const project: FC<ProjectProps> = ({ projectData }) => {
  const chartStore = useChartStore((state) => state);

  const { project } = projectData;

  const {
    notifications,
    displayTransparencyScore,
    displayBlogPosts,
    trackData,
    trackHolders,
    trackSocials,
    trackPrice,
    trackMarketCap,
  } = project;

  const { user } = useUser();

  if (!project) {
    return (
      <Container className="py-10 h-screen flex items-center justify-center">
        <Center>
          <NotFound />
        </Center>
      </Container>
    );
  }

  const SocialAnalysisData = dynamic(() => import('views/project/SocialAnalysisData'));
  const AreaChartGroup = dynamic(() => import('components/Charts/AreaChartGroup'));
  const HoldersData = dynamic(() => import('../../views/project/HoldersData'));
  const Articles = dynamic(() => import('views/project/Articles'));
  const Transcriptions = dynamic(() => import('views/project/Transcriptions'));
  const Interactions = dynamic(() => import('views/project/Interactions'));

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

          {user && user?.projects?.find((item) => item.id === project.id) ? (
            <div className="mb-4">
              <Controls data={projectData} />
            </div>
          ) : null}

          <div className="w-full flex flex-col lg:flex-row gap-4 mb-4 items-start justify-between">
            <div className="flex-1">
              <div className="w-full mb-4">
                <div className="flex items-start gap-4 flex-wrap">
                  <div className="w-full md:w-[45%]">
                    <div className="flex items-center gap-2 flex-wrap">
                      <ProjectTitle
                        title={project.name as string}
                        size="md"
                        avatar={project.logo ? project.logo.url : ''}
                      />
                      {project?.paymentPlan ? (
                        <PaymentPlanBadge paymentPlan={project?.paymentPlan as PaymentPlan} />
                      ) : null}
                    </div>
                    <div className="mb-4">
                      <Text color="dimmed" size="xs" className="mb-2">
                        Tags:
                      </Text>
                      <Badges isLimited={false} badges={project.tags as Tag[]} />
                    </div>
                    <div className="flex gap-2 w-full md:w-auto mb-4">
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
                  </div>
                  <div>
                    {trackPrice && projectData.price ? (
                      <div className="mb-4">
                        <GradientText weight={600} size="xs">
                          Price
                        </GradientText>
                        <GradientTitle order={3}>{toCurrency((projectData.price as number) || 0)}</GradientTitle>
                        <Trend previousValue={projectData.priceChange} inline={true} />
                      </div>
                    ) : null}
                    {trackMarketCap && projectData.marketCap ? (
                      <div className="mb-4">
                        <GradientText weight={600} size="xs">
                          Market Cap
                        </GradientText>
                        <GradientTitle order={3}>{toCurrency((projectData.marketCap as number) || 0)}</GradientTitle>
                        <Trend previousValue={projectData.marketCapChange} inline={true} />
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>

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

              {projectData.relatedProjects && projectData.relatedProjects.length > 0 ? (
                <Paper className="mt-4">
                  <RelatedProjects data={projectData} />
                </Paper>
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

        {trackData ? (
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
      <TrackVitalsDisclaimer />
    </>
  );
};

export default project;

export const getServerSideProps: GetServerSideProps = async ({ req, res, params }) => {
  const slug = params?.slug;
  const projectData = await withRedisCache(`projectData_${slug}`, () => getProjectAndMarketStatsBySlug(slug as string));

  if (!projectData) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      projectData,
    },
  };
};
