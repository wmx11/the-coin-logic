import dotenv from 'dotenv';
import root from 'find-yarn-workspace-root';

import emailClient from '@sendgrid/mail';

dotenv.config({ path: `${root()}/.env` });

const apiKey = process.env.SENDGRID_API || '';

emailClient.setApiKey(apiKey);

export default emailClient;
