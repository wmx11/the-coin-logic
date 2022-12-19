// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import request from 'data/api/request';
import { response } from 'data/api/response';
import { isToday } from 'date-fns';
import type { NextApiRequest, NextApiResponse } from 'next';
import { prismaClient } from 'tcl-packages/prismaClient';
import { getIpAddress } from 'utils/utils';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const requestHandler = request(req, res);
  const responseHandler = response(res);

  const ipAddress = getIpAddress(req);

  const checkIfUserCanVoteAgain = async () => {
    const { projectId, creatorId, userId, type, ip } = req.body;

    const vote = await prismaClient.vote.findFirst({
      where: {
        ip: {
          equals: ip ? ip : ipAddress,
        },
        type: {
          equals: type,
        },
        projectId: projectId || undefined,
        creatorId: creatorId || undefined,
        userId: userId || undefined,
      },
      orderBy: {
        dateAdded: 'desc',
      },
    });

    return responseHandler.ok({ canVote: vote ? !isToday(new Date(vote.dateAdded as Date)) : true });
  };

  return requestHandler.post(checkIfUserCanVoteAgain);
}
