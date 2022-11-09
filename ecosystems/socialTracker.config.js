// eslint-disable-next-line no-undef
module.exports = {
  apps: [
    {
      name: 'social-tracker',
      script: './apps/social-tracker/dist/jobs/addSocialStats.js',
      env: {
        NODE_ENV: 'production',
      },
    },
    {
      name: 'social-tracker-discord',
      script: './apps/social-tracker/dist/discord/discord.js',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
