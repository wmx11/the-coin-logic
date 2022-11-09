import { Lists } from '.keystone/types';
import { list } from '@keystone-6/core';
import { integer, relationship, timestamp, text } from '@keystone-6/core/fields';
import { CacheScope } from 'apollo-cache-control';

const ProjectRating: Lists = {
  ProjectRating: list({
    graphql: {
      cacheHint: {
        maxAge: 3 * 60 * 60,
        scope: CacheScope.Public,
      },
    },
    fields: {
      rating: integer({
        defaultValue: 0,
        validation: {
          max: 5,
        },
      }),
      ip: text(),
      user: relationship({ ref: 'User', db: { foreignKey: true } }),
      project: relationship({ ref: 'Project.ratings', db: { foreignKey: true } }),
      dateAdded: timestamp({ defaultValue: { kind: 'now' }, isIndexed: true }),
      updatedAt: timestamp({
        db: {
          updatedAt: true,
        },
      }),
    },
  }),
};
export default ProjectRating;
