// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { isToday } from 'date-fns';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getIpAddress, sanitizeIp } from 'utils/utils';
import prisma from '../../../data/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req;
  const { project, user } = body;

  const ip = getIpAddress(req);
  const sanitizedIp = sanitizeIp(ip as string);

  if (method === 'POST') {
    if (!project) {
      return res.status(405).end('Not allowed');
    }

    try {
      const existingRating = await prisma.projectRating.findFirst({
        orderBy: {
          dateAdded: 'desc',
        },
        where: {
          ip: {
            equals: sanitizedIp,
          },
          projectId: project?.id,
          userId: user?.id || undefined,
        },
      });

      if (existingRating) {
        const isRatedToday = isToday(new Date(existingRating.dateAdded as Date));
        return res.status(200).json({ isRatedToday });
      }

      return res.status(200).json({ isRatedToday: false });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  return res.status(405).end('Not allowed');
}
