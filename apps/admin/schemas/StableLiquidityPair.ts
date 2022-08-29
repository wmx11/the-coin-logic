import { list } from '@keystone-6/core';
import { Lists } from '.keystone/types';
import { relationship, text, timestamp } from '@keystone-6/core/fields';

const StableLiquidityPair: Lists = {
  StableLiquidityPair: list({
    fields: {
      name: text({ validation: { isRequired: true } }),
      address: text(),
      pairToken: relationship({ ref: 'Token', many: true }),
      network: relationship({ ref: 'Network' }),
      dateAdded: timestamp({ defaultValue: { kind: 'now' } }),
    },
  }),
};

export default StableLiquidityPair;
