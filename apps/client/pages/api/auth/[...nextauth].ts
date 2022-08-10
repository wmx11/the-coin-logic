import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import client from '../../../data/apollo-client';
import { AUTHENTICATE_USER } from '../../../data/mutations';

export default NextAuth({
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
            mutation: AUTHENTICATE_USER,
            variables: {
              email: credentials?.email,
              password: credentials?.password,
            },
          });

          const { item: user } = authenticateUserWithPassword;

          if (user) {
            return user;
          }
        } catch (e) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      // if (user) {
      //   token.lolz = user.cats;
      // }
      return token;
    },
    async session({ session, user, token }) {
      // if (token) {
      //   session.cats = token.lolz;
      // }
      return session;
    },
  },
});
