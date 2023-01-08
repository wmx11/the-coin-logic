// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import request from 'data/api/request';
import { response } from 'data/api/response';
import applyRateLimit from 'data/api/utils/applyRateLimit';
import type { NextApiRequest, NextApiResponse } from 'next';
import { prismaClient } from 'tcl-packages/prismaClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const requestHandler = request(req, res);
  const responseHandler = response(res);

  try {
    await applyRateLimit(req, res);
  } catch (error) {
    return responseHandler.tooManyRequests(JSON.stringify(error));
  }

  const handleLike = async () => {
    const { userId, articleId, transcriptionId, commentId, quizId } = req.body;

    if (!userId) {
      return responseHandler.badRequest();
    }

    const getAction = (data: unknown) => {
      if (data) {
        return {
          disconnect: {
            id: userId,
          },
        };
      }

      return {
        connect: {
          id: userId,
        },
      };
    };

    const getFinder = (id: string) => ({
      id: id || '',
      likes: {
        some: {
          id: userId || '',
        },
      },
    });

    const getUpdater = (id: string, data: unknown) => ({
      where: {
        id: id || '',
      },
      data: {
        likes: {
          ...getAction(data),
        },
      },
      select: {
        id: true,
        _count: {
          select: {
            likes: true,
          },
        },
      },
    });

    // ARTICLES AND CONTENT
    if (articleId) {
      const entry = await prismaClient?.content.findFirst({
        where: { ...getFinder(articleId) },
      });

      const data = await prismaClient?.content.update({
        ...getUpdater(articleId, entry),
      });

      return responseHandler.ok(data);
    }

    // TRANSCRIPTIONS
    if (transcriptionId) {
      const entry = await prismaClient?.transcription.findFirst({
        where: { ...getFinder(transcriptionId) },
      });

      const data = await prismaClient?.transcription.update({
        ...getUpdater(transcriptionId, entry),
      });

      return responseHandler.ok(data);
    }

    // COMMENTS
    if (commentId) {
      const entry = await prismaClient?.comment.findFirst({
        where: { ...getFinder(commentId) },
      });

      const data = await prismaClient?.comment.update({
        ...getUpdater(commentId, entry),
      });

      return responseHandler.ok(data);
    }

    // QUIZZES
    if (quizId) {
      const entry = await prismaClient?.quiz.findFirst({
        where: { ...getFinder(quizId) },
      });

      const data = await prismaClient?.quiz.update({
        ...getUpdater(quizId, entry),
      });

      return responseHandler.ok(data);
    }

    return responseHandler.ok();
  };

  return requestHandler.signedPost(handleLike);
}
