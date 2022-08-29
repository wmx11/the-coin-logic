import { list } from '@keystone-6/core';
import { Lists } from '.keystone/types';
import { relationship, text, timestamp } from '@keystone-6/core/fields';

const LiquidityPair: Lists = {
  LiquidityPair: list({
    fields: {
      name: text({ validation: { isRequired: true } }),
      address: text(),
      stablePair: relationship({ ref: 'StableLiquidityPair' }),
      network: relationship({ ref: 'Network' }),
      project: relationship({ ref: 'Project.liquidityPair' }),
      exchange: relationship({ ref: 'Exchange' }),
      dateAdded: timestamp({ defaultValue: { kind: 'now' } }),
    },
  }),
};
export default LiquidityPair;
