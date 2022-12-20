// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import request from 'data/api/request';
import { response } from 'data/api/response';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Cart } from 'types';
import prisma from '../../../data/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const requestHandler = request(req, res);
  const responseHandler = response(res);

  const addItem = async () => {
    const {
      cart,
      sku,
      projectId,
      paymentPlanId,
    }: { cart: Cart; sku: string; projectId: string; paymentPlanId: string } = req.body;

    if (!cart || !sku) {
      return responseHandler.badRequest('Cart or SKU is required.');
    }

    const product = await prisma?.product.findFirst({
      where: {
        sku,
      },
    });

    if (!product) {
      return responseHandler.badRequest('Product does not exist.');
    }

    // Delete all items before adding the new one
    await prisma?.cartItem.deleteMany({
      where: {
        cartId: cart.id,
      },
    });

    const project = await prisma?.project.findFirst({
      where: {
        id: projectId,
      },
      include: {
        paymentPlan: true,
      },
    });

    const paymentPlan = await prisma?.paymentPlan.findFirst({
      where: {
        id: paymentPlanId,
      },
    });

    const getPrice = () => {
      if (paymentPlanId && paymentPlan) {
        return (paymentPlan?.price as number) - (project?.paymentPlan?.price || 0);
      }

      if (projectId && project) {
        return project?.paymentPlan?.price;
      }

      return product.price;
    };

    const getDiscount = () => {
      if (cart.couponCode) {
        return cart.couponCode.discountPercentage;
      }

      if (paymentPlanId && paymentPlan) {
        return paymentPlan.discount || 0;
      }

      return project?.paymentPlan?.discount || 0;
    };

    const cartItem = await prisma?.cartItem.create({
      data: {
        cartId: cart.id,
        productId: product.id,
        price: getPrice(),
        paymentPlanId: paymentPlanId ? paymentPlanId : project?.paymentPlan?.id || undefined,
        quantity: 1,
        discount: getDiscount(),
      },
    });

    return responseHandler.ok({ cartItem });
  };

  return requestHandler.post(addItem);
}
