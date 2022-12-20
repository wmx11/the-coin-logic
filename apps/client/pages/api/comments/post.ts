// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import request from 'data/api/request';
import { response } from 'data/api/response';
import type { NextApiRequest, NextApiResponse } from 'next';
import { prismaClient } from 'tcl-packages/prismaClient';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const requestHandler = request(req, res);
  const responseHandler = response(res);

  const postComment = async () => {
    const { content, sentiment, userId, projectId, creatorId } = req.body;

    if (!content || !userId) {
      return responseHandler.badRequest();
    }

    const data = await prismaClient.comment.create({
      data: {
        content,
        sentiment: parseInt(sentiment, 10),
        projectId: projectId || undefined,
        creatorId: creatorId || undefined,
        userId,
      },
      include: {
        user: {
          select: {
            name: true,
          }
        }
      }
    });

    return responseHandler.ok(data);
  };

  return requestHandler.signedPost(postComment);
}
