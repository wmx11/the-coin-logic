import { Client, GuildScheduledEvent } from 'discord.js';
import { DiscordEventCreateInput } from 'tcl-packages/types';
import { createScheduledEvent, deleteScheduledEvent, updateScheduledEvent } from '../modules/scheduledEvents';

const handleCreateOrUpdate = async (
  client: Client,
  event: GuildScheduledEvent,
  handler: (data: DiscordEventCreateInput) => void,
) => {
  const guild = await client.guilds.fetch(event.guildId);
  const channel = await guild.channels.fetch(event?.channelId);
  const inviteUrl = event.channelId ? await event.createInviteURL({ maxAge: 0 }) : undefined;
  const eventImage = event.coverImageURL({ size: 512, extension: 'webp' }) || undefined;

  const data = {
    eventId: event?.id,
    guildId: event?.guildId || undefined,
    channelId: event?.channelId || undefined,
    guildName: guild?.name || undefined,
    channelName: channel?.name || undefined,
    name: event?.name || undefined,
    description: event?.description || undefined,
    inviteUrl,
    scheduledStartTimestamp: new Date(event?.scheduledStartTimestamp),
    scheduledEndTimestamp: event?.scheduledEndTimestamp ? new Date(event?.scheduledEndTimestamp) : undefined,
    image: eventImage,
    location: event?.entityMetadata?.location || undefined,
  };

  handler(data);
};

export const handleScheduledEventsCrud = (client: Client) => {
  try {
    client.on('guildScheduledEventCreate', async (event) => {
      await handleCreateOrUpdate(client, event, createScheduledEvent);
    });

    client.on('guildScheduledEventUpdate', async (oldEvent, newEvent) => {
      await handleCreateOrUpdate(client, newEvent, updateScheduledEvent);
    });

    client.on('guildScheduledEventDelete', async (deletedEvent) => {
      await deleteScheduledEvent(deletedEvent);
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const addAllScheduledEventsByGuildId = async (client: Client, guildId: string) => {
  if (!guildId) {
    throw new Error('Guild ID is not defined');
  }

  try {
    const guild = await client.guilds.fetch(guildId);

    if (!guild) {
      return undefined;
    }

    const events = await guild.scheduledEvents.fetch();
    
    if (!events || events?.size === 0) {
      return undefined;
    }

    for (const event of events.toJSON()) {
      await handleCreateOrUpdate(client, event, createScheduledEvent);
    }
  } catch (error) {
    return console.log(error);
  }
};
