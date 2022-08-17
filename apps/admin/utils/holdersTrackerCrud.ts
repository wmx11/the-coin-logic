import { KeystoneContext } from '@keystone-6/core/types';
import prisma from '../../../packages/prisma';
import { Project } from '../types';

const getNetworkById = async (id: string, context: KeystoneContext) => {
  try {
    const project = await context.prisma.Project.findFirst({
      where: {
        id,
      },
      include: {
        network: true,
      },
    });

    return project.network.url;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getProjectFields = (item: Project, network: string) => {
  return {
    slug: item.slug as string,
    projectId: item.id,
    enabled: item.enabled as boolean,
    isRebasing: item.isRebasing as boolean,
    trackHolders: item.trackHolders as boolean,
    initialized: item.initialized as boolean,
    contractAddress: item.contractAddress as string,
    rpc: network as string,
  };
};

export const createProject = async (item: Project, context: KeystoneContext) => {
  try {
    const network = await getNetworkById(item.id, context);

    await prisma.projects.create({
      data: {
        ...getProjectFields(item, network),
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateProject = async (item: Project, context: KeystoneContext) => {
  try {
    const network = await getNetworkById(item.id, context);

    const project = await prisma.projects.findFirst({
      where: {
        projectId: item.id,
      },
    });

    await prisma.projects.upsert({
      where: {
        id: project?.id || '',
      },
      create: {
        ...getProjectFields(item, network),
      },
      update: {
        ...getProjectFields(item, network),
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteProject = async (item: Project) => {
  try {
    const project = await prisma.projects.findFirst({
      where: {
        projectId: item.id,
      },
    });

    await prisma.projects.delete({
      where: {
        id: project?.id,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
