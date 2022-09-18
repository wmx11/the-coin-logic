import { list } from '@keystone-6/core';
import { Lists } from '.keystone/types';
import { integer, json, relationship, text, timestamp } from '@keystone-6/core/fields';

const Token: Lists = {
  Token: list({
    fields: {
      name: text({ validation: { isRequired: true } }),
      address: text(),
      order: integer({ defaultValue: 1 }),
      ABI: json(),
      network: relationship({ ref: 'Network' }),
      dateAdded: timestamp({ defaultValue: { kind: 'now' } }),
    },
  }),
};

export default Token;
