import { list } from '@keystone-6/core';
import { Lists } from '.keystone/types';
import { text, timestamp } from '@keystone-6/core/fields';

const ContentType: Lists = {
  ContentType: list({
    fields: {
      title: text(),
      dateAdded: timestamp({ defaultValue: { kind: 'now' } }),
    },
    ui: {
      isHidden: true,
      description: 'Specify the type of the content. (Blog post, research, text, announcement, etc.)',
    },
  }),
};

export default ContentType;
