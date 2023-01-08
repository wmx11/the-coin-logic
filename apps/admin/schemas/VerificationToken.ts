import { Lists } from '.keystone/types';
import { list } from '@keystone-6/core';
import { text, timestamp } from '@keystone-6/core/fields';

const VerificationToken: Lists = {
  VerificationToken: list({
    fields: {
      identifier: text(),
      token: text({ isIndexed: 'unique' }),
      expires: timestamp(),
    },
    ui: {
      isHidden: true,
    },
    db: {
      map: 'verificationtokens',
    },
  }),
};
export default VerificationToken;
