// eslint-disable-next-line no-undef
module.exports = {
  apps: [
    {
      name: 'social-tracker',
      script: './apps/social-tracker/dist/jobs/addSocialStats.js',
    },
    {
      name: 'social-tracker-discord',
      script: './apps/social-tracker/dist/discord/discord.js',
    },
  ],
};
