import { Lists } from '.keystone/types';
import { list } from '@keystone-6/core';
import { text, timestamp } from '@keystone-6/core/fields';

const GeneralConfig: Lists = {
  GeneralConfig: list({
    fields: {
      name: text(),
      baseUrl: text(),
      discordBotLink: text(),
      dateAdded: timestamp({ defaultValue: { kind: 'now' } }),
    },
  }),
};
export default GeneralConfig;
