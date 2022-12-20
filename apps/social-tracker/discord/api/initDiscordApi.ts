import { Client } from 'discord.js';
import { Express } from 'express';
import { handleMessages } from '../services/handleMessages';
import { handleScheduledEventsCrud } from '../services/handleScheduledEvents';
import { healthCheck } from './routes/base';
import { getChannelsByGuildId, getGuildByGuildId } from './routes/channels';
import membersCount from './routes/membersCount';
import { addAllScheduledEvents } from './routes/scheduledEvents';

const initDiscordApi = (app: Express, client: Client) => {
  healthCheck(app, client);
  getChannelsByGuildId(app, client);
  getGuildByGuildId(app, client);
  membersCount(app, client);
  addAllScheduledEvents(app, client);
  handleScheduledEventsCrud(client);
  handleMessages(app, client);
};

export default initDiscordApi;
