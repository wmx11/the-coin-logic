// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import request, { Auth } from 'data/api/request';
import { response } from 'data/api/response';
import type { NextApiRequest, NextApiResponse } from 'next';
import { prismaClient } from 'tcl-packages/prismaClient';
import slug from 'slug';
import { formDataConfig, handleFormData } from 'data/api/utils/handleFormData';
import { ContentCreateInput } from 'types';
import sharp from 'sharp';
import { v4 as uuidv4 } from 'uuid';
import { resolveImagePaths } from 'utils/utils';

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

    const project = await prismaClient.project.findFirst({
      where: {
        slug: {
          equals: projectSlug,
        },
      },
      select: {
        id: true,
      },
    });

    const article = await prismaClient.content.findUnique({
      where: {
        id: articleId,
      },
    });

    const canManageProject = await prismaClient.user.findFirst({
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

    const blogBlock = await prismaClient.contentBlock.findFirst({
      where: {
        blockName: {
          equals: 'blog',
        },
      },
      select: {
        id: true,
      },
    });

    const imageData = formData.files.image;

    const image = imageData && sharp(imageData?.path);
    const metaData = imageData && (await image?.metadata());
    const imageName = uuidv4();

    const imageDataObj = {
      image_id: imageData ? imageName : article?.image_id || undefined,
      image_extension: imageData ? metaData?.format : article?.image_extension || undefined,
      image_filesize: imageData ? imageData?.size : article?.image_filesize || undefined,
      image_height: imageData ? metaData?.height : article?.image_height || undefined,
      image_width: imageData ? metaData?.width : article?.image_width || undefined,
    };

    const articleData = {
      title,
      slug: slug(title || ''),
      enabled: true,
      summary,
      richContent: content,
      projectId: project?.id || undefined,
      blockNameId: blogBlock?.id || undefined,
      userId: userId || undefined,
      ...imageDataObj,
    };

    if (imageData) {
      await image?.toFile(`${resolveImagePaths().images}/${imageName}.${metaData?.format}`);
    }

    if (isUpdate) {
      const data = await prismaClient.content.update({
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

    const data = await prismaClient.content.create({
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
