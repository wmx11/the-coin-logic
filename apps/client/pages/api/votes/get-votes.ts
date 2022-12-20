// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import request from 'data/api/request';
import { response } from 'data/api/response';
import { startOfDay } from 'date-fns';
import type { NextApiRequest, NextApiResponse } from 'next';
import { prismaClient } from 'tcl-packages/prismaClient';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const requestHandler = request(req, res);
  const responseHandler = response(res);

  const getVotes = async () => {
    const { type, projectId, creatorId, isStartOfDay } = req.body;

    const selectStartOfDay = isStartOfDay ? { dateAdded: { gte: startOfDay(new Date()) } } : {};

    const votes = await prismaClient?.vote.groupBy({
      by: ['vote'],
      _count: {
        vote: true,
      },
      where: {
        type: {
          equals: type,
        },
        projectId: projectId || undefined,
        creatorId: creatorId || undefined,
        ...selectStartOfDay,
      },
    });

    if (!isStartOfDay) {
      return responseHandler.ok(votes);
    }

    const positive = votes.find((item) => item.vote === 1)?._count.vote || 0;
    const negative = votes.find((item) => item.vote === 0)?._count.vote || 0;
    const total = positive + negative;
    const positivePercentage = Math.floor((positive / total) * 100);
    const negativePercentage = Math.floor((negative / total) * 100);

    return responseHandler.ok({
      votes: {
        positive,
        negative,
        total,
        positivePercentage,
        negativePercentage,
      },
    });
  };

  return requestHandler.post(getVotes);
}
