// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import request, { Auth } from 'data/api/request';
import { response } from 'data/api/response';
import { isAfter, isBefore } from 'date-fns';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Cart } from 'types';
import prisma from '../../../data/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const requestHandler = request(req, res);
  const responseHandler = response(res);

  const applyCoupon = async (auth: Auth) => {
    const {
      cart,
      couponCode,
      revoke,
      projectId,
    }: { cart: Cart; couponCode: string; revoke: boolean; projectId: string } = req.body;

    if (!couponCode) {
      return responseHandler.badRequest('Coupon code must be provided.');
    }

    const coupon = await prisma?.coupon.findFirst({
      where: {
        code: {
          equals: couponCode,
        },
      },
      include: {
        acceptFromNetworks: true,
        acceptFromReferrers: {
          select: {
            referralCode: true,
          },
        },
      },
    });

    if (!coupon) {
      return responseHandler.badRequest(`${couponCode} Coupon is not valid.`);
    }

    const {
      enabled,
      validFrom,
      validTill,
      timesPerUser,
      usedBy,
      id,
      discountPercentage,
      acceptFromNetworks,
      acceptFromReferrers,
    } = coupon;

    const usedByCopy = [...(usedBy as { user: string; times: number }[])];
    const userIndex = usedByCopy.findIndex((item) => item.user === auth.id);

    if (!revoke && !enabled) {
      return responseHandler.badRequest(`${couponCode} Coupon is not valid.`);
    }

    if (!revoke && validFrom && validTill) {
      if (!isAfter(new Date(), new Date(validFrom as Date)) || !isBefore(new Date(), new Date(validTill))) {
        return responseHandler.badRequest(`${couponCode} Coupon is expired.`);
      }
    }

    if (!revoke && timesPerUser && timesPerUser > 0) {
      if (userIndex !== -1 && usedByCopy[userIndex].times >= timesPerUser) {
        return responseHandler.badRequest('You have exceeded the number of times you can use this coupon code.');
      }
    }

    if (!revoke && projectId && (acceptFromNetworks.length > 0 || acceptFromReferrers.length > 0)) {
      const project = await prisma?.project.findUnique({
        where: {
          id: projectId || '',
        },
        select: {
          networkId: true,
          user: {
            select: {
              referralCode: true,
            },
          },
        },
      });

      if (!project) {
        return responseHandler.badRequest('This project does not exist');
      }

      if (acceptFromNetworks.length > 0) {
        const network = acceptFromNetworks.find((item) => item.id === project.networkId);

        if (!network) {
          return responseHandler.badRequest(
            'This coupon code is not applicable for this project or its blockchain network',
          );
        }
      }

      if (acceptFromReferrers.length > 0) {
        const referrer = acceptFromReferrers.find((item) =>
          project.user.findIndex((user) => user.referralCode === item.referralCode),
        );

        if (!referrer) {
          return responseHandler.badRequest(
            'A valid referrer was not found or your referrer for this coupon code does not exist',
          );
        }
      }
    }

    await prisma?.cart.update({
      where: {
        id: cart.id,
      },
      data: {
        couponCodeId: revoke ? null : id,
      },
    });

    await prisma?.cartItem.update({
      where: {
        id: cart.cartItem?.id,
      },
      data: {
        discount: revoke ? 0 : discountPercentage,
      },
    });

    const updatedCart = await prisma?.cart.findFirst({
      where: {
        id: cart.id,
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

    if (!timesPerUser) {
      return responseHandler.ok({ cart: updatedCart }, 'Coupon applied.');
    }

    if (usedByCopy) {
      if (userIndex === -1 && !revoke) {
        usedByCopy.push({ user: auth.id, times: 1 });
      } else if (revoke) {
        if (usedByCopy[userIndex].times > 0) {
          usedByCopy[userIndex].times = usedByCopy[userIndex].times - 1;
        }
      } else {
        usedByCopy[userIndex].times = usedByCopy[userIndex].times + 1;
      }
    }

    await prisma?.coupon.update({
      where: {
        id,
      },
      data: {
        usedBy: usedByCopy,
      },
    });

    return responseHandler.ok({ cart: updatedCart }, 'Coupon applied.');
  };

  return requestHandler.signedPost(applyCoupon);
}
