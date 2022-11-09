// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import routes from 'routes';
import { Cart } from 'tcl-packages/prismaClient';

import { calculateItemTotal } from 'utils/utils';
import prisma from '../../../data/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req;

  const {
    cart,
    orderInfo,
  }: {
    cart: Cart;
    orderInfo: {
      firstName: string;
      lastName: string;
      transactionHash: string;
      duration: string;
      currency: string;
      apiId: string;
      walletAddress: string;
      paymentNetwork: string;
      project?: string; // ID of the project
    };
  } = body;

  if (!cart && !orderInfo) {
    return res.status(403).json({ message: 'Missing Cart and OrderInfo' });
  }

  if (method === 'POST') {
    const user = await prisma.user.findFirst({
      where: {
        id: cart.userId as string,
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
      },
    });

    const item = await prisma.cartItem.findFirst({
      where: {
        cartId: cart.id,
      },
      include: {
        product: true,
      },
    });

    if (!item) {
      return res.status(404).json({ message: 'No products found.' });
    }

    if (!user?.firstName && !user?.lastName) {
      await prisma.user.update({
        where: {
          id: user?.id as string,
        },
        data: {
          firstName: orderInfo.firstName,
          lastName: orderInfo.lastName,
        },
      });
    }

    const { price: total } = calculateItemTotal(item, orderInfo.duration);

    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=${orderInfo.apiId}&vs_currencies=eur`,
    );

    const currencyPriceEur = data ? data[orderInfo.apiId]?.eur : 1;

    const paymentNetwork = await prisma.network.findFirst({
      where: {
        slug: orderInfo.paymentNetwork,
      },
    });

    const order = await prisma.order.create({
      data: {
        userId: user?.id,
        projectId: orderInfo.project || undefined,
        paymentNetworkId: paymentNetwork?.id,
        walletAddress: orderInfo.walletAddress,
        transactionHash: orderInfo.transactionHash,
        currency: orderInfo.currency,
        currencyPriceEur,
        durationInMonths: parseInt(orderInfo.duration, 10),
        discount: item.discount,
        tax: item.tax,
        grandTotal: total,
        total: total,
        subTotal: total,
      },
    });

    await prisma.orderItem.create({
      data: {
        orderId: order.id,
        productId: item?.productId,
        discount: item.discount,
        price: item.price,
        quantity: item.quantity,
        tax: item.tax,
      },
    });

    if (item?.product?.isMonthly) {
      await axios.post(routes.api.user.initSubscription, {
        order,
      });
    }

    if (orderInfo.project) {
      await prisma.project.update({
        data: {
          isPending: false,
          isAwaitingPayment: false,
          enabled: true,
          trackData: true,
          isListed: true,
        },
        where: {
          id: orderInfo.project || undefined,
        },
      });
    }

    return res.status(200).json({ order });
  }

  return res.status(403).json({ message: 'You do not have permission' });
}
