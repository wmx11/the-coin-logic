import { Lists } from '.keystone/types';
import { list } from '@keystone-6/core';
import { json, relationship, text, timestamp } from '@keystone-6/core/fields';

const DiscordAnnouncement: Lists = {
  DiscordAnnouncement: list({
    fields: {
      messageId: text({ validation: { isRequired: true } }),
      guildId: text(),
      channelId: text(),
      title: text(),
      content: json(),
      messageUrl: text(),
      project: relationship({ ref: 'Project.announcements', db: { foreignKey: true } }),
      dateAdded: timestamp({ defaultValue: { kind: 'now' } }),
      updatedAt: timestamp({
        db: {
          updatedAt: true,
        },
      }),
    },
  }),
};
export default DiscordAnnouncement;
