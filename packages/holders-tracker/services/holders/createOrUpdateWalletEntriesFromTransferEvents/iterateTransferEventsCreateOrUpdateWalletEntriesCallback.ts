import { createOrUpdateWallet, getWallet } from '../holders';

import { Context } from '../../../../utils/iterateWithContext';
import { Contract } from 'web3-eth-contract';
import { getProjectByProjectId } from '../../projects';
import getTransferEvents from './getTransferEvents';
import { getWalletBalance } from '../../base';
import sleep from '../../../../utils/sleep';
import toDecimals from '../../../../utils/toDecimals';

type AddedContext = Context & {
  decimals: number;
  contract: Contract;
  getPagination: (
    perPage: number,
    page: number,
  ) => { results: number; page: number; pages: number; perPage: number; offset: number };
  cache: Map<string, { balance: number }>;
  projectId: string;
  hasHolders: boolean;
  perPage: number;
};

const iterateTransferEventsCreateOrUpdateWalletEntriesCallback = async (context: AddedContext) => {
  const { projectId, hasHolders, perPage, getPagination, iteration, cache, decimals, contract } = context;

  const transferEvents = await getTransferEvents(
    projectId,
    hasHolders,
    perPage,
    getPagination(perPage, iteration).offset,
  );

  if (!transferEvents) {
    return null;
  }

  for (const event of transferEvents) {
    const wallet = await getWallet(event.toAddress);
    const project = await getProjectByProjectId(event.projectId);

    if (!cache.has(event.toAddress)) {
      const balance = await getWalletBalance(contract, event.toAddress);
      cache.set(event.toAddress, { balance: toDecimals(balance, decimals) || event.amount });
      await sleep(5);
    }

    const result = await createOrUpdateWallet(
      wallet?.id as string,
      {
        projectId,
        address: event.toAddress,
        balance: cache.get(event.toAddress)?.balance || event.amount,
        projects: {
          connect: { id: project?.id },
        },
        transfers: {
          connect: { id: event.id },
        },
      },
      {
        balance: cache.get(event.toAddress)?.balance || event.amount,
        transfers: {
          connect: { id: event.id },
        },
      },
    );

    console.log(result);

    await sleep(60);
  }

  return null;
};

export default iterateTransferEventsCreateOrUpdateWalletEntriesCallback;
