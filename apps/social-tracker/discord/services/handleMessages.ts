import { Client } from 'discord.js';
import { Express } from 'express';
import { prismaClient } from 'tcl-packages/prismaClient';
import routes from '../api/routes/routes';
import { createAnnouncement, deleteAnnouncement, updateAnnouncement } from '../modules/messages';

const getDiscordConfig = async () => {
  const config = await prismaClient?.discordConfig.findMany({
    select: {
      announcementsChannelId: true,
      project: {
        select: {
          id: true,
        },
      },
    },
    where: {
      project: {
        enabled: true,
      },
    },
  });
  return config;
};

export const handleMessages = async (app: Express, client: Client) => {
  let config = await getDiscordConfig();

  try {
    app.get(routes.reloadConfig, async (req, res) => {
      const newConfig = await getDiscordConfig();

      if (!newConfig) {
        res.status(400).json({ message: 'Config not found' });
      }

      config = newConfig;

      res.status(200).json({ message: 'OK' });
    });

    client.on('messageCreate', async (message) => {
      createAnnouncement(message, config);
    });

    client.on('messageUpdate', async (oldMessage, newMessage) => {
      updateAnnouncement(newMessage, config);
    });

    client.on('messageDelete', async (deletedMessage) => {
      deleteAnnouncement(deletedMessage, config);
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};
