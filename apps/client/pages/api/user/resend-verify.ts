import request, { IsSafeAuth } from 'data/api/request';
import { response } from 'data/api/response';
import applyRateLimit from 'data/api/utils/applyRateLimit';
import { sendVerificationEmail } from 'data/auth/sendVerificationEmail';
import { addMinutes } from 'date-fns';
import jwt from 'jsonwebtoken';
import type { NextApiRequest, NextApiResponse } from 'next';
import { prismaClient } from 'tcl-packages/prismaClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const requestHandler = request(req, res);
  const responseHandler = response(res);

  try {
    await applyRateLimit(req, res);
  } catch (error) {
    return responseHandler.tooManyRequests(JSON.stringify(error));
  }

  const resendVerificationEmail = async (auth: IsSafeAuth) => {
    const { email } = req.body;

    if (auth.signature !== 'resend_verification_email' || !auth.trusted) {
      return responseHandler.forbidden('You are not allowed to do this operation.');
    }

    if (!email) {
      return responseHandler.badRequest('Please provide a valid email.');
    }

    const user = await prismaClient?.user.findFirst({
      where: {
        email: {
          equals: email,
          mode: 'insensitive',
        },
      },
    });

    if (!user) {
      return responseHandler.forbidden('User with this email does not exist.');
    }

    try {
      const verificationTokenExpiration = addMinutes(new Date(), 60);

      const verificationToken = await prismaClient?.verificationToken.create({
        data: {
          userId: user?.id || undefined,
          token: jwt.sign({ id: user?.id }, process.env.NEXTAUTH_SECRET || ''),
          expires: verificationTokenExpiration,
        },
      });

      await sendVerificationEmail(user?.email as string, verificationToken?.token as string);

      return responseHandler.ok({}, 'We have sent you a confirmation email.');
    } catch (error) {
      return responseHandler.badRequest(error as string);
    }
  };

  return requestHandler.safePost(resendVerificationEmail);
}
