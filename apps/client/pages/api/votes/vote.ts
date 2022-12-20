// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import request from 'data/api/request';
import { response } from 'data/api/response';
import type { NextApiRequest, NextApiResponse } from 'next';
import routes from 'routes';
import { prismaClient } from 'tcl-packages/prismaClient';
import { getIpAddress } from 'utils/utils';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const requestHandler = request(req, res);
  const responseHandler = response(res);

  const ip = getIpAddress(req);

  const vote = async () => {
    const { value, type, projectId, userId, creatorId } = req.body;

    if (value === undefined || !type) {
      return responseHandler.forbidden();
    }

    if (type === 'vote' || type === 'transparency') {
      const { data } = await axios.post(routes.api.votes.voteCheck, {
        ...req.body,
        ip,
      });

      if (data?.data?.canVote === false) {
        return responseHandler.forbidden();
      }
    }

    const data = await prismaClient?.vote.create({
      data: {
        vote: parseInt(value, 10),
        type,
        ip,
        userId: userId || undefined,
        projectId: projectId || undefined,
        creatorId: creatorId || undefined,
      },
    });

    return responseHandler.ok(data);
  };

  return requestHandler.post(vote);
}
