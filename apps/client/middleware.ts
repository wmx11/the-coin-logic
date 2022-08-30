import withAuth from 'next-auth/middleware';

export default withAuth(function middleware(req) {}, {
  callbacks: {
    authorized: ({ token }) => {
      return !!token?.email && !!token?.id;
    },
  },
});

export const config = {
  matcher: ['/profile/:path*'],
};
