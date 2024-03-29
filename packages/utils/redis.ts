import dotenv from 'dotenv';
import root from 'find-yarn-workspace-root';
import Redis from 'ioredis';

dotenv.config({ path: `${root()}/.env` });

const connectionStringProd = process.env.REDIS_USERNAME
  ? `redis://${process.env.REDIS_USERNAME}:${process.env.REDIS_PASSWORD}@${process.env.REDIS_HOST}:${process.env.REDIS_PORT}/0`
  : {};

export const redisConenctionString =
  process.env.NODE_ENV !== 'production'
    ? `redis://:${process.env.REDIS_PASSWORD}@${process.env.REDIS_HOST}:${process.env.REDIS_PORT}/0`
    : connectionStringProd;

export const redisClient = new Redis(redisConenctionString);

export const DISCORD_BOTS_CHANNEL = 'discord-bots';
export const DISOCRD_BOTS_STATS_CHANNEL = 'discord-bots-stats';
