import { list } from '@keystone-6/core';
import { Lists } from '.keystone/types';
import { image, text, timestamp } from '@keystone-6/core/fields';

const Exchange: Lists = {
  Exchange: list({
    fields: {
      name: text({ validation: { isRequired: true } }),
      logo: image({ storage: 'localLogos' }),
      url: text({ validation: { isRequired: true } }),
      tradeUrl: text({ validation: { isRequired: true } }),
      dateAdded: timestamp({ defaultValue: { kind: 'now' } }),
    },
  }),
};
export default Exchange;
