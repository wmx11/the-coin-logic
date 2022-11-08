// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Cart } from 'types';
import {
  MARKETING_TRACKER_STARTER_DISCOUNT,
  shouldApplyMarketingTrackerStarterDiscount,
} from 'utils/products/discounts';
import prisma from '../../../data/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req;

  const { cart, sku }: { cart: Cart; sku: string } = body;

  if (method === 'POST') {
    const hasProduct = !!cart?.cartItem?.find((item) => item?.product?.sku === sku);

    if (hasProduct) {
      return res.status(200).json({ message: 'This item already exists in the cart.' });
    }

    const product = await prisma.product.findFirst({
      where: {
        sku,
      },
    });

    if (!product) {
      return res.status(404).json({ message: 'No product by the given SKU was found.' });
    }

    const applyMarketingTrackerStarterDiscount = await shouldApplyMarketingTrackerStarterDiscount(
      cart?.user?.id as string,
    );

    const discount =
      product.isMonthly && applyMarketingTrackerStarterDiscount
        ? MARKETING_TRACKER_STARTER_DISCOUNT
        : product?.discount || 0;

    await prisma.cartItem.deleteMany({
      where: {
        cartId: cart.id,
      },
    });

    const cartItem = await prisma.cartItem.create({
      data: {
        cartId: cart.id,
        productId: product.id,
        price: product.price,
        quantity: 1,
        discount,
      },
    });

    return res.status(200).json({ cartItem });
  }

  return res.status(403).json({ message: 'You do not have permission' });
}
