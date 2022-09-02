// eslint-disable-next-line no-undef
module.exports = {
  apps: [
    {
      name: 'admin',
      script: 'npm',
      args: 'admin:start',
    },
    {
      name: 'client',
      script: 'npm',
      args: 'client:start',
    },
  ],
};
