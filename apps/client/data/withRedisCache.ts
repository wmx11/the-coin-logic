import Redis from 'ioredis';

const connectionStringProd = process.env.REDIS_USERNAME
  ? `redis://${process.env.REDIS_USERNAME}:${process.env.REDIS_PASSWORD}@${process.env.REDIS_HOST}:${process.env.REDIS_PORT}/0`
  : {};

const conenctionString =
  process.env.NODE_ENV !== 'production'
    ? `redis://:${process.env.REDIS_PASSWORD}@${process.env.REDIS_HOST}:${process.env.REDIS_PORT}/0`
    : connectionStringProd;

let redis: Redis | null = null;

try {
  redis = new Redis(conenctionString);
} catch (error) {
  console.log(error);
}

const withRedisCache = async (cacheKey: string, cb: () => Promise<any>, expire?: number) => {
  if (!redis) {
    return cb();
  }

  if (!cacheKey) {
    return cb();
  }

  const cachedData = await redis.get(cacheKey);

  if (cachedData) {
    return JSON.parse(cachedData);
  }

  const data = await cb();

  if (!data) {
    return null;
  }

  const cacheStatus = await redis.set(cacheKey, JSON.stringify(data));

  if (!cacheStatus) {
    return data;
  }

  // Add 5 minute expiry time
  await redis.expire(cacheKey, expire || 5 * 60);

  return data;
};

export default withRedisCache;
