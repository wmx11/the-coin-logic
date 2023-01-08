// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import request from 'data/api/request';
import { response } from 'data/api/response';
import applyRateLimit from 'data/api/utils/applyRateLimit';
import { HandleViewAndLikeTypes } from 'hooks/useControls';
import type { NextApiRequest, NextApiResponse } from 'next';
import { prismaClient } from 'tcl-packages/prismaClient';
import { Content, Provider, Quiz, Transcription } from 'types';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const requestHandler = request(req, res);
  const responseHandler = response(res);

  try {
    await applyRateLimit(req, res);
  } catch (error) {
    return responseHandler.tooManyRequests(JSON.stringify(error));
  }

  const addView = async () => {
    const { articleId, providerId, transcriptionId, quizId }: HandleViewAndLikeTypes = req.body;

    const getUpdater = <T>(id: string, data: T) => ({
      where: {
        id: id || '',
      },
      data: {
        views: ((data as unknown as { views: number })?.views || 0) + 1,
      },
      select: {
        views: true,
      },
    });

    if (articleId) {
      const data = await prismaClient?.content.findUnique({
        where: {
          id: articleId || '',
        },
      });

      await prismaClient?.content.update({
        ...getUpdater<Content>(articleId, data as Content),
      });

      return responseHandler.ok();
    }

    if (providerId) {
      const data = await prismaClient?.provider.findUnique({
        where: {
          id: providerId || '',
        },
      });

      await prismaClient?.provider.update({
        ...getUpdater<Provider>(providerId, data as Provider),
      });

      return responseHandler.ok();
    }

    if (transcriptionId) {
      const data = await prismaClient?.transcription.findUnique({
        where: {
          id: transcriptionId || '',
        },
      });

      await prismaClient?.transcription.update({
        ...getUpdater<Transcription>(transcriptionId, data as Transcription),
      });

      return responseHandler.ok();
    }

    if (quizId) {
      const data = await prismaClient?.quiz.findUnique({
        where: {
          id: quizId || '',
        },
      });

      await prismaClient?.quiz.update({
        ...getUpdater<Quiz>(quizId, data as Quiz),
      });

      return responseHandler.ok();
    }

    return responseHandler.ok();
  };

  return requestHandler.post(addView);
}
