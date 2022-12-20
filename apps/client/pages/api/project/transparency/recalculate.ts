// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import request, { Auth } from 'data/api/request';
import { response } from 'data/api/response';
import type { NextApiRequest, NextApiResponse } from 'next';
import { prismaClient } from 'tcl-packages/prismaClient';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const requestHandler = request(req, res);
  const responseHandler = response(res);

  const recalculate = async (auth: Auth) => {
    if (!auth.isAdmin) {
      return responseHandler.unauthorized();
    }

    const { rating, id } = req.body;

    if (rating === undefined) {
      return responseHandler.forbidden();
    }

    const data = await prismaClient?.project.update({
      data: {
        transparencyScore: parseInt(rating, 10),
      },
      where: {
        id,
      },
      select: { transparencyScore: true },
    });

    if (!data) {
      return responseHandler.badRequest();
    }

    return responseHandler.ok(data);
  };

  return requestHandler.signedPost(recalculate);
}
