import { Lists } from '.keystone/types';
import { list } from '@keystone-6/core';
import { checkbox, float, image, integer, json, relationship, select, text, timestamp } from '@keystone-6/core/fields';
import slugify from '../utils/slugify';
import { isAdmin } from '../utils/rbac';

const Project: Lists = {
  Project: list({
    fields: {
      name: text({ validation: { isRequired: true } }),
      slug: text({
        ui: { description: 'Project slug. Automatically filled in upon creating/saving.' },
        hooks: {
          resolveInput: async (data) => slugify('slug', 'name')(data),
        },
      }),
      logo: image({ storage: 'localLogos' }),
      enabled: checkbox({
        defaultValue: false,
        ui: { description: 'Is the project enabled and ready for data tracking.' },
      }),
      isListed: checkbox({ defaultValue: false, ui: { description: 'Is the project listed on the leaderboard.' } }),
      trackData: checkbox({ defaultValue: false, ui: { description: 'Is the project tracking market data.' } }),
      trackHolders: checkbox({ defaultValue: false, ui: { description: 'Is the project tracking holders data.' } }),
      isRebasing: checkbox({
        defaultValue: false,
        ui: { description: 'Is the project rebasing. Used for periodical wallet balance updates.' },
      }),
      initialized: checkbox({
        defaultValue: false,
        ui: { description: 'Is the project fully synced with the holders data.' },
      }),
      status: select({
        ui: {
          displayMode: 'segmented-control',
          description: 'Tracking status of the project',
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
    access: {
      operation: {
        create: (data) => isAdmin(data),
        delete: (data) => isAdmin(data),
        update: (data) => isAdmin(data),
      },
    },
  }),
};

export default Project;