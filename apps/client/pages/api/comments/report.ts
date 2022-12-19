// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import request from 'data/api/request';
import { response } from 'data/api/response';
import type { NextApiRequest, NextApiResponse } from 'next';
import { prismaClient } from 'tcl-packages/prismaClient';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const requestHandler = request(req, res);
  const responseHandler = response(res);

  const reportComment = async () => {
    const { id, userId } = req.body;

    if (!id || !userId) {
      return responseHandler.badRequest();
    }

    const data = await prismaClient.comment.update({
      where: {
        id,
      },
      data: {
        reports: {
          connect: {
            id: userId,
          },
        },
      },
      include: {
        _count: {
          select: {
            reports: true,
          },
        },
      },
    });

    return responseHandler.ok(data);
  };

  return requestHandler.signedPost(reportComment);
}
