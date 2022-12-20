import { Container, Paper, Text } from '@mantine/core';
import GoBack from 'components/GoBack';
import GradientText from 'components/Text/GradientText';
import { AverageMarketChangeForPeriodOfTime } from 'data/getters';
import { FC } from 'react';
import { MarketingCampaign, MarketingTrackerResult } from 'types';
import { ProjectWithMarketStatsAndChanges } from 'types/Project';
import CampaignGoals from './CampaignGoals/CampaignGoals';
import CampaignHeader from './CampaignHeader';
import CampaignResults from './CampaignResults/CampaignResults';
import CampaignTraffic from './CampaignTraffic';
import CampaignUniqueLinks from './CampaignUniqueLinks';

type CampaignProps = {
  campaign: MarketingCampaign;
  projectData: ProjectWithMarketStatsAndChanges;
  campaignResults: MarketingTrackerResult;
  projectAverages: AverageMarketChangeForPeriodOfTime;
};

const Campaign: FC<CampaignProps> = ({ campaign, projectData, campaignResults, projectAverages }) => {
  const { description, notes } = campaign;

  return (
    <>
      <div className="bg-zinc-50">
        <Container className="py-10">
          <GoBack />
          {!campaign && (
            <div className="bg-zinc-100 p-10 flex flex-col items-center justify-center gap-4 rounded-md mt-8">
              <Text>We couldn't find the campaign you are looking for.</Text>
            </div>
          )}

          <CampaignHeader campaign={campaign} projectAverages={projectAverages} campaignResults={campaignResults} />

          <div className="flex justify-between items-stretch gap-4 flex-wrap mb-4 flex-col md:flex-row">
            <Paper p="md" shadow="sm" withBorder className="flex-1">
              <GradientText size="lg" weight={600}>
                Description
              </GradientText>
              <Text size="sm">{description ? description : 'No description.'}</Text>
            </Paper>
            <Paper p="md" shadow="sm" withBorder className="flex-1">
              <GradientText size="lg" weight={600}>
                Notes
              </GradientText>
              <Text size="sm">{notes ? notes : 'No notes.'}</Text>
            </Paper>
          </div>
          <CampaignUniqueLinks campaign={campaign} />
        </Container>
      </div>

      <Container className="py-10">
        <CampaignGoals campaign={campaign} projectData={projectData} projectAverages={projectAverages} />
        <CampaignResults campaignResults={campaignResults} campaign={campaign} />
        <CampaignTraffic campaignResults={campaignResults} />
      </Container>
    </>
  );
};

export default Campaign;
