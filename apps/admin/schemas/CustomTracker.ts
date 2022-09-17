import { list } from '@keystone-6/core';
import { Lists } from '.keystone/types';
import { checkbox, float, relationship, select, text, timestamp } from '@keystone-6/core/fields';

const CustomTracker: Lists = {
  CustomTracker: list({
    fields: {
      label: text({ ui: { description: 'Label of the unit. It will be used in the Stats tab element as the title.' } }),
      description: text({ ui: { description: 'Description of the unit. It will be used as a tooltip.' } }),
      address: text({ ui: { description: 'Contract address.' } }),
      pairAddress: text({ ui: { description: 'Pair address used in exchanges.' } }),
      getBalanceOf: text({ ui: { description: 'Wallet address whose balance will be checked.' } }),
      decimals: float({ defaultValue: 18 }),
      enabled: checkbox({ defaultValue: false }),
      useDexScreener: checkbox({ defaultValue: false, ui: { description: 'Use Dex Screener API to track data.' } }),
      method: select({
        options: [
          { label: 'Get native token balance', value: 'getBalance' },
          { label: 'Get total supply of the token', value: 'totalSupply' },
          { label: 'Get token balance in a wallet', value: 'balanceOf' },
          { label: 'Get volume (DEX)', value: 'volume' },
          { label: 'Get transactions (DEX)', value: 'txns' },
          { label: 'Get price USD (DEX)', value: 'priceUsd' },
          { label: 'Get liquidity (DEX)', value: 'liquidity' },
          { label: 'Get FDV (DEX)', value: 'fdv' },
        ],
      }),
      network: relationship({ ref: 'Network' }),
      project: relationship({ ref: 'Project.customTrackers', many: true }),
      dateAdded: timestamp({ defaultValue: { kind: 'now' } }),
    },
  }),
};

export default CustomTracker;
