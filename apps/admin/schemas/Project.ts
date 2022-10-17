import { Lists } from '.keystone/types';
import { list } from '@keystone-6/core';
import {
  checkbox,
  float,
  image,
  integer,
  json,
  relationship,
  select,
  text,
  timestamp
} from '@keystone-6/core/fields';
import { isAdmin } from '../utils/rbac';
import slugify from '../utils/slugify';

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
      periodicWalletUpdates: checkbox({
        defaultValue: false,
        ui: { description: 'Used for periodical wallet balance updates. Typically for rebasing projects.' },
      }),
      initialized: checkbox({
        defaultValue: false,
        ui: { description: 'Is the project fully synced with the holders data.' },
      }),
      markForDeletion: checkbox({
        defaultValue: false,
        ui: { description: 'Is the project marked for deletion.' },
      }),
      useDexScreener: checkbox({ defaultValue: false, ui: { description: 'Use Dex Screener API to track data.' } }),
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
      exhangeAddress: text({
        ui: {
          description:
            "The pair address used by the exchange contract. Can be the same as pairAddress or different if it's a custom LP.",
        },
      }),
      burnAddress: text({ defaultValue: '0x000000000000000000000000000000000000dead' }),
      liquidityPair: relationship({ ref: 'LiquidityPair.project', many: true }),
      network: relationship({ ref: 'Network' }),
      trackHoldersFromTokenAmount: float({
        defaultValue: 0,
        ui: { description: 'Specify the token amount for tracking wallets.' },
      }),
      trackHoldersFromDollarAmount: float({
        defaultValue: 0,
        ui: { description: 'Specify the dollar value for tracking wallets.' },
      }),
      description: text({ ui: { displayMode: 'textarea' } }),
      launchDate: timestamp(),
      launchBlock: integer(),
      user: relationship({ ref: 'User.projects', many: true }),
      notifications: relationship({ ref: 'Notification.project', many: true }),
      ABI: json(),
      customTrackers: relationship({ ref: 'CustomTracker.project', many: true }),
      sellTax: float(),
      buyTax: float(),
      rebasePeriod: text(),
      apy: float(),
      dailyApy: float(),
      calendar: text(),
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
      parentProject: relationship({
        ref: 'Project',
        many: true,
      }),
      relatedProjects: relationship({
        ref: 'Project',
        many: true,
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
