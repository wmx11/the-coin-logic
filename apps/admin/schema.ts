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
  image,
} from '@keystone-6/core/fields';
import { document } from '@keystone-6/fields-document';
import { Lists } from '.keystone/types';
import { createProject, deleteProject, updateProject } from './utils/holdersTrackerCrud';

export const lists: Lists = {
  User: list({
    fields: {
      name: text(),
      email: text({
        validation: { isRequired: true },
        isIndexed: 'unique',
        isFilterable: true,
      }),
      isSubscribedToEmail: checkbox({ defaultValue: false }),
      password: password({ validation: { isRequired: true } }),
      subscribedToProductTill: timestamp(),
      referrer: text(),
      projects: relationship({ ref: 'Project', many: true }),
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
      dateAdded: timestamp({ defaultValue: { kind: 'now' } }),
    },
  }),
  Project: list({
    fields: {
      name: text({ validation: { isRequired: true } }),
      slug: text({ validation: { isRequired: true } }),
      logo: image({ storage: 'localLogos' }),
      enabled: checkbox({ defaultValue: false }),
      isListed: checkbox({ defaultValue: false }),
      trackHolders: checkbox({ defaultValue: false }),
      isRebasing: checkbox({ defaultValue: false }),
      tags: relationship({
        ref: 'Tag.projects',
        many: true,
      }),
      contractAddress: text(),
      pairAddress: text(),
      burnAddress: text(),
      liquidityPair: relationship({ ref: 'LiquidityPair', many: true }),
      network: relationship({ ref: 'Network' }),
      trackHoldersFromTokenAmount: float({ defaultValue: 0 }),
      description: text({ ui: { displayMode: 'textarea' } }),
      ABI: json(),
      customData: json({ defaultValue: [] }),
      sellTax: float(),
      buyTax: float(),
      rebasePeriod: text(),
      apy: float(),
      dailyApy: float(),
      website: text(),
      whitepaper: text(),
      twitter: text(),
      telegram: text(),
      discord: text(),
      reddit: text(),
      youtube: text(),
      github: text(),
      dateAdded: timestamp({ defaultValue: { kind: 'now' } }),
      launchDate: timestamp(),
      launchBlock: integer(),
      trackFromBlock: integer(),
    },
    hooks: {
      afterOperation: async ({ operation, item, originalItem, context }) => {
        switch (operation) {
          case 'create':
            createProject(item, context);
            break;
          case 'update':
            updateProject(item, context);
            break;
          case 'delete':
            deleteProject(originalItem);
            break;
          default:
            break;
        }
      },
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
  LiquidityPair: list({
    fields: {
      name: text({ validation: { isRequired: true } }),
      address: text(),
      stablePair: relationship({ ref: 'StableLiquidityPair' }),
      network: relationship({ ref: 'Network' }),
      project: relationship({ ref: 'Project' }),
      exchange: relationship({ ref: 'Exchange' }),
    },
  }),
  Network: list({
    fields: {
      name: text({ validation: { isRequired: true } }),
      logo: image({ storage: 'localLogos' }),
      url: text({ validation: { isRequired: true } }),
    },
  }),
  Exchange: list({
    fields: {
      name: text({ validation: { isRequired: true } }),
      logo: image({ storage: 'localLogos' }),
      url: text({ validation: { isRequired: true } }),
      tradeUrl: text({ validation: { isRequired: true } }),
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
  Roadmap: list({
    fields: {
      title: text(),
      isFinished: checkbox({ defaultValue: false }),
      content: text({ ui: { displayMode: 'textarea' } }),
      estimated: text(),
      dateAdded: timestamp({ defaultValue: { kind: 'now' } }),
    },
  }),
  Content: list({
    fields: {
      title: text(),
      slug: text(),
      image: image({ storage: 'localImages' }),
      enabled: checkbox({ defaultValue: false }),
      content: document({
        formatting: true,
        dividers: true,
        links: true,
        layouts: [
          [1, 1],
          [1, 1, 1],
        ],
      }),
      blockName: relationship({ ref: 'ContentBlock' }),
      dateAdded: timestamp({ defaultValue: { kind: 'now' } }),
    },
  }),
  ContentBlock: list({
    fields: {
      title: text(),
      blockName: text(),
      enabled: checkbox({ defaultValue: false }),
    },
  }),
};
