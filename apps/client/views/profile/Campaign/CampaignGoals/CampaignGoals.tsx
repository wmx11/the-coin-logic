import { StatsTabGroup } from 'components/StatsTabGroup';
import { AverageMarketChangeForPeriodOfTime } from 'data/getters';
import { FC } from 'react';
import { FaFlag } from 'react-icons/fa';
import { MarketingCampaign } from 'types';
import { ProjectWithMarketStatsAndChanges } from 'types/Project';
import getGoalsData from './getGoalsData';
import getMetricsData from './getMetricsData';

type CampaignGoalsProps = {
  campaign: MarketingCampaign;
  projectData: ProjectWithMarketStatsAndChanges;
  projectAverages: AverageMarketChangeForPeriodOfTime;
};

const CampaignGoals: FC<CampaignGoalsProps> = ({ campaign, projectData, projectAverages }) => {
  const metricsData = getMetricsData({ campaign, projectData, projectAverages });
  const goalsData = getGoalsData({ campaign });

  return (
    <div className="mb-8">
      <StatsTabGroup
        Icon={FaFlag}
        title={campaign.finalSnapshot ? 'Campaign goals with final snapshot' : 'Campaign Goals'}
        data={goalsData}
        subtitle={campaign.finalSnapshot && 'Final snapshot is taken when the campaign ends.'}
      />
      <StatsTabGroup
        Icon={FaFlag}
        data={metricsData}
        untrackedMessage="You don't have enough metrics data collected."
      />
    </div>
  );
};

export default CampaignGoals;
