import { Client } from 'discord.js';

export const getChannels = async (client: Client, guildId: string) => {
  try {
    if (!client.isReady()) {
      console.error('Client is not logged in.');
      return null;
    }

    const guild = await client.guilds.fetch(guildId);
    const channels = await guild.channels.fetch();

    return channels;
  } catch (error) {
    console.error(error);
    return null;
  }
};
