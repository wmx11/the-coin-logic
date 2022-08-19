import type { Pagination } from '../types';
import type { Prisma } from '@prisma/client';
import prisma from '../../../prisma';

export const getHolderPosition = (address: string) => {
  return;
};

export const getHoldersCountByProjectIdFrom = (projectId: string, from: number) => {
  try {
    return prisma.holders.count({
      where: {
        projectId: projectId,
        balance: {
          gte: from,
        },
      },
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getAverageHoldingsByProjectId = async (projectId: string) => {
  try {
    const { _avg } = await prisma.holders.aggregate({
      _avg: {
        balance: true,
      },
      where: {
        projectId,
      },
    });
    return _avg.balance;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getHolder = (address: string) => {
  return prisma.holders.findFirst({ where: { address } });
};

export const getHoldersByProjectId = (projectId: string, pagination?: Pagination) => {
  return prisma.holders.findMany({
    ...pagination,
    where: {
      projectId,
    },
  });
};

export const getHolderByProjectId = (projectId: string) => {
  return prisma.holders.findFirst({
    where: {
      projectId,
    },
  });
};

export const getHoldersCountByProjectId = (projectId: string) => {
  return prisma.holders.count({
    where: {
      projectId,
    },
  });
};

export const getHoldersCount = () => {
  return prisma.holders.count();
};

export const getHolders = (where: Prisma.HoldersWhereInput) => {
  return prisma.holders.findMany({
    where,
  });
};

export const addHolder = (data: Prisma.HoldersCreateInput) => {
  return prisma.holders.create({
    data,
  });
};

export const updateHolder = (id: string, data: Prisma.HoldersUpdateInput) => {
  return prisma.holders.update({
    where: {
      id,
    },
    data,
  });
};

export const createOrUpdateHolder = (
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
