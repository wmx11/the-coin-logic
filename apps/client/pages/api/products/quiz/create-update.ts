// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import request, { Auth } from 'data/api/request';
import { response } from 'data/api/response';
import { formDataConfig, handleFormData } from 'data/api/utils/handleFormData';
import { isProjectEditor } from 'data/api/utils/isProjectEditor';
import type { NextApiRequest, NextApiResponse } from 'next';
import sharp from 'sharp';
import slug from 'slug';
import { prismaClient } from 'tcl-packages/prismaClient';
import { QuizCreateInput } from 'types';
import { resolveImagePaths } from 'utils/utils';
import { v4 as uuidv4 } from 'uuid';

type Fields = {
  projectSlug: string;
  content: string;
  title: string;
  summary: string;
  userId: string;
  articleId: string;
  isUpdate: boolean;
} & QuizCreateInput;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const requestHandler = request(req, res);
  const responseHandler = response(res);

  const createUpdateQuiz = async (auth: Auth) => {
    if (!auth.isAdmin || auth.roles.find((role) => role.isEditor)?.isEditor === false) {
      return responseHandler.unauthorized();
    }

    const formData = await handleFormData<Fields>(req);

    if (!formData) {
      return responseHandler.forbidden();
    }

    const {
      title,
      enabled,
      hasRewards,
      rewardsAmount,
      rewardType,
      description,
      onWinDescription,
      onEndDescription,
      totalWinners,
      timePerQuestion,
      startDate,
      endDate,
      config,
      projectId,
      quizId,
      userId,
      isUpdate,
    } = formData.fields;

    if (!userId) {
      return responseHandler.forbidden();
    }

    const project = await prismaClient?.project.findUnique({
      where: {
        id: projectId,
      },
      select: {
        id: true,
      },
    });

    const quiz = isUpdate
      ? await prismaClient?.quiz.findUnique({
          where: {
            id: quizId || undefined,
          },
        })
      : undefined;

    const canManageProject = await isProjectEditor({ userId: userId as string, projectId: project?.id as string });

    const canEditQuiz = isUpdate ? quiz?.userId === userId : undefined;

    if (!auth.isAdmin || canManageProject === false || canEditQuiz === false) {
      return responseHandler.forbidden();
    }

    const imageData = formData.files.image;

    const image = imageData && sharp(imageData?.path);
    const metaData = imageData && (await image?.metadata());
    const imageName = uuidv4();

    const imageDataObj = {
      image_id: imageData ? imageName : quiz?.image_id || undefined,
      image_extension: imageData ? metaData?.format : quiz?.image_extension || undefined,
      image_filesize: imageData ? imageData?.size : quiz?.image_filesize || undefined,
      image_height: imageData ? metaData?.height : quiz?.image_height || undefined,
      image_width: imageData ? metaData?.width : quiz?.image_width || undefined,
    };

    const quizData = {
      title,
      slug: slug(title || ''),
      enabled,
      hasRewards,
      rewardsAmount: parseInt(rewardsAmount, 10),
      rewardType,
      description,
      onWinDescription,
      onEndDescription,
      totalWinners: parseInt(totalWinners, 10),
      timePerQuestion,
      startDate: startDate ? new Date(startDate) : undefined,
      endDate: endDate ? new Date(endDate) : undefined,
      config,
      projectId: project?.id || undefined,
      userId: userId || undefined,
      ...imageDataObj,
    };

    if (imageData) {
      await image?.toFile(`${resolveImagePaths().images}/${imageName}.${metaData?.format}`);
    }

    if (isUpdate) {
      const data = await prismaClient?.quiz.update({
        where: {
          id: quizId,
        },
        data: {
          ...quizData,
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

    const data = await prismaClient?.quiz.create({
      data: {
        ...quizData,
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

  return requestHandler.signedPost(createUpdateQuiz);
}

export const config = formDataConfig;
