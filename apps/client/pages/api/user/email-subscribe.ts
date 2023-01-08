import request from 'data/api/request';
import { response } from 'data/api/response';
import applyRateLimit from 'data/api/utils/applyRateLimit';
import type { NextApiRequest, NextApiResponse } from 'next';
import { prismaClient } from 'tcl-packages/prismaClient';
import { EMAIL_REGEX } from 'utils/utils';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const requestHandler = request(req, res);
  const responseHandler = response(res);

  try {
    await applyRateLimit(req, res);
  } catch (error) {
    return responseHandler.tooManyRequests(JSON.stringify(error));
  }

  const subscribeToEmail = async () => {
    const { email } = req.body;

    if (!email) {
      return responseHandler.badRequest('Missing email address.');
    }

    if (!EMAIL_REGEX.test(email)) {
      return responseHandler.badRequest('Invalid email address.');
    }

    const existingEmail = await prismaClient?.emailList.findFirst({
      where: {
        email,
      },
    });

    if (existingEmail) {
      return responseHandler.badRequest('Email address already exists.');
    }

    await prismaClient?.emailList.create({
      data: {
        email,
      },
    });

    return responseHandler.ok({}, 'Thank you for subscribing to our email list!');
  };

  return requestHandler.post(subscribeToEmail);
}
