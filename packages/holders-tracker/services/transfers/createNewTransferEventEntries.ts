import { getBlockByProjectId, getDecimals } from '../base';

import type { Contract } from 'web3-eth-contract';
import type { Project } from '../../../types';
import config from '../../../web3/config';
import iterateTransferEventsAndCreateNewEntriesCallback from './iterateTransferEventsAndCreateNewEntriesCallback';
import iterateWithContext from '../../../utils/iterateWithContext';

type CreateNewTransferEventEntries = {
  contract: Contract;
  iterations: number;
  fromBlock: number;
  project: Project;
};

const createNewTransferEventEntries = async ({
  contract,
  iterations,
  fromBlock,
  project,
}: CreateNewTransferEventEntries) => {
  const decimals = await getDecimals(contract);
  const projectBlock = await getBlockByProjectId(project.id);

  const context = {
    iterations,
    iteration: 1,
    decimals,
    projectBlock,
    from: fromBlock,
    to: fromBlock + (project.initialized ? config.chunks : config.initialChunks),
    contract,
    project,
    config,
  };

  await iterateWithContext(context, iterateTransferEventsAndCreateNewEntriesCallback);
};

export default createNewTransferEventEntries;
