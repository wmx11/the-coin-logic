import { Lists } from '.keystone/types';
import { list } from '@keystone-6/core';
import { float, relationship, timestamp, text } from '@keystone-6/core/fields';

const ServiceTokenUsage: Lists = {
  ServiceTokenUsage: list({
    fields: {
      used: float({ defaultValue: 0 }),
      description: text(),
      serviceToken: relationship({ ref: 'ServiceToken.tokenUsage' }),
      dateAdded: timestamp({ defaultValue: { kind: 'now' } }),
      updatedAt: timestamp({
        db: {
          updatedAt: true,
        },
      }),
    },
  }),
};
export default ServiceTokenUsage;
