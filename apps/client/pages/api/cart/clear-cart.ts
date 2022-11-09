// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../data/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req;

  const { cart } = body;

  if (method === 'POST') {
    const deletedCartItems = await prisma.cartItem.deleteMany({
      where: {
        cartId: cart.id,
      },
    });
    return res.status(200).json({ deletedCartItems });
  }

  return res.status(403).json({ message: 'You do not have permission' });
}
