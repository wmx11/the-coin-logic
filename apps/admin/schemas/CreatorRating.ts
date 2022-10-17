import { Lists } from '.keystone/types';
import { list } from '@keystone-6/core';
import { integer, relationship, timestamp } from '@keystone-6/core/fields';

const CreatorRating: Lists = {
  CreatorRating: list({
    fields: {
      rating: integer({
        defaultValue: 0,
        validation: {
          max: 5,
        },
      }),
      creator: relationship({ ref: 'Creator.ratings' }),
      dateAdded: timestamp({ defaultValue: { kind: 'now' } }),
      updatedAt: timestamp({
        db: {
          updatedAt: true,
        },
      }),
    },
  }),
};
export default CreatorRating;
