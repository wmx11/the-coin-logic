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

  const followCreator = async () => {
    const { id, userId } = req.body;

    if (!id || !userId) {
      return responseHandler.badRequest();
    }

    const follow = await prismaClient?.provider.findFirst({
      where: {
        id,
        followers: {
          some: {
            id: userId,
          },
        },
      },
    });

    const action = follow
      ? {
          disconnect: {
            id: userId,
          },
        }
      : {
          connect: {
            id: userId,
          },
        };

    const data = await prismaClient?.provider.update({
      where: {
        id,
      },
      data: {
        followers: {
          ...action,
        },
      },
      select: {
        id: true,
        _count: {
          select: {
            followers: true,
          },
        },
      },
    });

    return responseHandler.ok(data);
  };

  return requestHandler.signedPost(followCreator);
}
