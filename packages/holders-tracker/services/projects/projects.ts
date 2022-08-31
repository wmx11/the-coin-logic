import {
  getEnabledAndNotInitializedProjectsForHoldersTracking,
  getEnabledProjectsForHoldersTracking,
} from '../../../graphql/queries';
import { prismaClient } from '../../../prismaClient';

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
