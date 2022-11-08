import { Lists } from '.keystone/types';
import { list } from '@keystone-6/core';
import { float, relationship, timestamp } from '@keystone-6/core/fields';

const OrderItem: Lists = {
  OrderItem: list({
    fields: {
      order: relationship({ ref: 'Order.orderItem', db: { foreignKey: true } }),
      product: relationship({ ref: 'Product', db: { foreignKey: true } }),
      price: float(),
      quantity: float({ defaultValue: 1 }),
      discount: float({ defaultValue: 0 }),
      tax: float({ defaultValue: 0 }),
      dateAdded: timestamp({ defaultValue: { kind: 'now' } }),
      updatedAt: timestamp({
        db: {
          updatedAt: true,
        },
      }),
    },
  }),
};
export default OrderItem;
