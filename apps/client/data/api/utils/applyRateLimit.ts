import { NextApiRequest, NextApiResponse } from 'next';
import rateLimit from 'express-rate-limit';
import applyMiddleware from './applyMiddleware';
import { getIpAddress } from 'utils/utils';

async function applyRateLimit(request: NextApiRequest, response: NextApiResponse) {
  const middlewares = rateLimit({ keyGenerator: getIpAddress, windowMs: 60 * 1000, max: 80 });
  await applyMiddleware(middlewares)(request, response);
}

export default applyRateLimit;
