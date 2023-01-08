import { Lists } from '.keystone/types';
import { list } from '@keystone-6/core';
import { checkbox, float, image, relationship, text, timestamp } from '@keystone-6/core/fields';
import slugify from '../utils/slugify';

const Provider: Lists = {
  Provider: list({
    fields: {
      name: text({ validation: { isRequired: true } }),
      slug: text({
        ui: { description: 'Provider slug. Automatically filled in upon creating/saving.' },
        hooks: {
          resolveInput: async (data) => slugify('slug', 'name')(data),
        },
      }),
      tags: relationship({ ref: 'Tag.providers', many: true }),
      contactEmail: text(),
      isPromoted: checkbox({
        defaultValue: false,
        ui: { description: 'Is the provider promoted? Pinned to the first place on the page.' },
      }),
      enabled: checkbox({ defaultValue: false, ui: { description: 'Is the provider enabled?' } }),
      isListed: checkbox({ defaultValue: false, ui: { description: 'Is the provider listed?' } }),
      displayEmail: checkbox({ defaultValue: false, ui: { description: 'Display provider email contact address' } }),
      openForWork: checkbox({ defaultValue: false, ui: { description: 'Is the provider open for work?' } }),
      displayPrices: checkbox({ defaultValue: false, ui: { description: 'Display the prices of the provider?' } }),
      nickname: text(),
      image: image({ storage: 'localImages' }), // 400 x 400
      backgroundImage: image({ storage: 'localImages' }), // 850 x 450
      summary: text({
        ui: { displayMode: 'textarea', description: 'A short summary about the provider. Introduction piece.' },
      }),
      about: text({ ui: { displayMode: 'textarea', description: 'About the provider, its experience and more.' } }),
      offers: text({ ui: { displayMode: 'textarea', description: 'What does the provider offer?' } }),
      website: text(),
      twitter: text(),
      telegram: text(),
      discord: text(),
      reddit: text(),
      youtube: text(),
      priceFrom: float(),
      priceTo: float(),
      views: float({ defaultValue: 0 }),
      user: relationship({ ref: 'User.providerProfile' }),
      followers: relationship({ ref: 'User.followedProviders', many: true }),
      votes: relationship({ ref: 'Vote.provider', many: true, ui: { displayMode: 'count' } }),
      comments: relationship({ ref: 'Comment.provider', many: true, ui: { displayMode: 'count' } }),
      dateAdded: timestamp({ defaultValue: { kind: 'now' } }),
      updatedAt: timestamp({
        db: {
          updatedAt: true,
        },
      }),
    },
  }),
};
export default Provider;
