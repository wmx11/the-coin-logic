import { NEXT_AUTH_SESSION_TOKEN, NEXT_AUTH_SESSION_TOKEN_SECURE } from 'constants/general';
import { isAfter } from 'date-fns';
import withAuth from 'next-auth/middleware';
import { tokens } from 'utils/tokens/tokens';

export default withAuth(function middleware(req) {}, {
  callbacks: {
    authorized: async ({ req }) => {
      const cookie = req.cookies.get(NEXT_AUTH_SESSION_TOKEN);
      const cookieSecure = req.cookies.get(NEXT_AUTH_SESSION_TOKEN_SECURE);
      try {
        const verified = await tokens.verify<{
          id: string;
          email: string;
          accessToken: string;
          isVerified: boolean;
          expires: Date;
        }>(cookieSecure || (cookie as string), process.env.NEXT_PUBLIC_SIGNED_SECRET || '');

        if (!verified.isVerified) {
          return false;
        }

        if (!verified.email) {
          return false;
        }

        if (isAfter(new Date(), new Date(verified.expires))) {
          return false;
        }

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
});

export const config = {
  matcher: ['/profile/:path*'],
};
