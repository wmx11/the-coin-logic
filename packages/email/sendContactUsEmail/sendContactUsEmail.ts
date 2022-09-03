import config from '../config';
import emailClient from '../emailClient';

type SendContactUsEmail = {
  from: string;
  name: string;
  message: string;
};

const sendContactUsEmail = async ({ from, name, message }: SendContactUsEmail) => {
  try {
    await emailClient.send({
      to: config.tclContactEmail,
      from: { email: config.tclEmail, name: 'TCL Contact Form' },
      replyTo: from,
      subject: `${name} - I'd like to contact`,
      text: message,
    });
  } catch (error) {
    console.log(error);
  }
};

export default sendContactUsEmail;
