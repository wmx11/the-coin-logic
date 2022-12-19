import { GuildScheduledEvent } from 'discord.js';
import { prismaClient, PrismaSchema } from 'tcl-packages/prismaClient';
import { DiscordEventUpdateInput } from 'tcl-packages/types';

export const createScheduledEvent = async (event: PrismaSchema.DiscordEventUncheckedCreateInput) => {
  try {
    const existingEvent = await prismaClient.discordEvent.count({
      where: {
        eventId: event.eventId,
      },
    });

    if (existingEvent > 0) {
      return null;
    }

    const project = await prismaClient.project.findFirst({
      where: {
        discordServerId: event.guildId,
      },
      select: {
        id: true,
        discord: true,
      },
    });

    if (!project) {
      return null;
    }

    await prismaClient.discordEvent.create({
      data: {
        ...(event as PrismaSchema.DiscordEventUncheckedCreateInput),
        inviteUrl: event?.inviteUrl || project?.discord || undefined,
        projectId: project?.id || undefined,
      },
    });
  } catch (error) {
    return console.log(error);
  }
};

export const updateScheduledEvent = async (event: DiscordEventUpdateInput) => {
  try {
    const eventToUpdate = await prismaClient.discordEvent.findFirst({
      where: {
        eventId: event.eventId,
      },
      select: {
        id: true,
      },
    });

    if (!eventToUpdate) {
      return null;
    }

    const project = await prismaClient.project.findFirst({
      where: {
        discordServerId: event.guildId,
      },
      select: {
        discord: true,
      },
    });

    await prismaClient.discordEvent.update({
      data: {
        ...(event as PrismaSchema.DiscordEventUpdateInput),
        inviteUrl: event?.inviteUrl || project?.discord || undefined,
      },
      where: {
        id: eventToUpdate?.id,
      },
    });
  } catch (error) {
    return console.log(error);
  }
};

export const deleteScheduledEvent = async (event: GuildScheduledEvent) => {
  try {
    const eventToDelete = await prismaClient.discordEvent.findFirst({
      where: {
        eventId: event?.id,
      },
      select: {
        id: true,
      },
    });

    if (!eventToDelete) {
      return null;
    }

    await prismaClient.discordEvent.delete({
      where: {
        id: eventToDelete?.id,
      },
    });
  } catch (error) {
    return console.log(error);
  }
};
