import prisma from '../../../prisma';

export const getProjectByProjectId = (projectId: string) => {
  return prisma.projects.findFirst({
    where: {
      projectId,
    },
  });
};
