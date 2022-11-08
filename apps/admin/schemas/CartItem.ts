import { Lists } from '.keystone/types';
import { list } from '@keystone-6/core';
import { float, relationship, timestamp } from '@keystone-6/core/fields';

const CartItem: Lists = {
  CartItem: list({
    fields: {
      product: relationship({ ref: 'Product', db: { foreignKey: true } }),
      cart: relationship({ ref: 'Cart.cartItem', db: { foreignKey: true } }),
      price: float(),
      tax: float({ defaultValue: 0 }),
      discount: float({ defaultValue: 0 }),
      quantity: float({ defaultValue: 1 }),
      dateAdded: timestamp({ defaultValue: { kind: 'now' } }),
      updatedAt: timestamp({
        db: {
          updatedAt: true,
        },
      }),
    },
  }),
};
export default CartItem;
