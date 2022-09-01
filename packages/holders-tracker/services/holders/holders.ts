import { subDays } from 'date-fns';
import { prismaClient, PrismaSchema } from '../../../prismaClient';
import type { Pagination } from '../types';

export const getHoldersCountByProjectIdFrom = (projectId: string, from: number) => {
  try {
    return prismaClient.holder.count({
      where: {
        projects: {
          every: { id: projectId },
        },
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
    const { _avg } = await prismaClient.holder.aggregate({
      _avg: {
        balance: true,
      },
      where: {
        projects: {
          every: { id: projectId },
        },
      },
    });
    return _avg.balance;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getHolder = (address: string) => {
  return prismaClient.holder.findFirst({ where: { address } });
};

export const getHoldersByProjectId = (projectId: string, pagination?: Pagination) => {
  return prismaClient.holder.findMany({
    ...pagination,
    where: {
      projects: {
        every: { id: projectId },
      },
    },
  });
};

export const getHolderByAddress = (address: string) => {
  return prismaClient.holder.findFirst({
    where: {
      address,
    },
  });
};

export const getHoldersCountByProjectId = (projectId: string) => {
  return prismaClient.holder.count({
    where: {
      projects: {
        every: { id: projectId },
      },
    },
  });
};

export const getHoldersCount = () => {
  return prismaClient.holder.count();
};

export const getHolders = (where: PrismaSchema.HolderWhereInput) => {
  return prismaClient.holder.findMany({
    where,
  });
};

export const addHolder = (data: PrismaSchema.HolderCreateInput) => {
  return prismaClient.holder.create({
    data,
  });
};

export const updateHolder = (id: string, data: PrismaSchema.HolderUpdateInput) => {
  return prismaClient.holder.update({
    where: {
      id,
    },
    data,
  });
};

export const createOrUpdateHolder = (
  id: string,
  create: PrismaSchema.HolderCreateInput,
  update: PrismaSchema.HolderUpdateInput,
) => {
  return prismaClient.holder.upsert({
    where: {
      id: id || '',
    },
    create,
    update,
  });
};

export const getHoldersWithEnabledAndRebasingProjectsFromDateLowerThan = (date: Date) => {
  return prismaClient.holder.findMany({
    where: {
      updatedAt: {
        lte: date,
      },
      projects: {
        some: { enabled: true, isRebasing: true, trackHolders: true },
        none: { initialized: false, trackData: false },
      },
    },
    include: {
      projects: {
        select: {
          contractAddress: true,
          network: { select: { url: true } },
          id: true,
          isRebasing: true,
          enabled: true,
          trackHolders: true,
          initialized: true,
        },
      },
    },
  });
};

export type HoldersWithEnabledAndRebasingProjects = typeof getHoldersWithEnabledAndRebasingProjectsFromDateLowerThan;

export const getNewHoldersCountByProjectId = async (projectId: string, tokenAmount = 0) => {
  try {
    return prismaClient.holder.count({
      where: {
        projects: {
          every: { id: projectId },
        },
        balance: {
          gte: tokenAmount,
        },
        dateAdded: {
          gte: subDays(new Date(), 1),
        },
      },
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getLeavingHoldersCountByProjectId = async (projectId: string, tokenAmount = 0) => {
  try {
    return prismaClient.holder.count({
      where: {
        projects: {
          every: { id: projectId },
        },
        balance: {
          lte: tokenAmount,
        },
        updatedAt: {
          gte: subDays(new Date(), 1),
        },
      },
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getRecurringHoldersCountByProjectId = async (projectId: string, tokenAmount = 0) => {
  try {
    return prismaClient.holder.count({
      where: {
        projects: {
          every: { id: projectId },
        },
        balance: {
          gte: tokenAmount,
        },
        dateAdded: {
          lt: subDays(new Date(), 1),
        },
        updatedAt: {
          gte: subDays(new Date(), 1),
        },
        transfers: {
          every: { createdAt: { gte: subDays(new Date(), 1) } },
        },
      },
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};
