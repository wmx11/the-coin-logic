import { Express, Request, Response } from 'express';
import { Client } from 'discord.js';
import { getDiscordMembersCount } from '../../services/getDiscordMembersCount';
import routes from './routes';

const membersCount = (app: Express, client: Client) => {
  try {
    app.get(routes.getMembersCount, async (req: Request, res: Response) => {
      const { guildId } = req.params;

      if (!guildId) {
        res.status(404).json({ message: 'Guild ID not found' });
      }

      const membersCount = await getDiscordMembersCount(client, guildId as string);

      res.status(200).json({ membersCount });
    });
  } catch (error) {
    console.log(error);
  }
};

export default membersCount;
