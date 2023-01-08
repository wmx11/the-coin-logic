import { Lists } from '.keystone/types';
import { list } from '@keystone-6/core';
import { float, relationship, timestamp } from '@keystone-6/core/fields';

const ServiceToken: Lists = {
  ServiceToken: list({
    fields: {
      amount: float({ defaultValue: 0 }),
      discount: float({ defaultValue: 0 }),
      user: relationship({ ref: 'User.serviceTokens' }),
      tokenUsage: relationship({ ref: 'ServiceTokenUsage.serviceToken', many: true }),
      dateAdded: timestamp({ defaultValue: { kind: 'now' } }),
      updatedAt: timestamp({
        db: {
          updatedAt: true,
        },
      }),
    },
  }),
};
export default ServiceToken;
