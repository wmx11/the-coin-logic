import * as trpcExpress from '@trpc/server/adapters/express';
import * as trpc from '@trpc/server';
import express from 'express';

const appRouter = trpc.router().query('getStruff', {
  async resolve() {
    return { id: 1, name: 'test' };
  },
});

const app = express();

const createContext = ({ req, res }: trpcExpress.CreateExpressContextOptions) => ({}); // no context
type Context = trpc.inferAsyncReturnType<typeof createContext>;

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  }),
);

app.listen(4000);
