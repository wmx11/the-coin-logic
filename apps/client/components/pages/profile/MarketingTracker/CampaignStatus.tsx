import StatusPill from 'components/StatusPill';
import { FC } from 'react';
import { getStatusByDate } from 'utils/utils';

type CampaignStatusProps = {
  startDate: string;
  endDate: string;
  status: 'ended' | 'live' | string;
};

const CampaignStatus: FC<CampaignStatusProps> = ({ startDate, endDate, status }) => {
  const statusByDate = getStatusByDate({ startDate, endDate, status });
  return <StatusPill status={statusByDate} />;
};

export default CampaignStatus;
