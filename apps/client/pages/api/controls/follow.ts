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

  const handleFollow = async () => {
    const { userId, providerId } = req.body;

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
      followers: {
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
        followers: {
          ...getAction(data),
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

    // PROVIDERS ON NEXUS
    if (providerId) {
      const entry = await prismaClient?.provider.findFirst({
        where: { ...getFinder(providerId) },
      });

      const data = await prismaClient?.provider.update({
        ...getUpdater(providerId, entry),
      });

      return responseHandler.ok({ ...data, ...getAction(entry) });
    }

    return responseHandler.ok();
  };

  return requestHandler.signedPost(handleFollow);
}
