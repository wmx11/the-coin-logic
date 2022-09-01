import { list } from '@keystone-6/core';
import { Lists } from '.keystone/types';
import { text, timestamp } from '@keystone-6/core/fields';
import slugify from '../utils/slugify';

const ContentType: Lists = {
  ContentType: list({
    fields: {
      title: text(),
      typeName: text({
        hooks: {
          resolveInput: async (data) => slugify('typeName', 'title')(data),
        },
      }),
      dateAdded: timestamp({ defaultValue: { kind: 'now' } }),
    },
    ui: {
      isHidden: true,
      description: 'Specify the type of the content. (Blog post, research, text, announcement, etc.)',
    },
  }),
};

export default ContentType;
