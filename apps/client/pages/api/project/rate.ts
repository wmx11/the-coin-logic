// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import routes from 'routes';
import { getIpAddress, sanitizeIp } from 'utils/utils';
import prisma from '../../../data/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req;
  const { rating, project, user } = body;

  const ip = getIpAddress(req);
  const sanitizedIp = sanitizeIp(ip as string);

  const rateProject = async () => {
    if (!rating || !project) {
      return res.status(405).end('Not allowed');
    }

    try {
      const { data } = await axios.post(routes.api.project.rateCheck, {
        project,
        user,
      });

      if (data?.isRatedToday) {
        return;
      }

      await prisma.projectRating.create({
        data: {
          rating: parseInt(rating, 10),
          ip: sanitizedIp,
          userId: user?.id || undefined,
          projectId: project?.id,
        },
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  switch (method) {
    case 'POST':
      rateProject();
      return res.status(200).end('Ok');
    default:
      return res.status(405).end('Not allowed');
  }
}
