import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';
import { prismaClient } from 'tcl-packages/prismaClient';
import { response } from './response';

export type Auth = {
  id: string;
  isAdmin: boolean;
  roles: {
    isEditor: boolean;
  }[];
  ip: string;
};

export type IsSafeAuth = {
  signature: 'email_submit' | 'add_property' | 'get_property';
  trusted: boolean;
};

const request = (req: NextApiRequest, res: NextApiResponse) => {
  const { method, headers } = req;

  const secret = process.env.NEXT_PUBLIC_SIGNED_SECRET || '';
  const authToken = headers.authorization?.split(' ')[1]?.trim() || '';

  const responseHandler = response(res);

  const post = (cb: () => Promise<any> | any) => {
    if (method === 'POST') {
      try {
        return cb();
      } catch (error) {
        console.log(error);
        return null;
      }
    }

    return responseHandler.forbidden();
  };

  const get = (cb: () => Promise<any> | any) => {
    if (method === 'GET') {
      try {
        return cb();
      } catch (error) {
        console.log(error);
        return null;
      }
    }

    return responseHandler.forbidden();
  };

  const authenticate = async (): Promise<Auth | boolean> => {
    if (!secret || !authToken) {
      return false;
    }

    try {
      const decoded = jwt.verify(authToken, secret) as { id: string };

      const user = await prismaClient.user.findFirst({
        where: {
          id: decoded?.id,
        },
        select: {
          id: true,
          isAdmin: true,
          roles: {
            select: {
              isEditor: true,
            },
          },
          ip: true,
        },
      });

      if (!user) {
        return false;
      }

      return user;
    } catch (error) {
      return false;
    }
  };

  const isSafeAuth = (): IsSafeAuth | boolean => {
    if (!secret || !authToken) {
      return false;
    }

    try {
      const decoded = jwt.verify(authToken, secret) as IsSafeAuth;

      if (!decoded.hasOwnProperty('trusted')) {
        return false;
      }

      return decoded;
    } catch (error) {
      return false;
    }
  };

  const signedPost = async (cb: (auth: Auth) => Promise<any> | any) => {
    const auth = (await authenticate()) as Auth;

    if (!auth) {
      return responseHandler.unauthorized();
    }

    return post(() => cb(auth));
  };

  const safePost = async (cb: (auth: IsSafeAuth) => Promise<any> | any) => {
    const auth = isSafeAuth() as IsSafeAuth;

    if (!auth) {
      return responseHandler.unauthorized();
    }

    return post(() => cb(auth));
  };

  const signedGet = async (cb: (auth: Auth) => Promise<any> | any) => {
    const auth = (await authenticate()) as Auth;

    if (!auth) {
      return responseHandler.unauthorized();
    }

    return get(() => cb(auth));
  };

  return {
    post,
    get,
    safePost,
    signedPost,
    signedGet,
  };
};

export default request;
