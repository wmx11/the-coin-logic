import { NEXT_AUTH_SESSION_TOKEN, NEXT_AUTH_SESSION_TOKEN_SECURE } from 'constants/general';
import Cookies from 'cookies';
import { KeystoneAdapter } from 'data/auth/KeystoneAdapter';
import { keystoneAuthenticate } from 'data/auth/keystoneAuthenticate';
import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import { decode, encode } from 'next-auth/jwt';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaClient, prismaClient } from 'tcl-packages/prismaClient';

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  const providers = [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'Email address' },
        password: { label: 'Password', type: 'password', placeholder: 'Password' },
      },
      async authorize(credentials, req) {
        try {
          const { user, sessionToken } = await keystoneAuthenticate({
            email: credentials?.email as string,
            password: credentials?.password as string,
          });

          if (user) {
            return user.isVerified ? { ...user, sessionToken } : false;
          }
        } catch (e) {
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_AUTH_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET || '',
      authorization: { params: { scope: 'openid email profile' } },
    }),
  ];

  const adapter = KeystoneAdapter(prismaClient as PrismaClient, req, res);

  return await NextAuth(req, res, {
    adapter,
    providers: providers,
    callbacks: {
      async signIn({ user, account, profile, email, credentials }) {
        if (
          req?.query?.nextauth?.includes('callback') &&
          req?.query?.nextauth?.includes('credentials') &&
          req?.method === 'POST'
        ) {
          if (user) {
            const sessionToken = (user?.sessionToken as string) || '';
            const expires = new Date(new Date().getTime() + 30 * 60 * 1000);

            const userAccount = await adapter.getUserByAccount({
              providerAccountId: (account?.providerAccountId as string) || '',
              provider: account?.provider,
            });

            let userAuth = await adapter.getUserByEmail(user?.email as string);

            if (userAuth === null) {
              userAuth = await adapter.createUser({
                name: user.name,
                email: user.email,
              });
            }

            if (userAccount === null) {
              adapter.linkAccount({
                ...account,
                userId: userAuth?.id,
                access_token: sessionToken,
                expires_at: new Date(expires).getTime(),
              });
            }

            const session = await adapter.createSession({
              expires,
              sessionToken,
              userId: (userAuth?.id as string) || '',
            });

            console.log(req.headers.host);

            const cookies = new Cookies(req, res);

            cookies.set(
              req.headers.host?.includes('https') ? NEXT_AUTH_SESSION_TOKEN_SECURE : NEXT_AUTH_SESSION_TOKEN,
              session.sessionToken,
              {
                expires,
              },
            );
          }
          return true;
        }
        return true;
      },
      async jwt({ token, account, user }) {
        if (user) {
          token.id = user.id;
          token.sessionToken = user.sessionToken;
          token.isAdmin = user.isAdmin;
        }
        return token;
      },
      async session({ session, user, token }) {
        if (token || user) {
          session.id = (token || user).id;
          session.token = (token || user).sessionToken;
          session.isAdmin = (token || user).isAdmin;
        }
        return session;
      },
    },
    jwt: {
      encode: async (token) => {
        if (
          req?.query?.nextauth?.includes('callback') &&
          req?.query?.nextauth?.includes('credentials') &&
          req.method === 'POST'
        ) {
          const cookies = new Cookies(req, res);
          const cookie = cookies.get(NEXT_AUTH_SESSION_TOKEN);

          if (cookie) {
            return cookie;
          }

          return '';
        }
        // Revert to default behaviour when not in the credentials provider callback flow
        return encode(token);
      },
      decode: async (token) => {
        if (
          req?.query?.nextauth?.includes('callback') &&
          req?.query?.nextauth?.includes('credentials') &&
          req.method === 'POST'
        ) {
          return null;
        }

        // Revert to default behaviour when not in the credentials provider callback flow
        return decode(token);
      },
    },
    session: {
      strategy: 'database',
      maxAge: 30 * 60,
    },
    pages: {
      signIn: '/?signIn=true',
    },
  });
}
