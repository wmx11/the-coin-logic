import prisma from '../../../prisma';

export const getEnabledAndRebasingProjects = () => {
  return prisma.projects.findMany({
    where: {
      enabled: true,
      isRebasing: true,
      trackHolders: true,
    },
    include: {
      Holders: true,
    },
  });
};

export const getProjectByProjectId = (projectId: string) => {
  return prisma.projects.findFirst({
    where: {
      projectId,
    },
  });
};
