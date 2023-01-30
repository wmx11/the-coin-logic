import { REDIS_METRICS_DATA_EXPIRATION } from 'constants/general';
import request from 'data/api/request';
import { response } from 'data/api/response';
import applyRateLimit from 'data/api/utils/applyRateLimit';
import {
  transformCustomTrackerDataForMetricsCharts
} from 'data/api/utils/transformDataForCharts';
import { redis } from 'data/redis';
import { NextApiRequest, NextApiResponse } from 'next';
import { MarketStat, prismaClient } from 'tcl-packages/prismaClient';
import { TransformedChartsData } from 'types/Charts';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const requestHandler = request(req, res);
  const responseHandler = response(res);

  try {
    await applyRateLimit(req, res);
  } catch (error) {
    return responseHandler.tooManyRequests(JSON.stringify(error));
  }

  const getCustomTrackerData = async () => {
    let redisInstance;

    if (redis) {
      redisInstance = redis;
    }

    const { projectId, trackerId } = req.body;

    const cacheKey = `${projectId}_custom_${trackerId}`;

    if (redisInstance !== undefined) {
      const cachedData = await redisInstance?.get(cacheKey);

      let results;

      if (cachedData) {
        results = JSON.parse(cachedData) as TransformedChartsData;
        const hasNoResults = results?.data?.length < 1;
        const lastResult = results?.data ? results?.data[results?.data?.length - 1] : false;

        let newData;

        if (hasNoResults || lastResult) {
          newData = await prismaClient?.marketStat.findMany({
            where: {
              projectId,
              ...(hasNoResults
                ? {}
                : {
                    dateAdded: {
                      gt: new Date(lastResult ? lastResult[0] : ''),
                    },
                  }),
            },
            orderBy: {
              dateAdded: 'asc',
            },
            select: {
              customTrackers: true,
              annotation: true,
              dateAdded: true,
            },
          });
        }

        if (newData && newData.length > 0) {
          const transformedData = transformCustomTrackerDataForMetricsCharts<MarketStat>(
            newData as MarketStat[],
            trackerId,
          );
          results.data.push(...transformedData.data);
          results.annotation.push(...transformedData.annotation);
          await redisInstance.set(cacheKey, JSON.stringify(results));
          await redisInstance.expire(cacheKey, REDIS_METRICS_DATA_EXPIRATION);
        }

        return responseHandler.ok({ data: results });
      }
    }

    const data = await prismaClient?.marketStat.findMany({
      where: {
        projectId: projectId,
      },
      orderBy: {
        dateAdded: 'asc',
      },
      select: {
        customTrackers: true,
        annotation: true,
        dateAdded: true,
      },
    });

    const transformedData = transformCustomTrackerDataForMetricsCharts<MarketStat>(data as MarketStat[], trackerId);

    if (redisInstance !== undefined) {
      await redisInstance?.set(cacheKey, JSON.stringify(transformedData));
      await redisInstance.expire(cacheKey, REDIS_METRICS_DATA_EXPIRATION);
    }

    return responseHandler.ok({ data: transformedData });
  };

  return requestHandler.post(getCustomTrackerData);
};

export default handler;
