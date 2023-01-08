import { Lists } from '.keystone/types';
import { list } from '@keystone-6/core';
import { relationship, text, timestamp } from '@keystone-6/core/fields';
import { isAdmin } from '../utils/rbac';

const Session: Lists = {
  Session: list({
    fields: {
      user: relationship({
        ref: 'UserAuth.sessions',
        db: {
          foreignKey: {
            map: 'user_id',
          },
        },
      }),
      sessionToken: text({ isIndexed: 'unique', db: { map: 'session_token' } }),
      expires: timestamp(),
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
      map: 'sessions',
    },
  }),
};
export default Session;
