import type { PrismaClient } from '@prisma/client';
import { REF_COOKIE_NAME } from 'constants/general';
import Cookies from 'cookies';
import crypto from 'crypto';
import { addMinutes } from 'date-fns';
import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';
import type { Adapter, AdapterSession, AdapterUser } from 'next-auth/adapters';
import { tokens } from 'utils/tokens/tokens';
import { getIpAddress } from 'utils/utils';
import { keystoneAuthenticate, keystoneCreateUser } from './keystoneAuthenticate';
import { sendVerificationEmail } from './sendVerificationEmail';

export function KeystoneAdapter(p: PrismaClient, req: NextApiRequest, res: NextApiResponse): Adapter {
  return {
    createUser: async (data) => {
      const cookies = new Cookies(req, res);
      const passphrase = crypto.randomBytes(32).toString('hex');
      const referrerCookie = cookies.get(REF_COOKIE_NAME);
      const ip = getIpAddress(req);
      const verificationTokenExpiration = addMinutes(new Date(), 60);

      let existingUser = await p?.user.findFirst({
        where: {
          email: {
            equals: (data?.email as string) || '',
            mode: 'insensitive',
          },
        },
      });

      let encodedPassphrase;

      if (!existingUser) {
        existingUser = await keystoneCreateUser({
          name: (data?.name as string) || '',
          email: (data?.email as string) || '',
          password: passphrase,
          isSubscribedToEmail: true,
          ip: ip || '',
          referrer: referrerCookie || '',
        });
        encodedPassphrase = jwt.sign({ passphrase }, process.env.NEXTAUTH_SECRET || '');

        const verificationToken = await p?.verificationToken.create({
          data: {
            userId: existingUser?.id || undefined,
            token: jwt.sign({ id: existingUser?.id }, process.env.NEXTAUTH_SECRET || ''),
            expires: verificationTokenExpiration,
          },
        });

        await sendVerificationEmail(data?.email as string, verificationToken.token);
      }

      const authUser = await p.userAuth.create({
        data: { ...data, access_token: encodedPassphrase, user: { connect: { id: existingUser?.id || undefined } } },
      });

      return authUser as unknown as AdapterUser;
    },

    getUser: async (id) => {
      const authUser = await p?.userAuth.findUnique({
        where: {
          id: (id as string) || '',
        },
      });

      return (authUser ?? null) as unknown as AdapterUser;
    },

    getUserByEmail: async (email) => {
      const authUser = await p?.userAuth.findFirst({
        where: {
          email: {
            equals: (email as string) || '',
            mode: 'insensitive',
          },
        },
      });

      return (authUser ?? null) as unknown as AdapterUser;
    },

    getUserByAccount: async ({ providerAccountId }) => {
      const account = await p?.account.findUnique({
        where: {
          providerAccountId: (providerAccountId as string) || '',
        },
        select: {
          user: {
            include: {
              user: true,
            },
          },
        },
      });

      return (account?.user ?? null) as unknown as AdapterUser;
    },

    updateUser: async (data) => {
      const currentAuthUser = await p.userAuth.findUnique({
        where: {
          id: (data?.id as string) || '',
        },
      });

      const authUser = await p.userAuth.update({
        where: {
          id: (data?.id as string) || '',
        },
        data: {
          name: (data?.name as string) || '',
          email: (data?.email as string) || '',
        },
      });

      const user = await p.user.update({
        where: {
          email: (currentAuthUser?.email as string) || '',
        },
        data: {
          name: authUser.name,
          email: authUser.email,
        },
      });

      return user as unknown as AdapterUser;
    },

    linkAccount: async (data) => {
      await p.account.create({
        data,
      });
    },

    unlinkAccount: async ({ providerAccountId }) => {
      await p.account.delete({
        where: { providerAccountId: (providerAccountId as string) || '' },
      });
    },

    getSessionAndUser: async (sessionToken): Promise<{ session: AdapterSession; user: AdapterUser } | null> => {
      const session = await p.session.findUnique({
        where: {
          sessionToken: (sessionToken as string) || '',
        },
        include: {
          user: {
            include: {
              user: {
                select: {
                  id: true,
                  name: true,
                  email: true,
                  isVerified: true,
                  isSubscribedToEmail: true,
                  isAdmin: true,
                },
              },
            },
          },
        },
      });

      if (!session) {
        return null;
      }

      return {
        session: {
          id: session?.id as string,
          sessionToken: session?.sessionToken as string,
          userId: session?.userId as string,
          expires: session?.expires as Date,
        },
        user: {
          ...(session?.user?.user as unknown as AdapterUser),
          sessionToken: sessionToken,
        },
      };
    },

    createSession: async (data): Promise<AdapterSession> => {
      const authUser = await p.userAuth.findUnique({
        where: {
          id: data.userId,
        },
        include: {
          user: {
            select: {
              isVerified: true,
            },
          },
        },
      });

      const dataCopy = { ...data };

      // If user is logging in through a provider (Not Credentials)
      if (authUser?.access_token) {
        const decoded = jwt.verify(authUser?.access_token || '', process.env.NEXTAUTH_SECRET || '') as {
          passphrase: string;
        };

        // Authenticate the user against the keystone DB in order to acquire its access token (Used for interacting with apollo)
        const { sessionToken } = await keystoneAuthenticate({
          email: authUser.email,
          password: decoded?.passphrase,
        });

        dataCopy.sessionToken = sessionToken;
      }

      const sessionTokenEncoded = await tokens.sign<{
        id: string;
        email: string;
        accessToken: string;
        isVerified: boolean;
        expires: Date;
      }>(
        {
          id: dataCopy.userId as string,
          email: authUser?.email as string,
          accessToken: dataCopy.sessionToken,
          isVerified: (authUser?.user?.isVerified as boolean) || false,
          expires: dataCopy.expires,
        },
        process.env.NEXT_PUBLIC_SIGNED_SECRET || '',
      );

      dataCopy.sessionToken = sessionTokenEncoded;

      const session = await p.session.create({
        data: { ...dataCopy },
      });

      return session as AdapterSession;
    },

    updateSession: async (data): Promise<AdapterSession> => {
      const session = await p.session.update({
        where: {
          id: (data?.id as string) || '',
        },
        data: {
          expires: data?.expires || '',
          sessionToken: data?.sessionToken || '',
          userId: data?.userId || '',
        },
      });

      return (session ?? null) as AdapterSession;
    },

    deleteSession: async (sessionToken) => {
      const session = await p.session.delete({
        where: {
          sessionToken: (sessionToken as string) || '',
        },
      });

      return (session ?? null) as AdapterSession;
    },
  };
}
