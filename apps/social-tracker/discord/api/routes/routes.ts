const baseUrl = '/tcl-api/discord';
const tclBaseUrl = 'https://thecoinlogic.com';

const routes = {
  isAlive: `${baseUrl}/check`,
  reloadConfig: `${baseUrl}/reload-config`,
  getMembersCount: `${baseUrl}/get-members-count/:guildId`,
  addAllScheduledEvents: `${baseUrl}/add-all-scheduled-events/:guildId`,
  getChannels: `${baseUrl}/get-channels/:guildId`,
  getGuild: `${baseUrl}/get-guild/:guildId`,
  tclAnnouncement: `${tclBaseUrl}/announcements?announcement=`,
  tclEvent: `${tclBaseUrl}/events?event=`,
};

export default routes;
