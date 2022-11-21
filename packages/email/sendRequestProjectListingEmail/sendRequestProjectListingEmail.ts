import config from '../config';
import emailClient from '../emailClient';

type SendRequestProjectListingEmail = {
  from: string;
  name: string;
  message: string;
};

const sendRequestProjectListingEmail = async ({ from, name, message }: SendRequestProjectListingEmail) => {
  try {
    await emailClient.send({
      to: config.tclContactEmail,
      from: { email: config.tclEmail, name: 'TCL Project Listing' },
      replyTo: from,
      subject: `${name} - I want to list a project`,
      html: message,
    });
  } catch (error) {
    console.log(error);
  }
};

export default sendRequestProjectListingEmail;
