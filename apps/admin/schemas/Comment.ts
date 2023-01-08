import { Lists } from '.keystone/types';
import { list } from '@keystone-6/core';
import { integer, json, relationship, timestamp } from '@keystone-6/core/fields';

const Comment: Lists = {
  Comment: list({
    fields: {
      content: json(),
      sentiment: integer({
        validation: {
          max: 1,
        },
      }),
      likes: relationship({ ref: 'User', many: true, ui: { displayMode: 'count' } }),
      reports: relationship({ ref: 'User', many: true, ui: { displayMode: 'count' } }),
      user: relationship({ ref: 'User' }),
      project: relationship({ ref: 'Project.comments' }),
      provider: relationship({ ref: 'Provider.comments' }),
      dateAdded: timestamp({ defaultValue: { kind: 'now' } }),
      updatedAt: timestamp({
        db: {
          updatedAt: true,
        },
      }),
    },
  }),
};
export default Comment;
