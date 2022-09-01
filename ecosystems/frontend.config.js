// eslint-disable-next-line no-undef
module.exports = {
  apps: [
    {
      name: 'admin',
      script: 'yarn',
      args: 'admin:start',
    },
    {
      name: 'client',
      script: 'yarn',
      args: 'client:start',
    },
  ],
};
