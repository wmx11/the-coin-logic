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

  const viewQuiz = async () => {
    const { id } = req.body;

    if (!id) {
      return responseHandler.badRequest();
    }

    const quiz = await prismaClient.quiz.findUnique({
      where: {
        id,
      },
    });

    if (!quiz) {
      return responseHandler.badRequest('Quiz not found.');
    }

    const data = await prismaClient.quiz.update({
      where: {
        id,
      },
      data: {
        views: (quiz?.views || 0) + 1,
      },
      select: {
        views: true,
      },
    });

    return responseHandler.ok(data);
  };

  return requestHandler.post(viewQuiz);
}
