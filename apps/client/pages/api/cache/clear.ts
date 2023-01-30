import request from 'data/api/request';
import { response } from 'data/api/response';
import applyRateLimit from 'data/api/utils/applyRateLimit';
import { redis } from 'data/redis';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const requestHandler = request(req, res);
  const responseHandler = response(res);

  try {
    await applyRateLimit(req, res);
  } catch (error) {
    return responseHandler.tooManyRequests(JSON.stringify(error));
  }

  const clearCache = async () => {
    let redisInstance;

    if (redis) {
      redisInstance = redis;
    }

    const { cacheKey } = req.body;

    if (redisInstance === undefined) {
      return responseHandler.ok({}, 'Cache is not available');
    }

    try {
      await redisInstance.del(cacheKey);
      return responseHandler.ok({}, `${cacheKey} Cache cleared`);
    } catch (error) {
      return responseHandler.ok({ error });
    }
  };

  return requestHandler.post(clearCache);
};

export default handler;
