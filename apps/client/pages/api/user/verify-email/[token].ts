import { QUERY_CALLBACK_ERROR, QUERY_CALLBACK_SUCCESS } from 'constants/general';
import { isAfter } from 'date-fns';
import type { NextApiRequest, NextApiResponse } from 'next';
import { prismaClient } from 'tcl-packages/prismaClient';
import jwt from 'jsonwebtoken';
import routes from 'routes';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { token } = req.query;

  if (!token) {
    return res.redirect('/');
  }

  if (req.method === 'GET') {
    const verificationToken = await prismaClient?.verificationToken.findFirst({
      where: {
        token: {
          equals: (token as string) || '',
        },
      },
      include: {
        user: {
          select: {
            id: true,
            isVerified: true,
          },
        },
      },
    });

    const deleteToken = async () =>
      await prismaClient?.verificationToken.delete({
        where: {
          id: verificationToken?.id || '',
        },
      });

    if (!verificationToken) {
      const error = encodeURIComponent('No verification token found');
      return res.redirect(`${routes.authCheck}?${QUERY_CALLBACK_ERROR}=${error}`);
    }

    if (!verificationToken.userId) {
      const error = encodeURIComponent('No user with the verification token was found');
      return res.redirect(`${routes.authCheck}?${QUERY_CALLBACK_ERROR}=${error}`);
    }

    if (verificationToken.user?.isVerified) {
      const error = encodeURIComponent('User email is already verified');
      return res.redirect(`${routes.authCheck}?${QUERY_CALLBACK_ERROR}=${error}`);
    }

    if (isAfter(new Date(), verificationToken?.expires as Date)) {
      const error = encodeURIComponent('Verification token is expired');
      await deleteToken();
      return res.redirect(`${routes.authCheck}?${QUERY_CALLBACK_ERROR}=${error}`);
    }

    try {
      const decode = jwt.verify(verificationToken?.token as string, process.env.NEXTAUTH_SECRET || '') as {
        id: string;
      };

      const userId = decode.id;

      const user = await prismaClient?.user.findUnique({
        where: {
          id: userId || '',
        },
      });

      if (!user) {
        const error = encodeURIComponent('User does not exist');
        return res.redirect(`${routes.authCheck}?${QUERY_CALLBACK_ERROR}=${error}`);
      }

      const updatedUser = await prismaClient?.user.update({
        where: {
          id: userId || '',
        },
        data: {
          isVerified: true,
        },
        include: {
          userAuth: {
            select: {
              sessions: true,
            },
          },
        },
      });

      if (updatedUser?.userAuth?.sessions && updatedUser?.userAuth?.sessions.length > 0) {
        await prismaClient?.session.deleteMany({
          where: {
            id: {
              in: updatedUser?.userAuth?.sessions.map(({ id }) => id) || [],
            },
          },
        });
      }

      await deleteToken();

      const message = encodeURIComponent(`${user?.name}, your email has been verified.`);
      return res.redirect(`${routes.authCheck}?${QUERY_CALLBACK_SUCCESS}=${message}`);
    } catch (error) {
      return res.redirect(`${routes.authCheck}?${QUERY_CALLBACK_ERROR}=${error}`);
    }
  }

  return res.redirect('/');
}
