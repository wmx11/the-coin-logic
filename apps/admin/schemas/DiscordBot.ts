import { Lists } from '.keystone/types';
import { list } from '@keystone-6/core';
import { checkbox, relationship, select, text, timestamp } from '@keystone-6/core/fields';
import { DISCORD_BOTS_CHANNEL, redisClient } from 'tcl-packages/utils/redis';

const DiscordBot: Lists = {
  DiscordBot: list({
    fields: {
      name: text({ validation: { isRequired: true } }),
      enabled: checkbox({ defaultValue: false }),
      isCurrency: checkbox({ defaultValue: false }),
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
          {
            label: 'Holders',
            value: 'holders',
          },
          {
            label: 'Burned Tokens',
            value: 'burnedTokens',
          },
        ],
      }),
      customTracking: text(),
      project: relationship({ ref: 'Project' }),
      dateAdded: timestamp({ defaultValue: { kind: 'now' } }),
    },
    hooks: {
      afterOperation: ({ item }) => {
        redisClient.publish(DISCORD_BOTS_CHANNEL, JSON.stringify(item));
      },
    },
  }),
};

export default DiscordBot;
