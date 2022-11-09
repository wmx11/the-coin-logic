import { Lists } from '.keystone/types';
import { list } from '@keystone-6/core';
import { text, relationship, timestamp } from '@keystone-6/core/fields';

const CreatorReview: Lists = {
  CreatorReview: list({
    fields: {
      review: text({ ui: { displayMode: 'textarea' }, validation: { isRequired: true } }),
      user: relationship({ ref: 'User' }),
      creator: relationship({ ref: 'Creator.reviews' }),
      dateAdded: timestamp({ defaultValue: { kind: 'now' } }),
      updatedAt: timestamp({
        db: {
          updatedAt: true,
        },
      }),
    },
  }),
};
export default CreatorReview;
