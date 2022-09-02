// eslint-disable-next-line no-undef
module.exports = {
  apps: [
    {
      name: 'admin',
      script: 'npm',
      args: 'run admin:start',
    },
    {
      name: 'client',
      script: 'npm',
      args: 'run client:start',
    },
  ],
};
