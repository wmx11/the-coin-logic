import prisma from '../../../prisma';
import { getBlockByProjectId } from '../base';
import type { Prisma } from '@prisma/client';
import type { Contract } from 'web3-eth-contract';
import type { Project } from '../../../types';
import type { Pagination } from '../types';

type GetPastTransferEvents = {
  contract: Contract;
  fromBlock: number;
  toBlock: number;
};

type GetTransferType = {
  project: Project;
  fromAddress: string;
  toAddress: string;
};

export const getPastTransferEvents = ({ contract, fromBlock, toBlock }: GetPastTransferEvents) => {
  return contract.getPastEvents('Transfer', {
    fromBlock,
    toBlock,
  });
};

export const addTransferEvent = (data: Prisma.TransfersCreateInput) => {
  return prisma.transfers.create({ data });
};

export const getTransferType = ({ project, fromAddress, toAddress }: GetTransferType) => {
  const from = fromAddress.toLocaleLowerCase();
  const to = toAddress.toLocaleLowerCase();
  const exchange = project.pairAddress?.toLocaleLowerCase();
  const contract = project.contractAddress?.toLocaleLowerCase();
  const burn = project.burnAddress?.toLocaleLowerCase();

  // Burn
  if (to === burn) {
    return -1;
  }

  // Sell
  if (to === exchange && from !== contract) {
    return 0;
  }

  // Buy
  if (from === exchange && to !== contract) {
    return 1;
  }

  // Transfer
  if (from !== exchange && (to !== contract || to !== burn)) {
    return 2;
  }
};

export const getTransferEventsFromPreviousBlockByProjectId = (projectId: string, previousBlock: number) => {
  return prisma.transfers.findMany({
    where: {
      projectId,
      block: {
        gte: previousBlock,
      },
    },
  });
};

export const getUniqueWalletAddressesByProjectId = (projectId: string) => {
  return prisma.transfers.findMany({
    where: {
      projectId,
    },
    distinct: ['address'],
  });
};

export const getTransferEventsByProjectId = (projectId: string, pagination?: Pagination) => {
  return prisma.transfers.findMany({
    ...pagination,
    where: {
      projectId,
    },
  });
};

export const getTransferEventsCountByProjectId = (projectId: string) => {
  return prisma.transfers.count({
    where: {
      projectId,
    },
  });
};

export const getTransferEventsCountFromPreviousBlock = async (projectId: string) => {
  const block = await getBlockByProjectId(projectId);
  return prisma.transfers.count({
    where: {
      projectId,
      block: {
        gte: block?.previousBlock as number,
      },
    },
  });
};

export const getTransferEventsFromPreviousBlock = async (projectId: string, pagination?: Pagination) => {
  try {
    const block = await getBlockByProjectId(projectId);
    return prisma.transfers.findMany({
      where: {
        projectId,
        block: {
          gte: block?.previousBlock as number,
        },
      },
      ...pagination,
    });
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
