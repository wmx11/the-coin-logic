import { Lists } from '.keystone/types';
import { list } from '@keystone-6/core';
import { checkbox, float, image, text, timestamp } from '@keystone-6/core/fields';
import slugify from '../utils/slugify';

const KycGroup: Lists = {
  KycGroup: list({
    fields: {
      name: text({ validation: { isRequired: true } }),
      slug: text({
        ui: { description: 'Automatically filled in upon creating/saving.' },
        hooks: {
          resolveInput: async (data) => slugify('slug', 'name')(data),
        },
      }),
      enabled: checkbox({ defaultValue: false }),
      isListed: checkbox({ defaultValue: false }),
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
      dateAdded: timestamp({ defaultValue: { kind: 'now' } }),
      updatedAt: timestamp({
        db: {
          updatedAt: true,
        },
      }),
    },
  }),
};
export default KycGroup;
