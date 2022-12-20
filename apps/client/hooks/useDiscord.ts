import axios from 'axios';
import { useEffect, useState } from 'react';
import routes from 'routes';

type DiscordChannels = {
  name: string;
  id: string;
};

const useDiscord = (guildId: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isOnline, setIsOnline] = useState(false);
  const [guildName, setGuildName] = useState('');
  const [channels, setChannels] = useState<DiscordChannels[]>();
  const [error, setError] = useState('');

  const healthCheck = async (): Promise<boolean> => {
    const { data } = await axios.get(routes.external.discord.check);

    if (!data.check) {
      return false;
    }

    setIsOnline(data.check);
    return data.check;
  };

  const addAllScheduledEvents = async () => {
    try {
      if (!guildId) {
        return null;
      }
      setIsLoading(true);
      const { data } = await axios.get(routes.external.discord.addAllScheduledEvents.replace('${guildId}', guildId));
      setIsLoading(false);
      return data;
    } catch (error) {
      setIsLoading(false);
      return null;
    }
  };

  const getGuildName = async () => {
    try {
      if (!guildId) {
        return null;
      }

      const { data } = await axios.get(routes.external.discord.getGuild.replace('${guildId}', guildId));

      if (!data.guild) {
        return null;
      }

      setGuildName(data.guild.name);
      setError('');
      return data.guild;
    } catch (error) {
      setError(error as string);
      return null;
    }
  };

  const getChannels = async (): Promise<DiscordChannels[] | null> => {
    try {
      if (!guildId) {
        return null;
      }

      const { data } = await axios.get(routes.external.discord.getChannels.replace('${guildId}', guildId));

      if (!data.channels) {
        return null;
      }

      setChannels(data.channels);
      setError('');
      return data.channels;
    } catch (error) {
      setError(error as string);
      return null;
    }
  };

  const reloadConfig = async () => {
    try {
      if (!guildId) {
        return null;
      }

      const { data } = await axios.get(routes.external.discord.reloadConfig);

      if (!data) {
        return null;
      }

      setError('');
      return data;
    } catch (error) {
      setError(error as string);
      return null;
    }
  };

  useEffect(() => {
    healthCheck();
    getChannels();
    getGuildName();
  }, []);

  return {
    channels,
    isOnline,
    guildName,
    error,
    isLoading,
    healthCheck,
    getChannels,
    addAllScheduledEvents,
    reloadConfig,
  };
};

export default useDiscord;
