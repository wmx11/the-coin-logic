import { list } from '@keystone-6/core';
import { Lists } from '.keystone/types';
import { relationship, text, timestamp } from '@keystone-6/core/fields';

const Tag: Lists = {
  Tag: list({
    fields: {
      name: text(),
      projects: relationship({ ref: 'Project.tags', many: true }),
      dateAdded: timestamp({ defaultValue: { kind: 'now' } }),
    },
    ui: {
      isHidden: true,
    },
  }),
};
export default Tag;
