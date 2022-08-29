import { list } from '@keystone-6/core';
import { Lists } from '.keystone/types';
import { checkbox, text, timestamp } from '@keystone-6/core/fields';

const Roadmap: Lists = {
  Roadmap: list({
    fields: {
      title: text(),
      isFinished: checkbox({ defaultValue: false }),
      content: text({ ui: { displayMode: 'textarea' } }),
      estimated: text(),
      dateAdded: timestamp({ defaultValue: { kind: 'now' } }),
    },
  }),
};

export default Roadmap;
