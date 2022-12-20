import { Client } from 'discord.js';
import { Express, Request, Response } from 'express';
import { getChannels } from '../../services/channels';
import routes from './routes';

export const getChannelsByGuildId = async (app: Express, client: Client) => {
  try {
    app.get(routes.getChannels, async (req: Request, res: Response) => {
      const { guildId } = req.params;

      if (!guildId) {
        res.status(404).json({ message: 'Guild ID not found' });
      }

      const channels = await getChannels(client, guildId);

      if (!channels || !channels.size) {
        return res.status(404).json({ channels: null });
      }

      // https://discord-api-types.dev/api/discord-api-types-v10/enum/ChannelType
      const TEXT_CHANNEL = 0;
      const ANNOUNCEMENTS_CHANNEL = 5;

      const textChannels = channels.filter(
        (channel) => channel.type === TEXT_CHANNEL || channel.type === ANNOUNCEMENTS_CHANNEL,
      );

      return res.status(200).json({ channels: textChannels });
    });
  } catch (error) {
    return console.log(error);
  }
};

export const getGuildByGuildId = async (app: Express, client: Client) => {
  try {
    app.get(routes.getGuild, async (req: Request, res: Response) => {
      const { guildId } = req.params;

      if (!guildId) {
        res.status(404).json({ message: 'Guild ID not found' });
      }

      const guild = await client.guilds.fetch(guildId);

      if (!guild) {
        return res.status(404).json({ guild: null });
      }

      return res.status(200).json({ guild });
    });
  } catch (error) {
    return console.log(error);
  }
};
