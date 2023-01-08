// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import request from 'data/api/request';
import { response } from 'data/api/response';
import type { NextApiRequest, NextApiResponse } from 'next';
import { prismaClient } from 'tcl-packages/prismaClient';
import { getIpAddress } from 'utils/utils';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const requestHandler = request(req, res);
  const responseHandler = response(res);

  const ip = getIpAddress(req);

  const getRatings = async () => {
    const { userId, providerId } = req.body;

    const [hasVoted, votesCount, averageRating] = await Promise.all([
      prismaClient?.vote.findFirst({
        where: {
          AND: [
            {
              userId: userId || '',
              ip: ip || '',
            },
            {
              providerId: providerId || '',
            },
            {
              type: 'rating',
            },
          ],
        },
      }),
      prismaClient?.vote.count({
        where: {
          AND: [
            {
              providerId: providerId || '',
            },
            {
              type: 'rating',
            },
          ],
        },
      }),
      prismaClient?.vote.aggregate({
        _avg: {
          vote: true,
        },
        where: {
          AND: [
            {
              providerId: providerId || '',
            },
            {
              type: 'rating',
            },
          ],
        },
      }),
    ]);

    return responseHandler.ok({
      hasVoted,
      votesCount,
      averageRating: Math.round((averageRating?._avg?.vote as number) || 0),
    });
  };

  return requestHandler.post(getRatings);
}
