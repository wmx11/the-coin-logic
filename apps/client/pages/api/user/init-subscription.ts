import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../data/prisma';
import { add, isAfter } from 'date-fns';
import { FREE_SUBSCRIPTION_DAYS, SUBSCRIPTION_DAYS } from 'constants/subscription';
import { Order } from 'tcl-packages/prismaClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req;
  const { order }: { order: Order } = body;

  if (!order) {
    return res.status(403).json({ message: 'Order not found' });
  }

  if (method === 'POST') {
    const user = order.userId;

    const orderItem = await prisma.orderItem.findFirst({
      where: {
        orderId: order.id,
      },
      select: {
        product: {
          select: {
            id: true,
            isOneTime: true,
            isMonthly: true,
            price: true,
          },
        },
      },
    });

    const product = orderItem?.product;

    if (!user) {
      return res.status(403).json({ message: 'User not found' });
    }

    if (!product) {
      return res.status(403).json({ message: 'Product not found' });
    }

    if (product.isOneTime) {
      return res.status(200).json({ message: 'Product does not require a subscription' });
    }

    // Current date
    const dateFrom = new Date();

    const getDateTo = () => {
      if (product.price === 0 && product.isMonthly) {
        return add(new Date(), { days: FREE_SUBSCRIPTION_DAYS });
      }

      if (order.durationInMonths && product.isMonthly) {
        const durationInMonthsToDays = order.durationInMonths * SUBSCRIPTION_DAYS;
        return add(new Date(), { days: durationInMonthsToDays });
      }

      return add(new Date(), { days: SUBSCRIPTION_DAYS });
    };

    const existingSubscription = await prisma.subscription.findFirst({
      where: {
        orderId: order.id,
      },
    });

    // Check if the order is already in use and if the subscription has expired
    if (
      existingSubscription &&
      existingSubscription.isActive &&
      isAfter(new Date(), existingSubscription.dateTo as Date)
    ) {
      await prisma.subscription.update({
        where: {
          id: existingSubscription.id,
        },
        data: {
          isActive: false,
        },
      });
    }

    await prisma.subscription.create({
      data: {
        userId: user,
        orderId: order.id,
        isActive: true,
        product: {
          connect: {
            id: product?.id || undefined,
          },
        },
        dateFrom,
        dateTo: getDateTo(),
      },
    });

    return res.status(200).json({ message: 'Subscription successfully granted' });
  }

  return res.status(403).json({ message: 'Not allowed' });
}
