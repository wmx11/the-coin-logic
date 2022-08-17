import type { Contract } from 'web3-eth-contract';
import config from '../../../config';
import { getDecimals } from '../../base';
import getPaginationFor from '../../../../utils/getPaginationFor';
import getTransferEventsCount from './getTransferEventsCount';
import iterateTransferEventsCreateOrUpdateWalletEntriesCallback from './iterateTransferEventsCreateOrUpdateWalletEntriesCallback';
import iterateWithContext from '../../../../utils/iterateWithContext';

const createOrUpdateWalletEntriesFromTransferEvents = async (
  projectId: string,
  hasHolders = false,
  contract: Contract,
) => {
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
    iteration: 1, // Start from 1 if it has pagination
    decimals,
    contract,
    getPagination,
    cache,
    projectId,
    hasHolders,
    perPage,
  };

  await iterateWithContext(context, iterateTransferEventsCreateOrUpdateWalletEntriesCallback);
};

export default createOrUpdateWalletEntriesFromTransferEvents;
