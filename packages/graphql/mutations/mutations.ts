import { subHours, formatISO } from 'date-fns';
import { prismaClient } from 'tcl-packages/prismaClient';
import type { MarketStat, SocialStat } from '../../types';
import getChangesPartial from '../../utils/getChangesPartial';
import Redis from 'ioredis';
import { DISOCRD_BOTS_STATS_CHANNEL, redisConenctionString } from '../../utils/redis';

export const createMarketStats = async (marketStats: MarketStat): Promise<MarketStat | null> => {
  try {
    const lastDayMarketStats = await prismaClient?.marketStat.findFirst({
      where: {
        projectId: marketStats?.id || '',
        dateAdded: {
          lte: formatISO(subHours(new Date(), 24)),
        },
      },
      orderBy: {
        dateAdded: 'desc',
      },
    });

    const getChanges = getChangesPartial(marketStats, lastDayMarketStats || {});

    const createMarketStat = await prismaClient?.marketStat.create({
      data: {
        price: marketStats?.price,
        priceChange24: getChanges('price')?.priceChange?.change,
        priceChange24Percentage: getChanges('price')?.priceChange?.percentage,
        marketCap: marketStats?.marketCap,
        marketCapChange24: getChanges('marketCap')?.marketCapChange?.change,
        marketCapChange24Percentage: getChanges('marketCap')?.marketCapChange?.percentage,
        totalSupply: marketStats?.totalSupply,
        totalSupplyChange24: getChanges('totalSupply')?.totalSupplyChange?.change,
        totalSupplyChange24Percentage: getChanges('totalSupply')?.totalSupplyChange?.percentage,
        liquidity: marketStats?.liquidity,
        liquidityChange24: getChanges('liquidity')?.liquidityChange?.change,
        liquidityChange24Percentage: getChanges('liquidity')?.liquidityChange?.percentage,
        pairPrice: marketStats?.pairPrice,
        pairPriceChange24: getChanges('pairPrice')?.pairPriceChange?.change,
        pairPriceChange24Percentage: getChanges('pairPrice')?.pairPriceChange?.percentage,
        burnedTokens: marketStats?.burnedTokens,
        burnedTokensChange24: getChanges('burnedTokens')?.burnedTokensChange?.change,
        burnedTokensChange24Percentage: getChanges('burnedTokens')?.burnedTokensChange?.percentage,
        txns: marketStats?.txns || undefined,
        volume: marketStats?.volume || undefined,
        fdv: marketStats?.fdv || undefined,
        fdvChange24: getChanges('fdv')?.fdvChange?.change,
        fdvChange24Percentage: getChanges('fdv')?.fdvChange?.percentage,
        holders: marketStats?.holders,
        holdersChange24: getChanges('holders')?.holdersChange?.change,
        holdersChange24Percentage: getChanges('holders')?.holdersChange?.percentage,
        avgHoldings: marketStats?.avgHoldings,
        avgHoldingsChange24: getChanges('avgHoldings')?.avgHoldingsChange?.change,
        avgHoldingsChange24Percentage: getChanges('avgHoldings')?.avgHoldingsChange?.percentage,
        newHolders: marketStats?.newHolders,
        newHoldersChange24: getChanges('newHolders')?.newHoldersChange?.change,
        newHoldersChange24Percentage: getChanges('newHolders')?.newHoldersChange?.percentage,
        recurringHolders: marketStats?.recurringHolders,
        recurringHoldersChange24: getChanges('recurringHolders')?.recurringHoldersChange?.change,
        recurringHoldersChange24Percentage: getChanges('recurringHolders')?.recurringHoldersChange?.percentage,
        leavingHolders: marketStats?.leavingHolders,
        leavingHoldersChange24: getChanges('leavingHolders')?.leavingHoldersChange?.change,
        leavingHoldersChange24Percentage: getChanges('leavingHolders')?.leavingHoldersChange?.percentage,
        avgPrice: marketStats?.avgPrice,
        avgPriceChange24: getChanges('avgPrice')?.avgPriceChange?.change,
        avgPriceChange24Percentage: getChanges('avgPrice')?.avgPriceChange?.percentage,
        floorPrice: marketStats?.floorPrice,
        floorPriceChange24: getChanges('floorPrice')?.floorPriceChange?.change,
        floorPriceChange24Percentage: getChanges('floorPrice')?.floorPriceChange?.percentage,
        ceilPrice: marketStats?.ceilPrice,
        ceilPriceChange24: getChanges('ceilPrice')?.ceilPriceChange?.change,
        ceilPriceChange24Percentage: getChanges('ceilPrice')?.ceilPriceChange?.percentage,
        salesVolume: marketStats?.salesVolume,
        salesVolumeChange24: getChanges('salesVolume')?.salesVolumeChange?.change,
        salesVolumeChange24Percentage: getChanges('salesVolume')?.salesVolumeChange?.percentage,
        totalHoldings: marketStats?.totalHoldings,
        totalHoldingsChange24: getChanges('totalHoldings')?.totalHoldingsChange?.change,
        totalHoldingsChange24Percentage: getChanges('totalHoldings')?.totalHoldingsChange?.percentage,
        customTrackers: marketStats?.customTrackers,
        project: { connect: { id: marketStats?.id } },
      },
    });

    const redis = new Redis(redisConenctionString);
    redis.publish(DISOCRD_BOTS_STATS_CHANNEL, JSON.stringify(createMarketStat));

    return createMarketStat || null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const createSocialStats = async (socialStats: SocialStat): Promise<SocialStat | null> => {
  try {
    const lastDaySocialStats = await prismaClient?.socialStat.findFirst({
      where: {
        projectId: socialStats?.id || '',
        dateAdded: {
          lte: formatISO(subHours(new Date(), 24)),
        },
      },
      orderBy: {
        dateAdded: 'desc',
      },
    });

    const getChanges = getChangesPartial(socialStats, lastDaySocialStats || {});

    const createSocialStat = await prismaClient?.socialStat.create({
      data: {
        twitter: socialStats?.twitter,
        twitterChange24: getChanges('twitter')?.twitterChange?.change,
        twitterChange24Percentage: getChanges('twitter')?.twitterChange?.percentage,
        telegram: socialStats?.telegram,
        telegramChange24: getChanges('telegram')?.telegramChange?.change,
        telegramChange24Percentage: getChanges('telegram')?.telegramChange?.percentage,
        discord: socialStats?.discord,
        discordChange24: getChanges('discord')?.discordChange?.change,
        discordChange24Percentage: getChanges('discord')?.discordChange?.percentage,
        project: { connect: { id: socialStats?.id } },
      },
    });

    return createSocialStat || null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

type UpdateInitializedStatus = {
  id: string;
  initialized: boolean;
};

export const updateProjectInitializedStatus = async (
  initializedStatus: UpdateInitializedStatus,
): Promise<UpdateInitializedStatus | null> => {
  try {
    const updateProject = await prismaClient?.project.update({
      where: {
        id: initializedStatus?.id || '',
      },
      data: {
        initialized: initializedStatus?.initialized || false,
      },
    });
    return updateProject || null;
  } catch (error) {
    console.log(error);
    return null;
  }
};
