import cors from 'cors';
import { ActivityType, Client, Events, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import path from 'path';
import initDiscordApi from './api/initDiscordApi';

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
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildScheduledEvents,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once(Events.ClientReady, async (): Promise<void> => {
  console.log('--- TCL Bot is online ---');

  client.user?.setPresence({
    activities: [{ name: 'TCL', type: ActivityType.Watching }],
    status: 'online',
  });

  initDiscordApi(app, client);

  app.listen(port, () => console.log('Discord bot API is listening on port', port));
});

try {
  client.login(token as string);
} catch (error) {
  console.log(error);
}
