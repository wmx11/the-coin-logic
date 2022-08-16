import { createOrUpdateWallet, getWallet } from './holders';
import {
  getTransferEventsByProjectId,
  getTransferEventsCountByProjectId,
  getTransferEventsCountFromPreviousBlock,
  getTransferEventsFromPreviousBlock,
} from '../transfers';
import sleep from '../../../utils/sleep';
import getPaginationFor from '../../../utils/getPaginationFor';
import config from '../../config';
import { getProjectByProjectId } from '../projects';

const getTransferEventsCount = (projectId: string, hasHolders: boolean) => {
  if (hasHolders) {
    return getTransferEventsCountFromPreviousBlock(projectId);
  }

  return getTransferEventsCountByProjectId(projectId);
};

const getTransferEvents = (projectId: string, hasHolders: boolean, perPage: number, offset: number) => {
  if (hasHolders) {
    return getTransferEventsFromPreviousBlock(projectId, {
      take: perPage,
      skip: offset,
    });
  }

  return getTransferEventsByProjectId(projectId, {
    take: perPage,
    skip: offset,
  });
};

const createOrUpdateWalletEntriesFromTransferEvents = async (projectId: string, hasHolders = false) => {
  if (!projectId) {
    throw new Error('Please provide a project ID.');
  }

  const perPage = config.take;
  let page = 1;

  const transferEventsCount = await getTransferEventsCount(projectId, hasHolders);
  const getPagination = getPaginationFor(transferEventsCount as number);

  const iterate = async (iteration: number) => {
    const pagination = getPagination(perPage, page);

    if (iteration > pagination.pages) {
      return undefined;
    }

    const transferEvents = await getTransferEvents(projectId, hasHolders, perPage, pagination.offset);

    if (!transferEvents) {
      return undefined;
    }

    // const transferEvents = await getTransferEventsByProjectId(projectId, {
    //   take: perPage,
    //   skip: pagination.offset,
    // });

    for (const event of transferEvents) {
      const wallet = await getWallet(event.address);
      const project = await getProjectByProjectId(event.projectId);

      await createOrUpdateWallet(
        wallet?.id as string,
        {
          projectId,
          address: event.address,
          balance: event.amount,
          projects: {
            connect: { id: project?.id },
          },
          transfers: {
            connect: { id: event.id },
          },
        },
        {
          balance: event.amount,
          transfers: {
            connect: { id: event.id },
          },
        },
      );
      await sleep(50);
    }

    page++;

    iterate(page);
  };

  iterate(page);
};

export default createOrUpdateWalletEntriesFromTransferEvents;
