import { Lists } from '.keystone/types';
import { list } from '@keystone-6/core';
import { checkbox, image, text, timestamp } from '@keystone-6/core/fields';
import slugify from '../utils/slugify';

const Image: Lists = {
  Image: list({
    fields: {
      title: text(),
      slug: text({
        hooks: {
          resolveInput: async (data) => slugify('slug', 'title')(data),
        },
      }),
      image: image({ storage: 'localImages' }),
      enabled: checkbox({ defaultValue: false }),
      dateAdded: timestamp({ defaultValue: { kind: 'now' } }),
    },
    ui: {
      description: 'Image uploading',
    },
  }),
};
export default Image;
