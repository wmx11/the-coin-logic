import { Lists } from '.keystone/types';
import { list } from '@keystone-6/core';
import { relationship, text, timestamp } from '@keystone-6/core/fields';
import { isAdmin } from '../utils/rbac';

const UserAuth: Lists = {
  UserAuth: list({
    fields: {
      name: text(),
      email: text({ isIndexed: 'unique' }),
      emailVerified: timestamp({ db: { map: 'email_verified' } }),
      image: text(),
      user: relationship({ ref: 'User.userAuth' }),
      access_token: text(),
      accounts: relationship({ ref: 'Account.user', many: true }),
      sessions: relationship({ ref: 'Session.user', many: true }),
    },
    access: {
      operation: {
        query: isAdmin,
        delete: isAdmin,
        update: isAdmin,
      },
    },
    ui: {
      isHidden: true,
    },
    db: {
      map: 'users',
    },
  }),
};

export default UserAuth;
