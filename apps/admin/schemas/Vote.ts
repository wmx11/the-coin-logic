import { Lists } from '.keystone/types';
import { list } from '@keystone-6/core';
import { integer, relationship, select, text, timestamp } from '@keystone-6/core/fields';

const Vote: Lists = {
  Vote: list({
    fields: {
      vote: integer({
        defaultValue: 0,
        validation: {
          max: 5,
        },
      }),
      ip: text(),
      type: select({
        options: [
          { label: 'Vote', value: 'vote' }, // 0 - 1
          { label: 'Rating', value: 'rating' }, // 0 - 5
          { label: 'Transparency', value: 'transparency' }, // 0 - 1 for projects
        ],
      }),
      user: relationship({ ref: 'User' }),
      project: relationship({ ref: 'Project.votes' }),
      provider: relationship({ ref: 'Provider.votes' }),
      dateAdded: timestamp({ defaultValue: { kind: 'now' } }),
      updatedAt: timestamp({
        db: {
          updatedAt: true,
        },
      }),
    },
  }),
};
export default Vote;
