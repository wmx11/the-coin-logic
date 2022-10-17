import { StatsTabGroup } from 'components/StatsTabGroup';
import { FC } from 'react';
import { BiStats } from 'react-icons/bi';
import { MarketingCampaign, MarketingTrackerResult } from 'types';
import getData from './getData';

type CampaignResultsProps = {
  campaign: MarketingCampaign;
  campaignResults: MarketingTrackerResult;
};

const CampaignResults: FC<CampaignResultsProps> = ({ campaignResults, campaign }) => {
  const resultsData = getData({ campaignResults, campaign });
  return (
    <div className="mb-8">
      <StatsTabGroup title="Campaign Clicks Results" Icon={BiStats} data={resultsData} />
    </div>
  );
};

export default CampaignResults;
