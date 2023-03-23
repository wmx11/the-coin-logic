import { Client } from 'discord.js';

export const isDev = process.env.NODE_ENV !== 'production';

export const setNickname = (client: Client, botId: string, nickname: string): void => {
  client.guilds.cache.forEach((guild) => {
    const { id } = guild;
    client?.guilds?.cache?.get(id)?.members?.cache?.get(botId)?.setNickname(nickname);
  });
};
