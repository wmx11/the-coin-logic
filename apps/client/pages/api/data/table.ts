import request from 'data/api/request';
import { response } from 'data/api/response';
import applyRateLimit from 'data/api/utils/applyRateLimit';
import { transformDataForProjectsTable } from 'data/api/utils/transformDataForCharts';
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

  const getProjectsDataForTable = async () => {
    const projects = await prismaClient?.project.findMany({
      where: {
        enabled: true,
        isListed: true,
        isPreLaunch: false,
        isNft: false,
      },
      select: {
        id: true,
        name: true,
        slug: true,
        logo_id: true,
        logo_extension: true,
        transparencyScore: true,
        network: {
          select: {
            name: true,
            logo_id: true,
            logo_extension: true,
          },
        },
        kycBy: {
          select: {
            url: true,
            kycGroup: {
              select: {
                name: true,
                image_id: true,
                image_extension: true,
              },
            },
          },
        },
        auditBy: {
          select: {
            url: true,
            auditor: {
              select: {
                name: true,
                image_id: true,
                image_extension: true,
              },
            },
          },
        },
        paymentPlan: {
          select: {
            name: true,
            slug: true,
            tooltip: true,
          },
        },
        promotion: true
      },
    });

    const transformedData = await transformDataForProjectsTable(projects as unknown as Project[]);

    return responseHandler.ok({ data: transformedData });
  };

  return requestHandler.post(getProjectsDataForTable);
};

export default handler;
