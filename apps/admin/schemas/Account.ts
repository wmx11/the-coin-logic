import { Lists } from '.keystone/types';
import { list } from '@keystone-6/core';
import { integer, relationship, text } from '@keystone-6/core/fields';
import { isAdmin } from '../utils/rbac';

const Account: Lists = {
  Account: list({
    fields: {
      user: relationship({
        ref: 'UserAuth.accounts',
        db: {
          foreignKey: {
            map: 'user_id',
          },
        },
      }),
      type: text(),
      provider: text(),
      providerAccountId: text({ isIndexed: 'unique', db: { map: 'provider_account_id' } }),
      refresh_token: text(),
      access_token: text(),
      expires_at: integer(),
      token_type: text(),
      scope: text(),
      id_token: text(),
      session_state: text(),
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
      map: 'accounts',
    },
  }),
};
export default Account;
