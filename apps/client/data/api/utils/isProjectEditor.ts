import prisma from '../../prisma';

export const isProjectEditor = async ({
  userId,
  slug,
  projectId,
}: {
  userId: string;
  slug?: string;
  projectId?: string;
}) => {
  const action = projectId ? { id: projectId } : { slug: { equals: slug } };

  const canEditProject = await prisma?.user.findFirst({
    where: {
      id: userId,
      OR: [
        {
          managedProjects: {
            some: {
              ...action,
            },
          },
        },
        {
          projects: {
            some: {
              ...action,
            },
          },
        },
      ],
      AND: [
        {
          OR: [
            {
              roles: {
                some: {
                  isEditor: true,
                },
              },
            },
            {
              isAdmin: true,
            },
          ],
        },
      ],
    },
    select: {
      id: true,
    },
  });

  return !!canEditProject;
};
