import { prismaClient, PrismaSchema } from '../../../prismaClient';
import { getMidnightToday } from '../../../utils/dates';
import type { Pagination } from '../types';

export const getHoldersCountByProjectIdFrom = (projectId: string, from: number) => {
  try {
    return prismaClient.holder.count({
      where: {
        projectsId: projectId,
        isContract: false,
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
    const { _avg } = await prismaClient?.holder.aggregate({
      _avg: {
        balance: true,
      },
      where: {
        projectsId: projectId,
        isContract: false,
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

export const getHolderByProjectIdAndAddress = (projectId: string, address: string) => {
  return prismaClient.holder.findFirst({ where: { address, projectsId: projectId } });
};

export const getHoldersByProjectId = (projectId: string, pagination?: Pagination) => {
  return prismaClient.holder.findMany({
    ...pagination,
    where: {
      projectsId: projectId,
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
      projectsId: projectId,
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

export const getHoldersByProjectIdFromDateLowerThan = (projectId: string, date: Date) => {
  try {
    return prismaClient.holder.findMany({
      where: {
        projectsId: projectId,
        updatedAt: {
          lt: date,
        },
      },
      orderBy: {
        updatedAt: 'asc',
      },
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getNewHoldersCountByProjectId = async (projectId: string, tokenAmount = 0) => {
  try {
    return prismaClient.holder.count({
      where: {
        projectsId: projectId,
        balance: {
          gte: tokenAmount,
        },
        dateAdded: {
          gte: getMidnightToday(),
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
        projectsId: projectId,
        balance: {
          lte: tokenAmount,
        },
        dateAdded: {
          lt: getMidnightToday(),
        },
        updatedAt: {
          gte: getMidnightToday(),
        },
        transfers: {
          some: {
            projectId,
            createdAt: {
              gte: getMidnightToday(),
            },
          },
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
        projectsId: projectId,
        balance: {
          gte: tokenAmount,
        },
        dateAdded: {
          lt: getMidnightToday(),
        },
        updatedAt: {
          gte: getMidnightToday(),
        },
        transfers: {
          some: {
            projectId,
            createdAt: {
              gte: getMidnightToday(),
            },
          },
        },
      },
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};
