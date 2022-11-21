import { Lists } from '.keystone/types';
import { list } from '@keystone-6/core';
import { checkbox, float, image, integer, json, relationship, select, text, timestamp } from '@keystone-6/core/fields';
import { CacheScope } from 'apollo-cache-control';
import { isAdmin, isUser } from '../utils/rbac';
import slugify from '../utils/slugify';

const Project: Lists = {
  Project: list({
    graphql: {
      cacheHint: {
        maxAge: 5 * 60,
        scope: CacheScope.Public,
      },
    },
    fields: {
      name: text({ validation: { isRequired: true } }),
      slug: text({
        ui: { description: 'Automatically filled in upon creating/saving.' },
        hooks: {
          resolveInput: async (data) => slugify('slug', 'name')(data),
        },
        isIndexed: true,
      }),
      logo: image({ storage: 'localLogos' }),
      enabled: checkbox({
        defaultValue: false,
        ui: { description: 'Is the project enabled and ready for data tracking.' },
      }),
      isPending: checkbox({
        defaultValue: false,
        ui: { description: 'Is the project being reviewed.' },
      }),
      isAwaitingPayment: checkbox({
        defaultValue: false,
        ui: { description: 'Is the project approved for listing. This means the project is awaiting payment.' },
      }),
      isListed: checkbox({ defaultValue: false, ui: { description: 'Is the project listed on the leaderboard.' } }),
      trackData: checkbox({ defaultValue: false, ui: { description: 'Is the project tracking market data.' } }),
      trackSocials: checkbox({ defaultValue: false, ui: { description: 'Is the project tracking socials data.' } }),
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
      discordServerId: text(),
      reddit: text(),
      youtube: text(),
      github: text(),
      medium: text(),
      kycLink: text(),
      auditLink: text(),
      auditBy: relationship({ ref: 'Audit.project', many: true }),
      kycBy: relationship({ ref: 'Kyc.project', many: true }),
      customVetting: text({
        ui: {
          displayMode: 'textarea',
          description: 'Reason for why the project is listed and has provided a custom approval.',
        },
      }),
      dateAdded: timestamp({ defaultValue: { kind: 'now' } }),
      ratings: relationship({ ref: 'ProjectRating.project', many: true, ui: { displayMode: 'count' } }),
      reviews: relationship({ ref: 'ProjectComment.project', many: true, ui: { displayMode: 'count' } }),
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
        create: (data) => isUser(data),
        delete: (data) => isAdmin(data),
        update: (data) => isAdmin(data),
      },
    },
  }),
};

export default Project;
