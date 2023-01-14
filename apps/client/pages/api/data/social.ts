import request, { IsSafeAuth } from 'data/api/request';
import { response } from 'data/api/response';
import applyRateLimit from 'data/api/utils/applyRateLimit';
import { NextApiRequest, NextApiResponse } from 'next';
import config from 'tcl-packages/email/config';
import emailClient from 'tcl-packages/email/emailClient';
import { prismaClient } from 'tcl-packages/prismaClient';
import { MarketStat, SocialStat } from 'types';
import { redis } from 'data/redis';
import { TransformedChartsData } from 'types/Charts';
import { transformDataForMetricsCharts } from 'data/api/utils/transformDataForCharts';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const requestHandler = request(req, res);
  const responseHandler = response(res);

  try {
    await applyRateLimit(req, res);
  } catch (error) {
    return responseHandler.tooManyRequests(JSON.stringify(error));
  }
  // auth: IsSafeAuth
  const getMarketData = async () => {
    // if (!auth.trusted || auth.signature !== 'market_data') {
    //   return responseHandler.unauthorized();
    // }

    let redisInstance;

    if (redis) {
      redisInstance = redis;
    }

    const { selector, projectId } = req.body;

    const cacheKey = `${projectId}_${selector}`;

    if (redisInstance !== undefined) {
      const cachedData = await redisInstance?.get(cacheKey);

      let results;

      if (cachedData) {
        results = JSON.parse(cachedData) as TransformedChartsData;
        const hasNoResults = results?.data?.length < 1;
        const lastResult = results?.data[results?.data?.length - 1];

        let newData;

        if (hasNoResults || lastResult) {
          newData = await prismaClient?.socialStat.findMany({
            where: {
              projectId,
              ...(hasNoResults
                ? {}
                : {
                    dateAdded: {
                      gt: new Date(lastResult[0]),
                    },
                  }),
            },
            orderBy: {
              dateAdded: 'asc',
            },
            select: {
              [selector]: true,
              annotation: true,
              dateAdded: true,
            },
          });
        }

        if (newData && newData.length > 0) {
          const transformedData = transformDataForMetricsCharts<SocialStat>(newData as SocialStat[], selector);
          results.data.push(...transformedData.data);
          results.annotation.push(...transformedData.annotation);
          await redisInstance.set(cacheKey, JSON.stringify(results));
        }

        return responseHandler.ok({ data: results });
      }
    }

    const data = await prismaClient?.socialStat.findMany({
      where: {
        projectId: projectId,
      },
      orderBy: {
        dateAdded: 'asc',
      },
      select: {
        [selector]: true,
        annotation: true,
        dateAdded: true,
      },
    });

    const transformedData = transformDataForMetricsCharts<SocialStat>(data as SocialStat[], selector);

    if (redisInstance !== undefined) {
      await redisInstance?.set(cacheKey, JSON.stringify(transformedData));
    }

    return responseHandler.ok({ data: transformedData });
  };

  return requestHandler.post(getMarketData);
};

export default handler;
