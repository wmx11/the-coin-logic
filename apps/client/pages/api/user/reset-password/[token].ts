import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { token } = req.query;

  if (!token) {
    return res.redirect('/');
  }

  return res.redirect(`/?reset-token=${token}`);
}
