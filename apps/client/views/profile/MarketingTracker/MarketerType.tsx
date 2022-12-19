import React, { FC } from 'react';
import { MarketingCampaign } from 'types';

type MarketerTypeProps = {
  campaign: MarketingCampaign;
};

const MarketerType: FC<MarketerTypeProps> = ({ campaign }) => {
  const { isInternal, creator, agency, agencyUrl } = campaign;
  if (isInternal) {
    return <>Internal</>;
  }

  if (creator) {
    return <>{creator.name}</>;
  }

  if (agency) {
    return (
      <a href={agencyUrl as string} target="__blank">
        {agency}
      </a>
    );
  }

  return null;
};

export default MarketerType;
