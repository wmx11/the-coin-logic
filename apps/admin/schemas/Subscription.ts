import { Lists } from '.keystone/types';
import { list } from '@keystone-6/core';
import { checkbox, relationship, timestamp } from '@keystone-6/core/fields';

const Subscription: Lists = {
  Subscription: list({
    fields: {
      isActive: checkbox({ defaultValue: false }),
      product: relationship({ ref: 'Product', many: true }),
      user: relationship({ ref: 'User.subscription', db: { foreignKey: true } }),
      order: relationship({ ref: 'Order', db: { foreignKey: true } }),
      dateFrom: timestamp({ defaultValue: { kind: 'now' } }),
      dateTo: timestamp(),
      dateAdded: timestamp({ defaultValue: { kind: 'now' } }),
      updatedAt: timestamp({
        db: {
          updatedAt: true,
        },
      }),
    },
  }),
};
export default Subscription;
