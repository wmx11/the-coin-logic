// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import sendRequestProjectListingEmail from 'tcl-packages/email/sendRequestProjectListingEmail/sendRequestProjectListingEmail';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req;

  const { email, message, name } = body;

  const sendEmail = async () => {
    if (!email || !message || !name) {
      return;
    }

    await sendRequestProjectListingEmail({ from: email, name, message });
  };

  switch (method) {
    case 'POST':
      sendEmail();
      return res.status(200).end('Ok');
    default:
      return res.status(405).end('Not allowed');
  }
}
