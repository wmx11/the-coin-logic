import { NEXT_AUTH_SESSION_TOKEN, NEXT_AUTH_SESSION_TOKEN_SECURE } from 'constants/general';
import withAuth from 'next-auth/middleware';
import { tokens } from 'utils/tokens/tokens';

export default withAuth(function middleware(req) {}, {
  callbacks: {
    authorized: async ({ req }) => {
      const cookie = req.cookies.get(NEXT_AUTH_SESSION_TOKEN);
      const cookieSecure = req.cookies.get(NEXT_AUTH_SESSION_TOKEN_SECURE);

      try {
        const verified = await tokens.verify<{ id: string; email: string; accessToken: string }>(
          cookieSecure || (cookie as string),
          process.env.NEXT_PUBLIC_SIGNED_SECRET || '',
        );
        return !!verified?.id && !!verified?.email && !!verified?.accessToken;
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
