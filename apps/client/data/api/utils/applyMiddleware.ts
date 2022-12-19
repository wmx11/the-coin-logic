import { NextApiRequest, NextApiResponse } from 'next';

const applyMiddleware = (middleware: any) => (request: NextApiRequest, response: NextApiResponse) =>
  new Promise((resolve, reject) => {
    middleware(request, response, (result: any) => {
      return result instanceof Error ? reject(result) : resolve(result);
    });
  });

export default applyMiddleware;
