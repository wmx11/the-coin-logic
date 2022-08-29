// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type Data = {
  success: boolean;
};

const RECAPTHA_SCORE = 0.5;

const verifyRecaptcha = (token: string) => {
  const secret = process.env.SECRET_KEY;
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`;
  return axios.post(url);
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { token } = req.body;

  const recaptchaResponse = await verifyRecaptcha(token);

  if (recaptchaResponse.data.success && recaptchaResponse.data.score >= RECAPTHA_SCORE) {
    return res.status(200).json({ success: true });
  }

  return res.status(400).json({ success: false });
}
