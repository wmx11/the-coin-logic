import { Lists } from '.keystone/types';
import { list } from '@keystone-6/core';
import { checkbox, float, image, relationship, text, timestamp } from '@keystone-6/core/fields';
import slugify from '../utils/slugify';

const Creator: Lists = {
  Creator: list({
    fields: {
      name: text({ validation: { isRequired: true } }),
      slug: text({
        ui: { description: 'Cretor slug. Automatically filled in upon creating/saving.' },
        hooks: {
          resolveInput: async (data) => slugify('slug', 'name')(data),
        },
      }),
      enabled: checkbox({ defaultValue: false }),
      isListed: checkbox({ defaultValue: false }),
      nickname: text(),
      image: image({ storage: 'localImages' }),
      description: text({ ui: { displayMode: 'textarea' } }),
      website: text(),
      twitter: text(),
      telegram: text(),
      discord: text(),
      reddit: text(),
      youtube: text(),
      priceFrom: float(),
      priceTo: float(),
      marketingCampaigns: relationship({ ref: 'MarketingCampaign.creator', many: true, ui: { displayMode: 'count' } }),
      votes: relationship({ ref: 'Vote.creator', many: true, ui: { displayMode: 'count' } }),
      comments: relationship({ ref: 'Comment.creator', many: true, ui: { displayMode: 'count' } }),
      dateAdded: timestamp({ defaultValue: { kind: 'now' } }),
      updatedAt: timestamp({
        db: {
          updatedAt: true,
        },
      }),
    },
  }),
};
export default Creator;
