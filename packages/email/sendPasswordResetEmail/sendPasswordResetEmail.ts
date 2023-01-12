import config from '../config';
import emailClient from '../emailClient';

const message = {
  from: {
    name: 'TheCoinLogic',
    email: config.tclEmail,
  },
  subject: 'TCL - Password Reset Request',
};

const sendPasswordResetEmail = async (to: string, resetLink: string) => {
  try {
    await emailClient.send({
      to,
      ...message,
      templateId: 'd-d39db4be8e52426cadf36845a49c3d66',
      dynamicTemplateData: {
        password_reset_link: resetLink,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export default sendPasswordResetEmail;
