// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import request, { Auth } from 'data/api/request';
import { response } from 'data/api/response';
import type { NextApiRequest, NextApiResponse } from 'next';
import { prismaClient } from 'tcl-packages/prismaClient';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const requestHandler = request(req, res);
  const responseHandler = response(res);

  const removeComment = async (auth: Auth) => {
    const { id } = req.body;

    if (!id) {
      return responseHandler.badRequest();
    }

    if (!auth.isAdmin) {
      return responseHandler.forbidden();
    }

    const data = await prismaClient?.comment.delete({
      where: {
        id,
      },
    });

    return responseHandler.ok(data);
  };

  return requestHandler.signedPost(removeComment);
}
