import { gql } from '@apollo/client';

export const CREATE_DISCORD_CONFIG = gql`
  mutation (
    $guildName: String
    $guildId: String
    $announcementsChannelId: String
    $announcementsChannelName: String
    $generalChannelId: String
    $generalChannelName: String
    $projectId: ID
  ) {
    createDiscordConfig(
      data: {
        guildName: $guildName
        guildId: $guildId
        announcementsChannelId: $announcementsChannelId
        announcementsChannelName: $announcementsChannelName
        generalChannelId: $generalChannelId
        generalChannelName: $generalChannelName
        project: { connect: { id: $projectId } }
      }
    ) {
      guildName
      guildId
      announcementsChannelId
      announcementsChannelName
      generalChannelId
      generalChannelName
    }
  }
`;

export const UPDATE_DISCORD_CONFIG = gql`
  mutation (
    $guildName: String
    $guildId: String
    $announcementsChannelId: String
    $announcementsChannelName: String
    $generalChannelId: String
    $generalChannelName: String
    $id: ID
  ) {
    updateDiscordConfig(
      where: { id: $id }
      data: {
        guildName: $guildName
        guildId: $guildId
        announcementsChannelId: $announcementsChannelId
        announcementsChannelName: $announcementsChannelName
        generalChannelId: $generalChannelId
        generalChannelName: $generalChannelName
      }
    ) {
      guildName
      guildId
      announcementsChannelId
      announcementsChannelName
      generalChannelId
      generalChannelName
    }
  }
`;
