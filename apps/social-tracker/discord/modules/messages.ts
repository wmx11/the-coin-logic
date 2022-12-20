import { Message, PartialMessage } from 'discord.js';
import { prismaClient } from 'tcl-packages/prismaClient';

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

    const extractedTitle = content.substring(0, 35).concat('', '...');

    await prismaClient?.discordAnnouncement.create({
      data: {
        channelId,
        content,
        guildId,
        messageId: id,
        messageUrl: url,
        projectId: announcementChannel.project.id,
        title: extractedTitle,
      },
    });
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
