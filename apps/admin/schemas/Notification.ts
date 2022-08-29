import { list } from '@keystone-6/core';
import { Lists } from '.keystone/types';
import { checkbox, text, timestamp, select, relationship } from '@keystone-6/core/fields';

const Notification: Lists = {
  Notification: list({
    fields: {
      title: text(),
      enabled: checkbox({ defaultValue: false }),
      content: text({ ui: { displayMode: 'textarea' } }),
      type: select({
        ui: { displayMode: 'segmented-control' },
        options: [
          {
            label: 'Info',
            value: 'info',
          },
          {
            label: 'Warning',
            value: 'warning',
          },
          {
            label: 'Alert',
            value: 'alert',
          },
        ],
      }),
      project: relationship({ ref: 'Project.notifications' }),
      dateAdded: timestamp({ defaultValue: { kind: 'now' } }),
    },
  }),
};

export default Notification;
