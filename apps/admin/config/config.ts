import { default as prodConfig } from './prod.config';

const config = {
  cors: {
    origin: [
      'http://localhost',
      'http://localhost:3000',
      'https://thecoinlogic.com',
      'https://www.thecoinlogic.com',
      'https://cms.thecoinlogic.com',
      'https://www.cms.thecoinlogic.com',
    ],
  },
};

export default process.env.NODE_ENV === 'production' ? prodConfig : config;
