import { default as prodConfig } from './prod.config';

const config = {
  cors: {
    origin: [
      'localhost',
      'https://thecoinlogic.com',
      'https://www.thecoinlogic.com',
      'https://cms.thecoinlogic.com',
      'https://www.cms.thecoinlogic.com',
    ],
  },
};

export default process.env.NODE_ENV === 'production' ? prodConfig : config;
