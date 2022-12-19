const baseUrl = '/tcl-api/discord';

const routes = {
  isAlive: `${baseUrl}/check`,
  reloadConfig: `${baseUrl}/reload-config`,
  getMembersCount: `${baseUrl}/get-members-count/:guildId`,
  addAllScheduledEvents: `${baseUrl}/add-all-scheduled-events/:guildId`,
  getChannels: `${baseUrl}/get-channels/:guildId`,
  getGuild: `${baseUrl}/get-guild/:guildId`,
};

export default routes;
