import { Lists } from '.keystone/types';
import { list } from '@keystone-6/core';
import { float, relationship, select, text, timestamp } from '@keystone-6/core/fields';

const Payment: Lists = {
  Payment: list({
    fields: {
      name: text({ validation: { isRequired: true }, label: 'Invoice Name'}),
      description: text({ validation: { isRequired: true }, ui: { displayMode: 'textarea' } }),
      quantity: float({ validation: { isRequired: true } }),
      price: float({ validation: { isRequired: true } }),
      discount: float(),
      tax: float(),
      amount: float({ validation: { isRequired: true } }),
      billedTo: relationship({ ref: 'User.payments' }),
      paymentMethod: text(),
      paymentAddress: text(),
      status: select({
        ui: { displayMode: 'segmented-control' },
        options: [
          { label: 'Draft', value: 'draft' },
          { label: 'Awaiting Payment', value: 'pending' },
          { label: 'Paid', value: 'paid' },
          { label: 'Canceled', value: 'canceled' },
        ],
      }),
      invoiceUrl: text(),
      dateIssued: timestamp({ defaultValue: { kind: 'now' } }),
      datePaid: timestamp(),
    },
  }),
};

export default Payment;
