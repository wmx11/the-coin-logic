// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import request from 'data/api/request';
import { response } from 'data/api/response';
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../data/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const requestHandler = request(req, res);
  const responseHandler = response(res);

  const clearCart = async () => {
    const { cart } = req.body;

    if (!cart) {
      return responseHandler.badRequest('Cart not found.');
    }

    await prisma?.cartItem.deleteMany({
      where: {
        cartId: cart.id,
      },
    });

    return responseHandler.ok({}, 'ok');
  };

  return requestHandler.signedPost(clearCart);
}
