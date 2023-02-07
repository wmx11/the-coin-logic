// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import { PURCHASE_CONFIRMATION_ID } from 'constants/email';
import request, { Auth } from 'data/api/request';
import { response } from 'data/api/response';
import type { NextApiRequest, NextApiResponse } from 'next';
import routes from 'routes';
import config from 'tcl-packages/email/config';
import { Cart, CartItem } from 'types';
import { productCodes } from 'utils/products';
import { signedRequest } from 'utils/signedRequest';
import toCurrency from 'utils/toCurrency';
import { calculateItemTotal } from 'utils/utils';
import prisma from '../../../data/prisma';
import { paymentPlans } from '../../../utils/paymentPlans/config';

type OrderInfo = {
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

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const requestHandler = request(req, res);
  const responseHandler = response(res);

  const placeOrder = async (auth: Auth) => {
    const { cart, orderInfo }: { cart: Cart; orderInfo: OrderInfo } = req.body;

    if (!cart || !orderInfo) {
      return responseHandler.badRequest('Cart and order information is required');
    }

    const item = cart.cartItem as CartItem;

    const user = await prisma?.user.findUnique({
      where: {
        id: cart?.user?.id as string,
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        serviceTokens: true,
      },
    });

    if (!user) {
      return responseHandler.forbidden('Invalid user');
    }

    if (!user.firstName || !user.lastName) {
      await prisma?.user.update({
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

    const paymentNetwork = await prisma?.network.findFirst({
      where: {
        slug: orderInfo.paymentNetwork,
      },
      select: {
        id: true,
        txScanner: true,
      },
    });

    const order = await prisma?.order.create({
      data: {
        userId: user?.id || undefined,
        projectId: orderInfo.project || undefined,
        paymentNetworkId: paymentNetwork?.id || undefined,
        walletAddress: orderInfo.walletAddress,
        transactionHash: orderInfo.transactionHash,
        currency: orderInfo.currency,
        currencyPriceEur,
        durationInMonths: parseInt(orderInfo.duration, 10) || 0,
        discount: item.discount,
        tax: item.tax,
        grandTotal: total,
        total: total,
        subTotal: total,
        couponCodeId: cart?.couponCode?.id || undefined,
      },
    });

    await prisma?.orderItem.create({
      data: {
        orderId: order?.id || undefined,
        productId: item?.product?.id || undefined,
        discount: item.discount,
        price: item.price,
        quantity: item.quantity,
        tax: item.tax,
        paymentPlanId: item.paymentPlan?.id || undefined,
      },
    });

    const paymentPlanKey = item?.paymentPlan?.slug as string;
    const paymentPlanConfig = paymentPlans[paymentPlanKey as keyof typeof paymentPlans]?.config;
    const isServiceToken = item?.product?.sku?.includes(productCodes.serviceTokens);

    const project = await prisma?.project.findUnique({
      where: {
        id: orderInfo.project || '',
      },
      select: {
        id: true,
        slug: true,
      },
    });

    if (project && item.paymentPlan) {
      const { marketingTrackerDuration, ...rest } = paymentPlanConfig;
      await prisma?.project.update({
        data: {
          isPending: false,
          isAwaitingPayment: false,
          paymentPlanId: item.paymentPlan?.id || undefined,
          ...rest,
        },
        where: {
          id: project.id || undefined,
        },
      });
    }

    if (isServiceToken) {
      if (user.serviceTokens) {
        await prisma?.serviceToken.update({
          where: {
            id: user.serviceTokens.id,
          },
          data: {
            amount: (user.serviceTokens.amount || (0 as number)) + ((item?.price as number) || 0),
          },
        });
      } else {
        await prisma?.serviceToken.create({
          data: {
            amount: item.price,
            userId: user.id,
          },
        });
      }
    }

    await prisma?.cart.update({
      where: {
        id: cart.id,
      },
      data: {
        couponCode: {
          disconnect: true,
        },
        couponCodeId: undefined,
      },
    });

    await signedRequest(
      {
        type: 'post',
        url: routes.api.email.submit,
        data: {
          subject: 'Your TCL Invoice',
          to: user.email,
          cc: config.tclEmail,
          templateId: PURCHASE_CONFIRMATION_ID,
          dynamicTemplateData: {
            product_name: `${item?.product?.name} ${
              item.paymentPlan ? `(Payment plan: ${item.paymentPlan.name})` : ''
            }`,
            order_number: `#${order?.orderNumber}`,
            price: toCurrency(total) || '$0',
            transaction_hash: orderInfo.transactionHash,
            proof_of_payment: `${paymentNetwork?.txScanner}/${orderInfo.transactionHash}`,
            project_listing_text: project ? 'You can find your project listing on ' : '',
            project_url: project ? `${routes.base}${routes.project}/${project.slug}` : '',
          },
        },
      },
      user.id,
      {
        trusted: true,
        signature: 'email_submit',
      },
    );

    const newOrder = await prisma?.order.findUnique({
      where: {
        id: order?.id || undefined,
      },
      include: {
        orderItem: true,
        user: {
          select: {
            id: true,
          },
        },
      },
    });

    return responseHandler.ok(newOrder, 'Order has been placed successfully');
  };

  return requestHandler.signedPost(placeOrder);
}
