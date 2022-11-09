import { productCodes } from 'types/Products';
import prisma from '../../data/prisma';

const MARKETING_TRACKER_ORDERS_COUNT = 2;

export const MARKETING_TRACKER_STARTER_DISCOUNT = 25;

export const shouldApplyMarketingTrackerStarterDiscount = async (userId: string) => {
  const marketingTrackerOrdersCount = await prisma.order.count({
    where: {
      userId,
      orderItem: {
        some: {
          product: {
            sku: {
              contains: productCodes.marketingCampaignTracker,
            },
            isMonthly: {
              equals: true,
            },
            price: {
              gt: 0,
            },
          },
        },
      },
    },
  });

  return marketingTrackerOrdersCount <= MARKETING_TRACKER_ORDERS_COUNT;
};
