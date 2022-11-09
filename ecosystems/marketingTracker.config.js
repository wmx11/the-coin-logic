// eslint-disable-next-line no-undef
module.exports = {
  apps: [
    {
      name: 'marketing-tracker',
      script: './apps/marketing-tracker/dist/index.js',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
