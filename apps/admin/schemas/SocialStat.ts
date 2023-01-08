import { Lists } from '.keystone/types';
import { list } from '@keystone-6/core';
import { float, json, relationship, timestamp } from '@keystone-6/core/fields';
import { CacheScope } from 'apollo-cache-control';

const SocialStat: Lists = {
  SocialStat: list({
    graphql: {
      cacheHint: {
        maxAge: 3 * 60 * 60,
        scope: CacheScope.Public,
      },
    },
    fields: {
      twitter: float(),
      telegram: float(),
      discord: float(),
      annotation: json({ defaultValue: { title: null, description: null, href: null } }),
      project: relationship({ ref: 'Project', db: { foreignKey: true } }),
      dateAdded: timestamp({ defaultValue: { kind: 'now' }, isIndexed: true }),
    },
  }),
};

export default SocialStat;
