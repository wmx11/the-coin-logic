import { Lists } from '.keystone/types';
import { list } from '@keystone-6/core';
import { checkbox, float, text, timestamp } from '@keystone-6/core/fields';
import slugify from '../utils/slugify';

const PaymentPlan: Lists = {
  PaymentPlan: list({
    fields: {
      name: text(),
      slug: text({
        hooks: {
          resolveInput: async (data) => slugify('slug', 'name')(data),
        },
      }),
      tooltip: text({ ui: { displayMode: 'textarea' }}),
      description: text({ ui: { displayMode: 'textarea' }}),
      enabled: checkbox({ defaultValue: false }),
      price: float(),
      discount: float(),
      dateAdded: timestamp({ defaultValue: { kind: 'now' } }),
      updatedAt: timestamp({
        db: {
          updatedAt: true,
        },
      }),
    },
  }),
};
export default PaymentPlan;
