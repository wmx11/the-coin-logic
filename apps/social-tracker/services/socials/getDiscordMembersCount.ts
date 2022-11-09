import dotenv from 'dotenv';
import axios from 'axios';
import { Project } from 'tcl-packages/types';
import { cache, setCache } from '../../cache';

dotenv.config();

const endpoint = process.env.DISCORD_MEMBERS_COUNT_URL;

const request = async (serverId: string) => {
  if (!serverId) {
    return null;
  }

  if (cache.has(serverId)) {
    return cache.get(serverId).members;
  }

  const url = `${endpoint}/${serverId}`;

  try {
    const { data } = await axios({
      url,
    });

    if (!data) {
      return null;
    }

    const { approximate_member_count } = data;

    setCache(serverId, {
      members: approximate_member_count,
    });

    return approximate_member_count;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getDiscordMembersCount = async (project: Project): Promise<number | null> => {
  if (!project.discord && !project.discordServerId) {
    return null;
  }

  const discordMembersCount = await request(project.discordServerId);

  return discordMembersCount;
};

export default getDiscordMembersCount;
