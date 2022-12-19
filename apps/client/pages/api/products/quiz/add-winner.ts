// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import request, { IsSafeAuth } from 'data/api/request';
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

  const addWinner = async (auth: IsSafeAuth) => {
    const { id } = req.body;

    if (!id || (auth.signature !== 'add_property' && !auth.trusted)) {
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

    if (quiz.winners === (quiz?.winners as number) + 1) {
      return responseHandler.badRequest();
    }

    const data = await prismaClient.quiz.update({
      where: {
        id,
      },
      data: {
        winners: (quiz?.winners || 0) + 1,
      },
      select: {
        winners: true,
      },
    });

    return responseHandler.ok(data);
  };

  return requestHandler.safePost(addWinner);
}
