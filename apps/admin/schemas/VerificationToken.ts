import { Lists } from '.keystone/types';
import { list } from '@keystone-6/core';
import { relationship, text, timestamp } from '@keystone-6/core/fields';

const VerificationToken: Lists = {
  VerificationToken: list({
    fields: {
      user: relationship({ ref: 'User' }),
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
