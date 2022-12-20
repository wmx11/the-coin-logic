import { Client } from 'discord.js';
import { Express, Request, Response } from 'express';
import routes from './routes';

export const healthCheck = async (app: Express, client: Client) => {
  try {
    app.get(routes.isAlive, async (req: Request, res: Response) => {
      if (!client.isReady()) {
        return res.status(400).json({ check: false });
      }

      return res.status(200).json({ check: true });
    });
  } catch (error) {
    return console.log(error);
  }
};