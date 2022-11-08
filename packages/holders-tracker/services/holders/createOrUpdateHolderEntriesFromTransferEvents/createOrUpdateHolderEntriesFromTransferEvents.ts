import type { Contract } from 'web3-eth-contract';
import { Project } from '../../../../types';
import getPaginationFor from '../../../../utils/getPaginationFor';
import iterateWithContext from '../../../../utils/iterateWithContext';
import config from '../../../config';
import { getDecimals } from '../../base';
import { canProjectBeInitialized, setProjectInitialized } from '../../projects';
import createOrUpdateHolderEntriesCallback from './createOrUpdateHolderEntriesCallback';
import getTransferEventsCount from './getTransferEventsCount';

type createOrUpdateHolderEntriesFromTransferEvents = {
  project: Project;
  hasHolders: boolean;
  initial: boolean;
  contract: Contract;
  latestBlock: number;
};

const createOrUpdateHolderEntriesFromTransferEvents = async ({
  project,
  hasHolders,
  contract,
  latestBlock,
  initial,
}: createOrUpdateHolderEntriesFromTransferEvents) => {
  const projectId = project.id;

  if (!projectId) {
    throw new Error('Please provide a project ID.');
  }

  const cache = new Map();
  const perPage = config.take;

  const transferEventsCount = await getTransferEventsCount(projectId, hasHolders);
  const getPagination = getPaginationFor(transferEventsCount as number);
  const decimals = await getDecimals(contract);

  const context = {
    iterations: getPagination(perPage, 1).pages,
    iteration: 1,
    decimals,
    contract,
    getPagination,
    cache,
    projectId,
    hasHolders,
    perPage,
  };

  await iterateWithContext(context, createOrUpdateHolderEntriesCallback);

  if (!initial) {
    return null;
  }

  const canBeInitialized = await canProjectBeInitialized(projectId, latestBlock);

  if (!canBeInitialized) {
    return null;
  }

  await setProjectInitialized(projectId, true);
};

export default createOrUpdateHolderEntriesFromTransferEvents;
