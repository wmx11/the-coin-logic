import request from 'data/api/request';
import { response } from 'data/api/response';
import applyRateLimit from 'data/api/utils/applyRateLimit';
import {
  transformDataForUpcomingProjectsTable
} from 'data/api/utils/transformDataForCharts';
import { NextApiRequest, NextApiResponse } from 'next';
import { prismaClient } from 'tcl-packages/prismaClient';
import { Project } from 'types';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const requestHandler = request(req, res);
  const responseHandler = response(res);

  try {
    await applyRateLimit(req, res);
  } catch (error) {
    return responseHandler.tooManyRequests(JSON.stringify(error));
  }

  const getUpcomingProjectsDataForTable = async () => {
    const { take } = req.body;

    const projects = await prismaClient?.project.findMany({
      where: {
        enabled: true,
        isListed: true,
        isPreLaunch: true,
      },
      ...(take ? { take } : {}),
      select: {
        id: true,
        name: true,
        isNft: true,
        slug: true,
        launchDate: true,
        preLaunchInformation: true,
        logo_id: true,
        logo_extension: true,
        network: {
          select: {
            name: true,
            logo_id: true,
            logo_extension: true,
          },
        },
        promotion: true
      },
    });

    const transformedData = await transformDataForUpcomingProjectsTable(projects as unknown as Project[]);

    return responseHandler.ok({ data: transformedData });
  };

  return requestHandler.post(getUpcomingProjectsDataForTable);
};

export default handler;
