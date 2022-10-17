import StatusPill from 'components/StatusPill';
import { isAfter, isToday } from 'date-fns';
import React, { FC } from 'react';
import { formatDate } from 'utils/formatters';

type CampaignStatusProps = {
  startDate: string;
  endDate: string;
};

const CampaignStatus: FC<CampaignStatusProps> = ({ startDate, endDate }) => {
  const currDate = formatDate(new Date());

  const getStatus = () => {
    if (isToday(new Date(endDate))) {
      return 'completed';
    }

    if (isAfter(new Date(currDate as string), new Date(startDate))) {
      return 'active';
    }

    return 'pending';
  };

  return <StatusPill status={getStatus()} />;
};

export default CampaignStatus;
