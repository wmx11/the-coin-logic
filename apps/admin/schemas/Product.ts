import { Lists } from '.keystone/types';
import { list } from '@keystone-6/core';
import { checkbox, float, json, text, timestamp } from '@keystone-6/core/fields';
import slugify from '../utils/slugify';

const Product: Lists = {
  Product: list({
    fields: {
      name: text({ validation: { isRequired: true } }),
      slug: text({
        ui: { description: 'Automatically filled in upon creating/saving.' },
        hooks: {
          resolveInput: async (data) => slugify('slug', 'name')(data),
        },
      }),
      sku: text(),
      enabled: checkbox({ defaultValue: false }),
      isForListed: checkbox({
        defaultValue: false,
        ui: { description: 'Is the product used for Listed proejcts (Officially listed on TCL)' },
      }),
      isForUnlisted: checkbox({
        defaultValue: false,
        ui: { description: 'Is the product used for Unlisted proejcts (Not officially listed on TCL)' },
      }),
      isOneTime: checkbox({ defaultValue: false, ui: { description: 'Is payment one time only?' } }),
      isMonthly: checkbox({
        defaultValue: false,
        ui: { description: 'Is payment recurring? (Monthly, every 30 days)' },
      }),
      label: text(),
      priceLabel: text(),
      price: float(),
      discount: float(),
      description: text(),
      offers: text({ ui: { displayMode: 'textarea' } }),
      styles: json(),
      dateAdded: timestamp({ defaultValue: { kind: 'now' } }),
      updatedAt: timestamp({
        db: {
          updatedAt: true,
        },
      }),
    },
  }),
};
export default Product;
