// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import request, { Auth } from 'data/api/request';
import { response } from 'data/api/response';
import { FileType, formDataConfig, handleFormData } from 'data/api/utils/handleFormData';
import { handleImageUpload } from 'data/api/utils/uploadImage';
import type { NextApiRequest, NextApiResponse } from 'next';
import slug from 'slug';
import { prismaClient } from 'tcl-packages/prismaClient';
import { Content, ContentCreateInput } from 'types';

type Fields = {
  projectSlug: string;
  content: string;
  title: string;
  summary: string;
  userId: string;
  articleId: string;
  isUpdate: boolean;
} & ContentCreateInput;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const requestHandler = request(req, res);
  const responseHandler = response(res);

  const createArticle = async (auth: Auth) => {
    if (!auth.isAdmin || auth.roles.find((role) => role.isEditor)?.isEditor === false) {
      return responseHandler.unauthorized();
    }

    const formData = await handleFormData<Fields>(req);

    if (!formData) {
      return responseHandler.forbidden();
    }

    const { projectSlug, content, title, summary, userId, isUpdate, articleId } = formData.fields;

    if (!userId) {
      return responseHandler.forbidden();
    }

    const project = await prismaClient?.project.findFirst({
      where: {
        slug: {
          equals: projectSlug,
        },
      },
      select: {
        id: true,
      },
    });

    const article = isUpdate
      ? await prismaClient?.content.findUnique({
          where: {
            id: articleId || undefined,
          },
        })
      : undefined;

    const canManageProject = await prismaClient?.user.findFirst({
      where: {
        id: userId,
      },
      select: {
        managedProjects: {
          where: {
            id: project?.id || undefined,
          },
        },
        projects: {
          where: {
            id: project?.id || undefined,
          },
        },
      },
    });

    const canEditArticle = isUpdate ? article?.userId === userId : undefined;

    if (!auth.isAdmin || !!canManageProject === false || canEditArticle === false) {
      return responseHandler.forbidden();
    }

    const blogBlock = await prismaClient?.contentBlock.findFirst({
      where: {
        blockName: {
          equals: 'blog',
        },
      },
      select: {
        id: true,
      },
    });

    const imageData = await handleImageUpload<Content>({
      image: formData.files.image as FileType,
      prefix: 'image',
      isUpdate,
      instance: (article as Content) || null,
    });

    const articleData = {
      title,
      slug: slug(title || ''),
      enabled: true,
      summary,
      richContent: content,
      projectId: project?.id || undefined,
      blockNameId: blogBlock?.id || undefined,
      userId: userId || undefined,
      ...imageData,
    };

    if (isUpdate) {
      const data = await prismaClient?.content.update({
        where: {
          id: articleId,
        },
        data: {
          ...articleData,
        },
        select: {
          slug: true,
        },
      });

      if (!data) {
        return responseHandler.badRequest();
      }

      return responseHandler.ok(data);
    }

    const data = await prismaClient?.content.create({
      data: {
        ...articleData,
      },
      select: {
        slug: true,
      },
    });

    if (!data) {
      return responseHandler.badRequest();
    }

    return responseHandler.ok(data);
  };

  return requestHandler.signedPost(createArticle);
}

export const config = formDataConfig;
