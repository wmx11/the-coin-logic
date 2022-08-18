import type { Pagination } from '../types';
import type { Prisma } from '@prisma/client';
import prisma from '../../../prisma';

export const getWalletPosition = (address: string) => {
  return;
};

export const getHoldersAmount = (from: number) => {
  return prisma.holders.count({
    where: {
      balance: {
        gte: from,
      },
    },
  });
};

export const getAverageHoldings = () => {
  return;
};

export const getWallet = (address: string) => {
  return prisma.holders.findFirst({ where: { address } });
};

export const getWalletsByProjectId = (projectId: string, pagination?: Pagination) => {
  return prisma.holders.findMany({
    ...pagination,
    where: {
      projectId,
    },
  });
};

export const getWalletByProjectId = (projectId: string) => {
  return prisma.holders.findFirst({
    where: {
      projectId,
    },
  });
};

export const getWalletsCountByProjectId = (projectId: string) => {
  return prisma.holders.count({
    where: {
      projectId,
    },
  });
};

export const getWalletsCount = () => {
  return prisma.holders.count();
};

export const getWallets = (where: Prisma.HoldersWhereInput) => {
  return prisma.holders.findMany({
    where,
  });
};

export const addWallet = (data: Prisma.HoldersCreateInput) => {
  return prisma.holders.create({
    data,
  });
};

export const updateWallet = (id: string, data: Prisma.HoldersUpdateInput) => {
  return prisma.holders.update({
    where: {
      id,
    },
    data,
  });
};

export const createOrUpdateWallet = (
  id: string,
  create: Prisma.HoldersCreateInput,
  update: Prisma.HoldersUpdateInput,
) => {
  return prisma.holders.upsert({
    where: {
      id: id || '',
    },
    create,
    update,
  });
};

export const getHoldersWithEnabledAndRebasingProjectsFromDateLowerThan = (date: Date) => {
  return prisma.holders.findMany({
    where: {
      updatedAt: {
        lte: date,
      },
      projects: {
        some: { enabled: true, isRebasing: true, trackHolders: true },
        none: { initialized: false },
      },
    },
    include: {
      projects: {
        select: {
          contractAddress: true,
          rpc: true,
          projectId: true,
          isRebasing: true,
          enabled: true,
          trackHolders: true,
          initialized: true,
        },
      },
    },
  });
};
