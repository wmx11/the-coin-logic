import { Title } from '@mantine/core';
import { StatsTabGroup } from 'components/StatsTabGroup';
import { FC } from 'react';
import { FaFlag } from 'react-icons/fa';
import { MarketingCampaign } from 'types';
import { ProjectWithMarketStatsAndChanges } from 'types/Project';
import getData from './getData';

type CampaignGoalsProps = {
  campaign: MarketingCampaign;
  projectData: ProjectWithMarketStatsAndChanges;
};

const CampaignGoals: FC<CampaignGoalsProps> = ({ campaign, projectData }) => {
  const goalsData = getData({ campaign, projectData });

  return (
    <div className="mb-8">
      <StatsTabGroup title="Campaign Goals" Icon={FaFlag} data={goalsData} />
    </div>
  );
};

export default CampaignGoals;
