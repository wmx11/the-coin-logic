import { list } from '@keystone-6/core';
import { Lists } from '.keystone/types';
import { checkbox, image, relationship, text, timestamp } from '@keystone-6/core/fields';
import { document } from '@keystone-6/fields-document';
import slugify from '../utils/slugify';
import { componentBlocks } from '../component-blocks/component-blocks';

const Content: Lists = {
  Content: list({
    fields: {
      title: text(),
      slug: text({
        hooks: {
          resolveInput: async (data) => slugify('slug', 'title')(data),
        },
      }),
      image: image({ storage: 'localImages', ui: { description: '800px x 450px'}}),
      contentType: relationship({ ref: 'ContentType' }),
      enabled: checkbox({ defaultValue: false }),
      summary: text({ ui: { displayMode: 'textarea' } }),
      content: document({
        ui: {
          views: require.resolve('../component-blocks/component-blocks')
        },
        componentBlocks,
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
    ui: {
      description: 'Images are 800px x 450px'
    }
  }),
};
export default Content;
