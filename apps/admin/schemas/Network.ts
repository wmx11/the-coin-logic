import { list } from '@keystone-6/core';
import { Lists } from '.keystone/types';
import { image, text, timestamp } from '@keystone-6/core/fields';

const Network: Lists = {
  Network: list({
    fields: {
      name: text({ validation: { isRequired: true } }),
      slug: text({ validation: { isRequired: true } }),
      logo: image({ storage: 'localLogos' }),
      url: text({ validation: { isRequired: true } }),
      scanner: text(),
      tokenScanner: text(),
      dateAdded: timestamp({ defaultValue: { kind: 'now' } }),
    },
  }),
};
export default Network;
