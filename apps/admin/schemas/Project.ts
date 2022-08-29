import { list } from '@keystone-6/core';
import { Lists } from '.keystone/types';
import { checkbox, float, image, integer, json, relationship, text, timestamp } from '@keystone-6/core/fields';
import { createProject, deleteProject, updateProject } from '../utils/holdersTrackerCrud';
import slugify from '../utils/slugify';

const Project: Lists = {
  Project: list({
    fields: {
      name: text({ validation: { isRequired: true } }),
      slug: text({
        hooks: {
          resolveInput: async (data) => slugify('blockName', 'title')(data),
        },
      }),
      logo: image({ storage: 'localLogos' }),
      enabled: checkbox({ defaultValue: false }),
      isListed: checkbox({ defaultValue: false }),
      trackHolders: checkbox({ defaultValue: false }),
      isRebasing: checkbox({ defaultValue: false }),
      initialized: checkbox({ defaultValue: false }),
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
      trackFromBlock: integer(),
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
};

export default Project;
