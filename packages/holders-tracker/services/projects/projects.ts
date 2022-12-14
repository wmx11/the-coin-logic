import {
  getEnabledAndNotInitializedProjectsForHoldersTracking,
  getEnabledProjectsForHoldersTracking,
} from '../../../graphql/queries';
import { prismaClient } from '../../../prismaClient';
import config from 'tcl-packages/web3/config';

export const getProjects = (initial: boolean) => {
  if (initial) {
    return getEnabledAndNotInitializedProjectsForHoldersTracking();
  }

  return getEnabledProjectsForHoldersTracking();
};

export const getProjectByProjectId = (projectId: string) => {
  return prismaClient.project.findFirst({
    where: {
      id: projectId,
    },
  });
};

export const getProjectsForPeriodicalWalletBalanceUpdate = () => {
  try {
    return prismaClient.project.findMany({
      where: {
        enabled: true,
        periodicWalletUpdates: true,
        trackHolders: true,
        initialized: true,
        trackData: true,
      },
      include: {
        network: true,
      },
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const setProjectInitialized = async (projectId: string, initialized: boolean) => {
  try {
    const project = await getProjectByProjectId(projectId);
    return prismaClient.project.update({
      where: {
        id: project?.id,
      },
      data: {
        initialized,
      },
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const setProjectStatus = async (
  projectId: string,
  status: 'idle' | 'syncing' | 'failed' | 'tracking_holdings',
) => {
  try {
    const project = await getProjectByProjectId(projectId);
    return prismaClient.project.update({
      where: {
        id: project?.id,
      },
      data: {
        status,
      },
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getProjectStatus = async (projectId: string) => {
  try {
    return prismaClient.project.findFirst({
      where: {
        id: projectId,
      },
      select: {
        status: true,
      },
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const canProjectBeInitialized = async (projectId: string, lastBlock: number) => {
  const INITIALIZATION_ITERATIONS_THRESHOLD = 10;

  try {
    const project = await prismaClient?.block.findFirst({
      where: {
        projectId,
      },
    });

    return (project.lastBlock - lastBlock) / config.initialChunks <= INITIALIZATION_ITERATIONS_THRESHOLD;
  } catch (error) {
    console.error(error);
    return false;
  }
};
