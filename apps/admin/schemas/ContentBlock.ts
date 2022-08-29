import { list } from '@keystone-6/core';
import { Lists } from '.keystone/types';
import { checkbox, text, timestamp } from '@keystone-6/core/fields';
import slugify from '../utils/slugify';

const ContentBlock: Lists = {
  ContentBlock: list({
    fields: {
      title: text(),
      blockName: text({
        hooks: {
          resolveInput: async (data) =>
            slugify('blockName', 'title')(data),
        },
      }),
      enabled: checkbox({ defaultValue: false }),
      dateAdded: timestamp({ defaultValue: { kind: 'now' } }),
    },
    ui: {
      isHidden: true,
      description: 'Specifying where a content should be rendered',
    },
  }),
};

export default ContentBlock;
