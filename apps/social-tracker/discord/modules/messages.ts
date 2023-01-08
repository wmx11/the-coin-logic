import { Message, PartialMessage } from 'discord.js';
import { prismaClient } from 'tcl-packages/prismaClient';
import routes from '../api/routes/routes';

type Config = {
  announcementsChannelId: string;
  project: {
    id: string;
  };
}[];

const findAnnouncementChannel = (channelId: string, announcementChannels: Config) =>
  announcementChannels.find(({ announcementsChannelId }) => announcementsChannelId.toString() === channelId.toString());

const getExistingMessage = async (messageId: string) => {
  const existingMessage = await prismaClient?.discordAnnouncement.findFirst({
    where: {
      messageId,
    },
    select: {
      id: true,
    },
  });
  return existingMessage;
};

export const createAnnouncement = async (message: Message, config: Config) => {
  const announcementChannel = findAnnouncementChannel(message.channelId, config);

  if (!announcementChannel) {
    return null;
  }

  try {
    const existingMessage = await getExistingMessage(message.id);

    const { channelId, guildId, id, content, url } = message;

    if (existingMessage) {
      return null;
    }

    const sanitizedContent = content
      .replace(/(@everyone)/g, 'everyone')
      .replace(/(\*\*)/g, '')
      .trim();

    const extractedTitle = sanitizedContent.substring(0, 35).concat('', '...');
    const briefSummary = sanitizedContent.trim().substring(0, 400).concat('', '...');

    const announcement = await prismaClient?.discordAnnouncement.create({
      data: {
        channelId,
        content,
        guildId,
        messageId: id,
        messageUrl: url,
        projectId: announcementChannel?.project?.id || '',
        title: extractedTitle,
      },
    });

    const project = await prismaClient.project.findUnique({
      where: {
        id: announcementChannel?.project?.id || '',
      },
      select: {
        trackData: true,
      },
    });

    if (project.trackData) {
      const marketStat = await prismaClient.marketStat.findFirst({
        where: {
          projectId: announcementChannel?.project?.id || '',
        },
        orderBy: {
          dateAdded: 'desc',
        },
        take: 1,
      });

      delete marketStat.id;
      delete marketStat.dateAdded;

      await prismaClient.marketStat.create({
        data: {
          ...marketStat,
          annotation: {
            title: extractedTitle || null,
            description: briefSummary || null,
            href: `${routes.tclAnnouncement}${announcement.id}`,
          },
        },
      });
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const updateAnnouncement = async (message: Message | PartialMessage, config: Config) => {
  const announcementChannel = findAnnouncementChannel(message.channelId, config);

  if (!announcementChannel) {
    return null;
  }

  try {
    const existingMessage = await getExistingMessage(message.id);

    const { channelId, guildId, id, content, url } = message;

    if (existingMessage) {
      return null;
    }

    await prismaClient?.discordAnnouncement.update({
      where: {
        id: existingMessage.id,
      },
      data: {
        channelId,
        content,
        guildId,
        messageId: id,
        messageUrl: url,
        projectId: announcementChannel.project.id,
        title: '',
      },
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const deleteAnnouncement = async (message: Message | PartialMessage, config: Config) => {
  const announcementChannel = findAnnouncementChannel(message.channelId, config);

  if (!announcementChannel) {
    return null;
  }

  try {
    const existingMessage = await getExistingMessage(message.id);

    await prismaClient?.discordAnnouncement.delete({
      where: {
        id: existingMessage.id,
      },
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};
