import { Lists } from '.keystone/types';
import { list } from '@keystone-6/core';
import { float, integer, relationship, text, timestamp } from '@keystone-6/core/fields';

const Order: Lists = {
  Order: list({
    fields: {
      orderNumber: integer({ defaultValue: { kind: 'autoincrement' }, db: { isNullable: false } }),
      user: relationship({ ref: 'User', db: { foreignKey: true } }),
      orderItem: relationship({ ref: 'OrderItem.order' }),
      project: relationship({ ref: 'Project', db: { foreignKey: true } }),
      walletAddress: text(),
      transactionHash: text(),
      currency: text(),
      currencyPriceEur: float(),
      durationInMonths: float(),
      paymentNetwork: relationship({ ref: 'Network' }),
      discount: float({ defaultValue: 0 }),
      tax: float({ defaultValue: 0 }),
      total: float(),
      subTotal: float(),
      grandTotal: float(),
      couponCode: relationship({ ref: 'Coupon.order' }),
      dateAdded: timestamp({ defaultValue: { kind: 'now' } }),
      updatedAt: timestamp({
        db: {
          updatedAt: true,
        },
      }),
    },
  }),
};
export default Order;
