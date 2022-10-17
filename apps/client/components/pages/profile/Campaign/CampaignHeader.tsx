import { Paper, Text, Title } from '@mantine/core';
import { ProjectTitle } from 'components/ProjectTitle';
import React, { FC } from 'react';
import { MarketingCampaign } from 'types';
import toCurrency from 'utils/toCurrency';
import CampaignStatus from '../MarketingTracker/CampaignStatus';
import MarketerType from '../MarketingTracker/MarketerType';

type CampaignHeaderProps = {
  campaign: MarketingCampaign;
};

const CampaignHeader: FC<CampaignHeaderProps> = ({ campaign }) => {
  const { name, campaignId, startDate, endDate, project, budget } = campaign;

  return (
    <div className="flex gap-4 my-4">
      <Paper p="md" shadow="sm" withBorder className="flex-grow md:max-w-[320px] w-full">
        <div className="mb-4">
          <Title order={1}>{name}</Title>
          <Text size="xs" color="dimmed" className="mb-2">
            {campaignId}
          </Text>
          <ProjectTitle
            size="sm"
            avatar={project?.logo?.url || ''}
            title={project?.name as string}
            component="a"
            href={`/project/${project?.slug}`}
          />
        </div>
      </Paper>

      <Paper p="md" shadow="sm" withBorder className="flex-1">
        <div>
          <Title order={3}>Time Period</Title>
          <Text size="xs" color="dimmed">
            Start date: {startDate}
          </Text>
          <Text size="xs" color="dimmed">
            End date: {endDate}
          </Text>
        </div>
      </Paper>

      <Paper p="md" shadow="sm" withBorder className="flex-1">
        <div>
          <Title order={3}>Status</Title>
          <CampaignStatus startDate={startDate} endDate={endDate} />
        </div>
      </Paper>

      <Paper p="md" shadow="sm" withBorder className="flex-1">
        <div>
          <Title order={3}>Budget</Title>
          <Text size="xl" weight={700}>
            {toCurrency(budget as number)}
          </Text>
        </div>
      </Paper>

      <Paper p="md" shadow="sm" withBorder className="flex-1">
        <div>
          <Title order={3}>Marketer</Title>
          <MarketerType campaign={campaign} />
        </div>
      </Paper>
    </div>
  );
};

export default CampaignHeader;
