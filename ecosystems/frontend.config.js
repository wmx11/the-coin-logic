// eslint-disable-next-line no-undef
module.exports = {
  apps: [
    {
      name: 'admin',
      script: 'npm',
      automation: false,
      interpreter: 'none',
      args: 'run admin:start',
      env: {
        NODE_ENV: 'production',
      },
    },
    {
      name: 'client',
      script: 'npm',
      automation: false,
      interpreter: 'none',
      args: 'run client:start',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
