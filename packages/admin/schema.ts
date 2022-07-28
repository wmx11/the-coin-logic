import { list } from '@keystone-6/core';

import {
  text,
  relationship,
  password,
  timestamp,
  select,
  checkbox,
  json,
  integer,
  float,
} from '@keystone-6/core/fields';
import { document } from '@keystone-6/fields-document';
import { Lists } from '.keystone/types';

export const lists: Lists = {
  User: list({
    fields: {
      name: text({ validation: { isRequired: true } }),
      email: text({
        validation: { isRequired: true },
        isIndexed: 'unique',
        isFilterable: true,
      }),
      password: password({ validation: { isRequired: true } }),
      subscribedTill: timestamp(),
      apiKey: text(),
      apiSecret: text(),
      Api: relationship({ ref: 'ApiAccessLevel' }),
      projects: relationship({ ref: 'Project' }),
    },
  }),
  MarketStat: list({
    fields: {
      price: float(),
      marketCap: float(),
      totalSupply: float(),
      liquidity: float(),
      pairPrice: float(),
      customData: json({ defaultValue: [] }),
      project: relationship({ ref: 'Project' }),
    },
  }),
  Project: list({
    fields: {
      name: text({ validation: { isRequired: true } }),
      slug: text({ validation: { isRequired: true } }),
      enabled: checkbox({ defaultValue: false }),
      tags: relationship({
        ref: 'Tag.projects',
        many: true,
      }),
      contractAddress: text(),
      pairAddress: text(),
      pairToken: relationship({ ref: 'Token', many: true }),
      network: relationship({ ref: 'Network' }),
      description: text({ ui: { displayMode: 'textarea' } }),
      ABI: json(),
      customData: json({ defaultValue: [] }),
      website: text(),
      whitepaper: text(),
      twitter: text(),
      telegram: text(),
      discord: text(),
      reddit: text(),
    },
  }),
  Token: list({
    fields: {
      name: text({ validation: { isRequired: true } }),
      address: text(),
      ABI: json(),
      network: relationship({ ref: 'Network' }),
    },
  }),
  StableLiquidityPair: list({
    fields: {
      name: text({ validation: { isRequired: true } }),
      address: text(),
      pairToken: relationship({ ref: 'Token', many: true }),
      network: relationship({ ref: 'Network' }),
    },
  }),
  Network: list({
    fields: {
      name: text({ validation: { isRequired: true } }),
      url: text({ validation: { isRequired: true } }),
    },
  }),
  Tag: list({
    fields: {
      name: text(),
      projects: relationship({ ref: 'Project.tags', many: true }),
    },
  }),
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
    },
  }),
  ApiAccessLevel: list({
    fields: {
      name: text(),
      enabled: checkbox({ defaultValue: false }),
      marketBots: checkbox({ defaultValue: false }),
      trackingInterval: select({
        options: [
          {
            label: '30 minutes',
            value: '30',
          },
          {
            label: '5 minutes',
            value: '5',
          },
          {
            label: '1 minute',
            value: '1',
          },
        ],
        ui: {
          displayMode: 'segmented-control',
        },
      }),
      rateLimit: select({
        options: [
          {
            label: '1 per 5s',
            value: '1/5',
          },
          {
            label: '1 per 2s',
            value: '1/2',
          },
          {
            label: '1 per 1s',
            value: '1/1',
          },
        ],
        ui: {
          displayMode: 'segmented-control',
        },
      }),
      price: integer(),
    },
  }),
};
