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

  const viewArticle = async () => {
    const { id } = req.body;

    if (!id) {
      return responseHandler.badRequest();
    }

    const article = await prismaClient.content.findUnique({
      where: {
        id,
      },
    });

    if (!article) {
      return responseHandler.badRequest('Article not found.');
    }

    const data = await prismaClient.content.update({
      where: {
        id,
      },
      data: {
        views: (article?.views || 0) + 1,
      },
      select: {
        views: true,
      },
    });

    return responseHandler.ok(data);
  };

  return requestHandler.post(viewArticle);
}
