import { list } from '@keystone-6/core';
import { Lists } from '.keystone/types';
import { checkbox, relationship, select, text, timestamp } from '@keystone-6/core/fields';

const DiscordBot: Lists = {
  DiscordBot: list({
    fields: {
      name: text({ validation: { isRequired: true } }),
      enabled: checkbox({ defaultValue: false }),
      presence: text({ validation: { isRequired: true } }),
      botId: text({ validation: { isRequired: true } }),
      apiKey: text({ validation: { isRequired: true } }),
      tracking: select({
        options: [
          {
            label: 'Price',
            value: 'price',
          },
          {
            label: 'Market Cap',
            value: 'marketCap',
          },
          {
            label: 'Total Supply',
            value: 'totalSupply',
          },
          {
            label: 'Liquidity',
            value: 'liquidity',
          },
          {
            label: 'Pair Price',
            value: 'pairPrice',
          },
        ],
      }),
      customTracking: text(),
      project: relationship({ ref: 'Project' }),
      dateAdded: timestamp({ defaultValue: { kind: 'now' } }),
    },
  }),
};

export default DiscordBot;
