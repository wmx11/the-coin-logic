import React, { FC } from 'react';
import { FaWallet } from 'react-icons/fa';
import { formateDateWithHours } from '../../../utils/formatters';
import { StatsTabGroup } from '../../../components/StatsTabGroup';
import { ProjectWithMarketStatsAndChanges } from 'types/Project';
import { getData } from './getData';

type HoldersDataTypes = { data: ProjectWithMarketStatsAndChanges };

const HoldersData: FC<HoldersDataTypes> = ({ data }) => {
  const { dateAdded } = data;
  const { initialized, trackHolders, slug, id } = data.project;

  const holdersData = getData(data);

  const getUntrackedMessage = () => {
    if (!initialized && trackHolders) {
      return 'We are currently syncing Holders and Transfers data with the blockchain.';
    }

    if (!initialized && !trackHolders) {
      return 'This project has Holders Data tracking disabled.';
    }

    return 'Holders Data is untracked.';
  };

  return (
    <StatsTabGroup
      title="Holders Data"
      untrackedMessage={getUntrackedMessage()}
      section="holdersData"
      Icon={FaWallet}
      subtitle={`Last updated ${formateDateWithHours(dateAdded)}`}
      data={initialized && trackHolders ? holdersData : []}
      slug={slug as string}
      projectId={id}
    />
  );
};

export default HoldersData;
