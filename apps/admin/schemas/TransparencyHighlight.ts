import { Lists } from '.keystone/types';
import { list } from '@keystone-6/core';
import { checkbox, relationship, text, timestamp } from '@keystone-6/core/fields';
import { CacheScope } from 'apollo-cache-control';

const TransparencyHighlight: Lists = {
  TransparencyHighlight: list({
    graphql: {
      cacheHint: {
        maxAge: 3 * 60 * 60,
        scope: CacheScope.Public,
      },
    },
    fields: {
      content: text({ ui: { displayMode: 'textarea' } }),
      isPositive: checkbox({ defaultValue: false }),
      project: relationship({ ref: 'Project.transparencyHighlights', db: { foreignKey: true } }),
      dateAdded: timestamp({ defaultValue: { kind: 'now' }, isIndexed: true }),
      updatedAt: timestamp({
        db: {
          updatedAt: true,
        },
      }),
    },
  }),
};
export default TransparencyHighlight;
