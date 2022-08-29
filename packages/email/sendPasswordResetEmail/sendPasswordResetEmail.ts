import config from '../config';
import emailClient from '../emailClient';

const message = {
  from: config.sender,
  subject: 'TCL - Password Reset Request',
};

const sendPasswordResetEmail = async (to: string, resetLink: string) => {
  try {
    await emailClient.send({
      to,
      ...message,
      html: `
      <div>
      <p>Looks like you have requested a password reset.</p>
      <p>To reset your password, click on the button below.</p>
      <a href="${resetLink}" target="_blank" style="text-decoration: none; cursor: pointer;">
        <button
          style="
            padding: 10px;
            background: #7950f2;
            max-width: 200px;
            text-align: center;
            color: white;
            border-radius: 5px;
            text-decoration: none;
            font-weight: bold;
            outline: none;
            border: none;
            cursor: pointer;
          "
        >
          Reset password
        </button>
      </a>
      <p>The link is only valid for 10 minutes.</p>
      <p>If you are experiencing any issues, please contact us.</p>
      <p>
        If you have not requested a password reset, please ignore this message.
      </p>
    </div>`,
    });
  } catch (error) {
    console.log(error);
  }
};

export default sendPasswordResetEmail;
