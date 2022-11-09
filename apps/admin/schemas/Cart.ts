import { Lists } from '.keystone/types';
import { list } from '@keystone-6/core';
import { relationship, timestamp } from '@keystone-6/core/fields';

const Cart: Lists = {
  Cart: list({
    fields: {
      user: relationship({ ref: 'User', db: { foreignKey: true } }),
      cartItem: relationship({ ref: 'CartItem.cart', many: true }),
      dateAdded: timestamp({ defaultValue: { kind: 'now' } }),
      updatedAt: timestamp({
        db: {
          updatedAt: true,
        },
      }),
    },
  }),
};
export default Cart;
