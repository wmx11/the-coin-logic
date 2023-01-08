import { list } from '@keystone-6/core';
import { Lists } from '.keystone/types';
import { relationship, select, text, timestamp } from '@keystone-6/core/fields';

const Tag: Lists = {
  Tag: list({
    fields: {
      name: text(),
      type: select({
        options: [
          {
            label: 'Project',
            value: 'project',
          },
          {
            label: 'Person',
            value: 'person',
          },
        ],
      }),
      projects: relationship({ ref: 'Project.tags', many: true }),
      providers: relationship({ ref: 'Provider.tags', many: true }),
      dateAdded: timestamp({ defaultValue: { kind: 'now' } }),
    },
    ui: {
      isHidden: true,
    },
  }),
};
export default Tag;
