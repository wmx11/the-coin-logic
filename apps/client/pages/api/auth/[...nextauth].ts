import type { NextAuthOptions } from 'next-auth';
import { DocumentNode } from 'graphql';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import client from '../../../data/apollo-client';
import { AUTHENTICATE_USER } from '../../../data/mutations';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'Email address' },
        password: { label: 'Password', type: 'password', placeholder: 'Password' },
      },
      async authorize(credentials, req) {
        try {
          const {
            data: { authenticateUserWithPassword },
          } = await client.mutate({
            mutation: AUTHENTICATE_USER as DocumentNode,
            variables: {
              email: credentials?.email,
              password: credentials?.password,
            },
          });

          const { item: user, sessionToken } = authenticateUserWithPassword;

          if (user) {
            return user.isVerified ? { ...user, sessionToken } : false;
          }
        } catch (e) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      if (user) {
        token.id = user.id;
        token.sessionToken = user.sessionToken;
      }

      return token;
    },
    async session({ session, user, token }) {
      if (token) {
        session.id = token.id;
        session.token = token.sessionToken;
      }

      return session;
    },
  },
  session: {
    maxAge: 30 * 60,
  },
  pages: {
    signIn: '/?signIn=true',
  },
};

export default NextAuth(authOptions);
