import { Client } from 'discord.js';

export const getDiscordMembersCount = async (client: Client, guildId: string) => {
  try {
    if (!client.isReady()) {
      console.error('Client is not logged in.');
      return null;
    }

    const guild = await client.guilds.fetch(guildId);

    if (!guild) {
      console.error('Guild by the following ID was not found.');
      return null;
    }

    const membersCount = guild.memberCount;

    return membersCount;
  } catch (error) {
    console.error(error);
    return null;
  }
};
