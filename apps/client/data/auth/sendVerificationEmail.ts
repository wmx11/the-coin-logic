import { VERIFY_EMAIL_ID } from 'constants/email';
import { IsSafeAuth } from 'data/api/request';
import routes from 'routes';
import { signedRequest } from 'utils/signedRequest';

export const sendVerificationEmail = async (email: string, token: string) => {
  return await signedRequest<IsSafeAuth>(
    {
      type: 'post',
      url: routes.api.email.submit,
      data: {
        subject: 'Please verify your email',
        to: email,
        templateId: VERIFY_EMAIL_ID,
        dynamicTemplateData: {
          email_verification_link: `${routes.api.user.verifyEmail}/${token}`,
        },
      },
    },
    email as string,
    {
      trusted: true,
      signature: 'email_submit',
    },
  );
};
