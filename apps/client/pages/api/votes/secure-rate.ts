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

  const secureRate = async () => {
    const { value, userId, providerId } = req.body;

    if (value === undefined) {
      return responseHandler.forbidden();
    }

    const hasVoted = await prismaClient?.vote.findFirst({
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
    });

    if (hasVoted) {
      return responseHandler.forbidden('You can only rate once.');
    }

    const parsedValue = parseInt(value, 10);
    const rating = parsedValue > 5 ? 5 : parsedValue < 0 ? 1 : parsedValue;

    const data = await prismaClient?.vote.create({
      data: {
        vote: rating,
        type: 'rating',
        ip,
        userId: userId || undefined,
        providerId: providerId || undefined,
      },
    });

    if (providerId) {
      const votesCount = await prismaClient?.vote.count({
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
      });

      const averageRating = await prismaClient?.vote.aggregate({
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
      });

      return responseHandler.ok({ votesCount, averageRating: Math.round((averageRating?._avg?.vote as number) || 0) });
    }

    return responseHandler.ok(data);
  };

  return requestHandler.signedPost(secureRate);
}
