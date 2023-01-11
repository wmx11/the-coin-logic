import request, { IsSafeAuth } from 'data/api/request';
import { response } from 'data/api/response';
import applyRateLimit from 'data/api/utils/applyRateLimit';
import { keystoneCreateUser } from 'data/auth/keystoneAuthenticate';
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

  const registerUser = async (auth: IsSafeAuth) => {
    const { name, email, password, referrer, isSubscribedToEmail, ip } = req.body;

    if (auth.signature !== 'register_user' || !auth.trusted) {
      return responseHandler.forbidden('You are not allowed to do this operation.');
    }

    if (!name) {
      return responseHandler.badRequest('Please provide a valid name.');
    }

    if (!email) {
      return responseHandler.badRequest('Please provide a valid email.');
    }

    if (!password) {
      return responseHandler.badRequest('Please provide a valid password.');
    }

    const existingUser = await prismaClient?.user.findFirst({
      where: {
        email: {
          equals: email,
          mode: 'insensitive',
        },
      },
    });

    if (existingUser) {
      return responseHandler.forbidden('User with this email already exists.');
    }

    try {
      const verificationTokenExpiration = addMinutes(new Date(), 60);

      const newUser = await keystoneCreateUser({
        email,
        ip,
        isSubscribedToEmail,
        name,
        password,
        referrer,
      });

      const verificationToken = await prismaClient?.verificationToken.create({
        data: {
          userId: newUser?.id || undefined,
          token: jwt.sign({ id: newUser?.id }, process.env.NEXTAUTH_SECRET || ''),
          expires: verificationTokenExpiration,
        },
      });

      await sendVerificationEmail(newUser?.email as string, verificationToken?.token as string);

      return responseHandler.ok({}, 'Thank you for registering! We have sent you a confirmation email.');
    } catch (error) {
      return responseHandler.badRequest(error as string);
    }
  };

  return requestHandler.safePost(registerUser);
}
