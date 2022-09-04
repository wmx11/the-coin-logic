import type { Contract } from 'web3-eth-contract';
import type { Pagination } from '../types';
import type { Project } from '../../../types';
import { getBlockByProjectId } from '../base';
import { prismaClient, PrismaSchema } from '../../../prismaClient';

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

export const addTransferEvent = (data: PrismaSchema.TransferCreateInput) => {
  return prismaClient.transfer.create({ data });
};

export const getTransferType = ({ project, fromAddress, toAddress }: GetTransferType) => {
  const from = fromAddress.toLowerCase();
  const to = toAddress.toLowerCase();
  const exchange = project.pairAddress?.toLowerCase();
  const contract = project.contractAddress?.toLowerCase();
  const burn = project.burnAddress?.toLowerCase();

  // Burn
  if (to === burn) {
    return -1;
  }

  // Sell
  if (to === contract && from !== exchange) {
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

  // Tax
  if (from === exchange && to === contract) {
    return 3;
  }

  // Other
  return 4;
};

export const getTransferEventsFromPreviousBlockByProjectId = (projectId: string, previousBlock: number) => {
  return prismaClient.transfer.findMany({
    where: {
      projectId,
      block: {
        gte: previousBlock,
      },
    },
  });
};

export const getTransferEventsByProjectId = (projectId: string, pagination?: Pagination) => {
  return prismaClient.transfer.findMany({
    ...pagination,
    where: {
      projectId,
    },
  });
};

export const getTransferEventsCountByProjectId = (projectId: string) => {
  return prismaClient.transfer.count({
    where: {
      projectId,
    },
  });
};

export const getTransferEventsCountFromPreviousBlock = async (projectId: string) => {
  const block = await getBlockByProjectId(projectId);
  return prismaClient.transfer.count({
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
    return prismaClient.transfer.findMany({
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
    return null;
  }
};

export const getTransferEventByHashAndProjectId = async (hash: string, projectId: string) => {
  try {
    const transferEvent = await prismaClient.transfer.findFirst({
      where: {
        hash,
        projectId,
      },
    });
    return transferEvent;
  } catch (error) {
    console.log(error);
    return null;
  }
};
