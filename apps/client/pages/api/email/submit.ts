import request, { IsSafeAuth } from 'data/api/request';
import { response } from 'data/api/response';
import applyRateLimit from 'data/api/utils/applyRateLimit';
import { NextApiRequest, NextApiResponse } from 'next';
import config from 'tcl-packages/email/config';
import emailClient from 'tcl-packages/email/emailClient';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const requestHandler = request(req, res);
  const responseHandler = response(res);

  try {
    await applyRateLimit(req, res);
  } catch (error) {
    return responseHandler.tooManyRequests(JSON.stringify(error));
  }

  const sendEmail = async (auth: IsSafeAuth) => {
    if (!auth.trusted || auth.signature !== 'email_submit') {
      return responseHandler.unauthorized();
    }

    const { subject, to, replyTo, templateId, html, text, dynamicTemplateData, cc } = req.body;

    if (!subject || !to) {
      return responseHandler.badRequest();
    }

    try {
      await emailClient.send({
        from: {
          email: config.tclEmail,
          name: 'TheCoinLogic',
        },
        cc,
        to,
        subject,
        replyTo: replyTo || undefined,
        templateId: templateId || undefined,
        html: html || undefined,
        text: text || undefined,
        dynamicTemplateData: dynamicTemplateData || undefined,
      });

      return responseHandler.ok();
    } catch (error) {
      return responseHandler.badRequest(JSON.stringify(error));
    }
  };

  return requestHandler.safePost(sendEmail);
};

export default handler;
