// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import request, { Auth } from 'data/api/request';
import { response } from 'data/api/response';
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../data/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const requestHandler = request(req, res);
  const responseHandler = response(res);

  const createCart = async (auth: Auth) => {
    const existingCart = await prisma?.cart.findFirst({
      where: {
        userId: auth.id,
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
        couponCode: true,
      },
    });

    if (existingCart) {
      return responseHandler.ok({ cart: existingCart });
    }

    const cart = await prisma?.cart.create({
      data: {
        userId: auth.id,
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
        couponCode: true,
      },
    });

    return responseHandler.ok({ cart });
  };

  return requestHandler.signedPost(createCart);
}
