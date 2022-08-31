import { Lists } from '.keystone/types';
import { list } from '@keystone-6/core';
import { checkbox, float, image, integer, json, relationship, select, text, timestamp } from '@keystone-6/core/fields';
import slugify from '../utils/slugify';

const Project: Lists = {
  Project: list({
    fields: {
      name: text({ validation: { isRequired: true } }),
      slug: text({
        hooks: {
          resolveInput: async (data) => slugify('slug', 'name')(data),
        },
      }),
      logo: image({ storage: 'localLogos' }),
      enabled: checkbox({ defaultValue: false }),
      isListed: checkbox({ defaultValue: false }),
      trackData: checkbox({ defaultValue: false }),
      trackHolders: checkbox({ defaultValue: false }),
      isRebasing: checkbox({ defaultValue: false }),
      initialized: checkbox({ defaultValue: false }),
      status: select({
        ui: {
          displayMode: 'segmented-control',
        },
        options: [
          { label: 'Idle', value: 'idle' },
          { label: 'Syncing', value: 'syncing' },
          { label: 'Failed', value: 'failed' },
          { label: 'Tracking Holdings', value: 'tracking_holdings' },
        ],
      }),
      tags: relationship({
        ref: 'Tag.projects',
        many: true,
      }),
      contractAddress: text(),
      pairAddress: text(),
      burnAddress: text({ defaultValue: '0x000000000000000000000000000000000000dead' }),
      liquidityPair: relationship({ ref: 'LiquidityPair.project', many: true }),
      network: relationship({ ref: 'Network' }),
      trackHoldersFromTokenAmount: float({ defaultValue: 0 }),
      description: text({ ui: { displayMode: 'textarea' } }),
      launchDate: timestamp(),
      launchBlock: integer(),
      user: relationship({ ref: 'User.projects' }),
      notifications: relationship({ ref: 'Notification.project', many: true }),
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
      medium: text(),
      dateAdded: timestamp({ defaultValue: { kind: 'now' } }),
      holders: relationship({
        ref: 'Holder',
        many: true,
        ui: {
          displayMode: 'count',
        },
      }),
    },
  }),
};

export default Project;
