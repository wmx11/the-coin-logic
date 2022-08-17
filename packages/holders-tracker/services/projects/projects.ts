import {
  getEnabledAndNotInitializedProjectsForHoldersTracking,
  getEnabledProjectsForHoldersTracking,
} from '../../../graphql/queries';
import prisma from '../../../prisma';

export const getProjects = (init: boolean) => {
  if (init) {
    return getEnabledAndNotInitializedProjectsForHoldersTracking();
  }

  return getEnabledProjectsForHoldersTracking();
};

export const getProjectByProjectId = (projectId: string) => {
  return prisma.projects.findFirst({
    where: {
      projectId,
    },
  });
};

export const setProjectInitialized = async (projectId: string, initialized: boolean) => {
  try {
    const project = await getProjectByProjectId(projectId);
    return prisma.projects.update({
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
