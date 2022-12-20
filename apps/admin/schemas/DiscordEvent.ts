import { Lists } from '.keystone/types';
import { list } from '@keystone-6/core';
import { text, timestamp, integer, relationship } from '@keystone-6/core/fields';

const DiscordEvent: Lists = {
  DiscordEvent: list({
    fields: {
      eventId: text({ validation: { isRequired: true } }),
      guildId: text(),
      channelId: text(),
      guildName: text(),
      channelName: text(),
      name: text(),
      description: text(),
      inviteUrl: text(),
      scheduledStartTimestamp: timestamp(),
      scheduledEndTimestamp: timestamp(),
      location: text(),
      userCount: integer(),
      image: text(),
      project: relationship({ ref: 'Project.events', db: { foreignKey: true } }),
      dateAdded: timestamp({ defaultValue: { kind: 'now' } }),
      updatedAt: timestamp({
        db: {
          updatedAt: true,
        },
      }),
    },
  }),
};
export default DiscordEvent;
