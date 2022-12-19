import { GET_DISCORD_CONFIG_BY_ID } from './constatnts/discord';
import { getData } from './getters';

export const getDiscordConfigById = async (id: string) => {
  const { discordConfig } = await getData({
    query: GET_DISCORD_CONFIG_BY_ID,
    variables: { id },
    fetchPolicy: 'network-only',
  });
  return discordConfig || null;
};
