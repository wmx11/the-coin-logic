// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { startOfDay } from 'date-fns';
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../data/prisma';

export type ProjectRatings = {
  positive?: number;
  negative?: number;
  total?: number;
  positivePercentage?: number;
  negativePercentage?: number;
  ratings: {} | null;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ProjectRatings>) {
  const { method, body } = req;
  const { project } = body;

  if (method === 'POST') {
    if (!project) {
      return res.status(405).end('Not allowed');
    }

    try {
      const ratings = await prisma.projectRating.groupBy({
        by: ['rating'],
        _count: {
          rating: true,
        },
        where: {
          projectId: project.id,
          dateAdded: {
            gte: startOfDay(new Date()),
          },
        },
      });

      if (ratings.length < 1) {
        return res.status(200).json({ ratings: null });
      }

      const positive = ratings.find((item) => item.rating === 1)?._count.rating || 0;
      const negative = ratings.find((item) => item.rating === 0)?._count.rating || 0;
      const total = positive + negative;
      const positivePercentage = Math.floor((positive / total) * 100);
      const negativePercentage = Math.floor((negative / total) * 100);

      return res.status(200).json({
        ratings: {
          positive,
          negative,
          total,
          positivePercentage,
          negativePercentage,
        },
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  return res.status(405).end('Not allowed');
}
