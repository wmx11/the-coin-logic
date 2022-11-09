import cors from 'cors';
import { ActivityType, Client, Events, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import helmet from 'helmet';
import path from 'path';
import { getDiscordMembersCount } from './getDiscordMembersCount';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const token = process.env.NODE_ENV === 'production' ? process.env.DISCORD_TOKEN : process.env.DISCORD_TOKEN_TEST;
const port = process.env.NODE_ENV === 'production' ? process.env.DISCORD_API_PORT : 2600;

const app = express();

app.use(
  cors({
    origin: '*',
  }),
);

app.use(helmet());

const client: Client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.once(Events.ClientReady, async (): Promise<void> => {
  console.log('--- TCL Bot is online ---');

  client.user?.setPresence({
    activities: [{ name: 'TCL', type: ActivityType.Watching }],
    status: 'online',
  });

  try {
    app.get('/get-members-count/:guildId', async (req: Request, res: Response) => {
      const { guildId } = req.params;

      if (!guildId) {
        res.status(404).json({ message: 'Guild ID not found' });
      }

      const membersCount = await getDiscordMembersCount(client, guildId as string);

      res.status(200).json({ approximate_member_count: membersCount });
    });
  } catch (error) {
    console.log(error);
  }

  app.listen(port, () => console.log('Discord bot API is listening.'));
});

try {
  client.login(token as string);
} catch (error) {
  console.log(error);
}
