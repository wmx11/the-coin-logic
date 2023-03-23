// eslint-disable-next-line no-undef
module.exports = {
  apps: [
    {
      name: 'discord-bots',
      script: './apps/discord-bots/dist/index.js',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
