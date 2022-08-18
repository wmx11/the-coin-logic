import type { Contract } from 'web3-eth-contract';
import config from '../../../config';
import { getDecimals } from '../../base';
import getPaginationFor from '../../../../utils/getPaginationFor';
import getTransferEventsCount from './getTransferEventsCount';
import iterateTransferEventsCreateOrUpdateWalletEntriesCallback from './iterateTransferEventsCreateOrUpdateWalletEntriesCallback';
import iterateWithContext from '../../../../utils/iterateWithContext';
import { updateProjectInitializedStatus } from '../../../../graphql/mutations';
import { Project } from '../../../../types';

type CreateOrUpdateWalletEntriesFromTransferEvents = {
  project: Project;
  hasHolders: boolean;
  contract: Contract;
};

const createOrUpdateWalletEntriesFromTransferEvents = async ({
  project,
  hasHolders,
  contract,
}: CreateOrUpdateWalletEntriesFromTransferEvents) => {
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

  await iterateWithContext(context, iterateTransferEventsCreateOrUpdateWalletEntriesCallback);

  if (!hasHolders || !project.initialized) {
    await updateProjectInitializedStatus({ id: projectId, initialized: true });
  }
};

export default createOrUpdateWalletEntriesFromTransferEvents;
