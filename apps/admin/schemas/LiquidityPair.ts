import { list } from '@keystone-6/core';
import { Lists } from '.keystone/types';
import { checkbox, integer, relationship, text, timestamp } from '@keystone-6/core/fields';

const LiquidityPair: Lists = {
  LiquidityPair: list({
    fields: {
      name: text({ validation: { isRequired: true } }),
      address: text(),
      tokenAddress: text(),
      order: integer({ defaultValue: 1 }),
      isPrimary: checkbox({ defaultValue: false }),
      useDexScreener: checkbox({ defaultValue: false }),
      stablePair: relationship({ ref: 'StableLiquidityPair' }),
      network: relationship({ ref: 'Network' }),
      project: relationship({ ref: 'Project.liquidityPair', many: true }),
      exchange: relationship({ ref: 'Exchange' }),
      customExchangeAddress: text({
        ui: {
          description:
            'Used when the project wants a specific address to the exchange. For example, including input and output tokens.',
        },
      }),
      dateAdded: timestamp({ defaultValue: { kind: 'now' } }),
    },
  }),
};
export default LiquidityPair;
