import { SUBSCRIPTION_CONFIRMATION_ID } from 'constants/email';
import { FREE_SUBSCRIPTION_DAYS, SUBSCRIPTION_DAYS } from 'constants/subscription';
import request, { Auth } from 'data/api/request';
import { response } from 'data/api/response';
import { add, isAfter } from 'date-fns';
import type { NextApiRequest, NextApiResponse } from 'next';
import routes from 'routes';
import config from 'tcl-packages/email/config';
import { Order, Product } from 'types';
import { products } from 'utils/products';
import { formateDateWithHours } from 'utils/formatters';
import { signedRequest } from 'utils/signedRequest';
import prisma from '../../../data/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const requestHandler = request(req, res);
  const responseHandler = response(res);

  const initSubscription = async (auth: Auth) => {
    const { order, duration }: { order: Order; duration: number } = req.body;

    if (!auth.id) {
      return responseHandler.unauthorized();
    }

    const user = await prisma?.user.findUnique({
      where: {
        id: auth.id,
      },
      select: {
        email: true,
      },
    });

    if (!order || !user) {
      return responseHandler.badRequest('Order or user not found');
    }

    const orderItem = await prisma?.orderItem.findUnique({
      where: {
        id: order?.orderItem?.id || undefined,
      },
      include: {
        product: true,
      },
    });

    if (!orderItem) {
      return responseHandler.badRequest('Order item not found');
    }

    let product: Product | null = null;

    if (duration) {
      const data = await prisma?.product.findFirst({
        where: {
          sku: products.sku.marketingCampaignTrackerListed,
        },
      });
      product = data ? data : null;
    } else {
      product = orderItem.product;
    }

    if (!product) {
      return responseHandler.badRequest('Product not found');
    }

    if (product.isOneTime || !duration) {
      return responseHandler.badRequest('Subscription is not required');
    }

    // Current date
    const dateFrom = new Date();

    const getDateTo = () => {
      if (duration) {
        return add(new Date(), { days: SUBSCRIPTION_DAYS * duration });
      }

      if (product?.price === 0 && product.isMonthly) {
        return add(new Date(), { days: FREE_SUBSCRIPTION_DAYS });
      }

      if (order.durationInMonths && product?.isMonthly) {
        const durationInMonthsToDays = order.durationInMonths * SUBSCRIPTION_DAYS;
        return add(new Date(), { days: durationInMonthsToDays });
      }

      return add(new Date(), { days: SUBSCRIPTION_DAYS });
    };

    const existingSubscription = await prisma?.subscription.findFirst({
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
      await prisma?.subscription.update({
        where: {
          id: existingSubscription.id,
        },
        data: {
          isActive: false,
        },
      });
    }

    await prisma?.subscription.create({
      data: {
        user: {
          connect: {
            id: order?.user?.id || undefined,
          },
        },
        order: {
          connect: {
            id: order.id || undefined,
          },
        },
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

    await signedRequest(
      {
        type: 'post',
        url: routes.api.email.submit,
        data: {
          subject: 'Thank you for subscribing to TCL tools!',
          to: user.email,
          cc: config.tclEmail,
          templateId: SUBSCRIPTION_CONFIRMATION_ID,
          dynamicTemplateData: {
            product_name: orderItem?.product?.name as string,
            date_from: formateDateWithHours(new Date().toString()),
            date_to: formateDateWithHours(getDateTo().toString()),
            marketing_tracker_link: `${routes.base}${routes.marketingTracker}`,
          },
        },
      },
      auth.id,
      {
        trusted: true,
        signature: 'email_submit',
      },
    );

    return responseHandler.ok({}, 'Subscribed succesfully');
  };

  return requestHandler.signedPost(initSubscription);
}
