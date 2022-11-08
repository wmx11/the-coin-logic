// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { getIpAddress } from 'utils/utils';

const RECAPTHA_SCORE = 0.5;

const verifyRecaptcha = (token: string) => {
  const secret = process.env.RECAPTHA_SECRET_KEY;
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`;
  return axios.post(url);
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ success: boolean; ip: string | undefined; message: string | undefined }>,
) {
  const { token } = req.body;
  const ip = getIpAddress(req);

  const recaptchaResponse = await verifyRecaptcha(token);
  
  if (recaptchaResponse.data.success && recaptchaResponse.data.score >= RECAPTHA_SCORE) {
    return res.status(200).json({ success: true, ip, message: '' });
  }

  return res.status(400).json({ success: false, ip: undefined, message: '' });
}
