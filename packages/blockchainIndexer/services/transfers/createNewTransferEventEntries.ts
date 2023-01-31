import { getBlockByProjectId, getDecimals, getLatestBlock } from '../base';

import type { Contract } from 'web3-eth-contract';
import type { Project } from '../../../types';
import config from '../../../web3/config';
import iterateTransferEventsAndCreateNewEntriesCallback from './iterateTransferEventsAndCreateNewEntriesCallback';
import iterateWithContext from '../../../utils/iterateWithContext';
import Web3 from 'web3';

type CreateNewTransferEventEntries = {
  contract: Contract;
  web3: Web3;
  iterations: number;
  fromBlock: number;
  project: Project;
};

const createNewTransferEventEntries = async ({
  contract,
  web3,
  iterations,
  fromBlock,
  project,
}: CreateNewTransferEventEntries) => {
  const projectBlock = await getBlockByProjectId(project.id);
  let decimals = 18;

  if (project.isNft) {
    decimals = project?.network?.decimals || 18;
  } else {
    decimals = await getDecimals(contract);
  }

  const latestBlock = await getLatestBlock(web3);
  const toBlock = fromBlock + (project.initialized ? config.chunks : config.initialChunks);

  const context = {
    iterations,
    iteration: 1,
    decimals,
    projectBlock,
    from: fromBlock,
    // Prevent from querying beyong available blocks
    to: toBlock >= latestBlock ? latestBlock : toBlock,
    contract,
    web3,
    project,
    config,
  };

  await iterateWithContext(context, iterateTransferEventsAndCreateNewEntriesCallback);
};

export default createNewTransferEventEntries;
