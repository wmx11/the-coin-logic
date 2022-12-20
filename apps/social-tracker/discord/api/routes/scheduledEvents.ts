import { Client } from 'discord.js';
import { Express, Request, Response } from 'express';
import { addAllScheduledEventsByGuildId } from '../../services/handleScheduledEvents';
import routes from './routes';

export const addAllScheduledEvents = (app: Express, client: Client) => {
  try {
    app.get(routes.addAllScheduledEvents, async (req: Request, res: Response) => {
      const { guildId } = req.params;

      if (!guildId) {
        res.status(404).json({ message: 'Guild ID not found' });
      }

      await addAllScheduledEventsByGuildId(client, guildId);

      return res.status(200).json({ message: 'Scheduled events added' });
    });
  } catch (error) {
    return console.log(error);
  }
};
