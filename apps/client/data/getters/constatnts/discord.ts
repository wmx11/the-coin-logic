export const GET_DISCORD_CONFIG_BY_ID = `query($id: ID) {
  discordConfig(where: {id: $id}) {
    announcementsChannelId
    announcementsChannelName
    generalChannelId
    generalChannelName
  }
}`;
