// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../data/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req;

  const { userId } = body;

  if (method === 'POST') {
    const existingCart = await prisma.cart.findFirst({
      where: {
        userId,
      },
      include: {
        cartItem: {
          include: {
            product: true,
          },
        },
        user: {
          select: {
            id: true,
          },
        },
      },
    });

    if (!existingCart) {
      const newCart = await prisma.cart.create({
        data: {
          userId,
        },
        include: {
          cartItem: {
            include: {
              product: true,
            },
          },
          user: {
            select: {
              id: true,
            },
          },
        },
      });

      return res.status(200).json({ cart: newCart });
    }

    return res.status(200).json({ cart: existingCart });
  }

  return res.status(403).json({ message: 'You do not have permission' });
}
