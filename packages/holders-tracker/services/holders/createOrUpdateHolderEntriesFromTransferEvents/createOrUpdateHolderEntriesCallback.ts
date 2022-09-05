import { Contract } from 'web3-eth-contract';
import { Context } from '../../../../utils/iterateWithContext';
import sleep from '../../../../utils/sleep';
import toDecimals from '../../../../utils/toDecimals';
import config from '../../../config';
import { getWalletBalance } from '../../base';
import { getProjectByProjectId } from '../../projects';
import { createOrUpdateHolder, getHolderByProjectIdAndAddress } from '../holders';
import getTransferEvents from './getTransferEvents';

type ExtendedContext = Context & {
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

const createOrUpdateHolderEntriesCallback = async (context: ExtendedContext) => {
  const { projectId, hasHolders, perPage, getPagination, iteration, cache, decimals, contract } = context;

  const transferEvents = await getTransferEvents(
    projectId,
    hasHolders,
    perPage,
    getPagination(perPage, iteration).offset,
  );

  for (const event of transferEvents) {
    const wallet = await getHolderByProjectIdAndAddress(event.projectId, event.toAddress);
    const project = await getProjectByProjectId(event.projectId as string);

    if (!cache.has(event.toAddress)) {
      const balance = await getWalletBalance(contract, event.toAddress);
      cache.set(event.toAddress, { balance: toDecimals(balance, decimals) || (event.amount as number) });
      await sleep(10);
    }

    const result = await createOrUpdateHolder(
      wallet?.id as string,
      {
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

    await sleep(config.timeouts.createOrUpdateHolderEntriesCallback);
  }

  return context;
};

export default createOrUpdateHolderEntriesCallback;
