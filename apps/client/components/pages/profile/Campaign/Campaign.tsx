import { Container, Paper, Text } from '@mantine/core';
import WorldMapBubbleChart from 'components/Charts/WorldMapBubbleChart';
import GoBack from 'components/GoBack';
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
};

const Campaign: FC<CampaignProps> = ({ campaign, projectData, campaignResults }) => {
  const { name, campaignId, dateAdded, updatedAt, startDate, endDate, description, project, budget } = campaign;

  return (
    <Container className="py-10">
      <GoBack />

      {!campaign && (
        <div className="bg-zinc-100 p-10 flex flex-col items-center justify-center gap-4 rounded-md mt-8">
          <Text>We couldn't find the campaign you are looking for.</Text>
        </div>
      )}

      <div>
        <CampaignHeader campaign={campaign} />

        <Paper p="md" shadow="sm" withBorder className="mb-4">
          <Text size="lg" weight={600}>
            Campaign description
          </Text>
          <Text size="sm">{description}</Text>
        </Paper>

        <CampaignUniqueLinks campaign={campaign} />
        <CampaignGoals campaign={campaign} projectData={projectData} />
        <CampaignResults campaignResults={campaignResults} campaign={campaign} />
        <CampaignTraffic campaignResults={campaignResults} />
      </div>
    </Container>
  );
};

export default Campaign;
