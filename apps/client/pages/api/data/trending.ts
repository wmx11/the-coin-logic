import request from 'data/api/request';
import { response } from 'data/api/response';
import applyRateLimit from 'data/api/utils/applyRateLimit';
import {
  transformDataForTrendingProjects
} from 'data/api/utils/transformDataForCharts';
import { NextApiRequest, NextApiResponse } from 'next';
import { MarketStat, prismaClient } from 'tcl-packages/prismaClient';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const requestHandler = request(req, res);
  const responseHandler = response(res);

  try {
    await applyRateLimit(req, res);
  } catch (error) {
    return responseHandler.tooManyRequests(JSON.stringify(error));
  }

  const getTrendingProjects = async () => {
    const projects = await prismaClient?.marketStat?.findMany({
      where: {
        priceChange24Percentage: {
          not: null,
        },
      },
      distinct: ['projectId'],
      orderBy: [
        {
          priceChange24Percentage: 'desc',
        },
        {
          dateAdded: 'desc',
        },
      ],
      take: 5,
      select: {
        priceChange24Percentage: true,
        project: {
          select: {
            id: true,
            name: true,
            slug: true,
            logo_id: true,
            logo_extension: true,
            promotion: true
          },
        },
      },
    });

    const transformedData = await transformDataForTrendingProjects(projects as unknown as MarketStat[]);

    return responseHandler.ok({ data: transformedData });
  };

  return requestHandler.post(getTrendingProjects);
};

export default handler;
