import { Lists } from '.keystone/types';
import { list } from '@keystone-6/core';
import { text, timestamp, integer, relationship, json, checkbox } from '@keystone-6/core/fields';

const Coupon: Lists = {
  Coupon: list({
    fields: {
      name: text(),
      code: text(),
      enabled: checkbox({ defaultValue: false }),
      discountPercentage: integer({ ui: { description: 'The discount amount in percent (10%)' } }),
      timesPerUser: integer({ ui: { description: 'How many times a single user can use this discount coupon' } }),
      validFrom: timestamp(),
      validTill: timestamp(),
      usedBy: json({
        defaultValue: [
          {
            user: 'id',
            times: 0,
          },
        ],
      }),
      acceptFromReferrers: relationship({ ref: 'User', many: true }),
      acceptFromNetworks: relationship({ ref: 'Network', many: true }),
      cart: relationship({ ref: 'Cart.couponCode', many: true }),
      order: relationship({ ref: 'Order.couponCode', many: true }),
      dateAdded: timestamp({ defaultValue: { kind: 'now' } }),
      updatedAt: timestamp({
        db: {
          updatedAt: true,
        },
      }),
    },
  }),
};
export default Coupon;
