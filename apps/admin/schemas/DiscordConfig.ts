import { Lists } from '.keystone/types';
import { list } from '@keystone-6/core';
import { relationship, text, timestamp } from '@keystone-6/core/fields';

const DiscordConfig: Lists = {
  DiscordConfig: list({
    fields: {
      guildName: text(),
      guildId: text(),
      announcementsChannelId: text(),
      announcementsChannelName: text(),
      generalChannelId: text(),
      generalChannelName: text(),
      project: relationship({ ref: 'Project.discordConfig', db: { foreignKey: true } }),
      dateAdded: timestamp({ defaultValue: { kind: 'now' } }),
      updatedAt: timestamp({
        db: {
          updatedAt: true,
        },
      }),
    },
  }),
};
export default DiscordConfig;
