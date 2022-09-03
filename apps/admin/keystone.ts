/*
Welcome to Keystone! This file is what keystone uses to start the app.

It looks at the default export, and expects a Keystone config object.

You can find all the config options in our docs here: https://keystonejs.com/docs/apis/config
*/

import { config } from '@keystone-6/core';

// Look in the schema file for how we define our lists, and how users interact with them through graphql or the Admin UI
import { lists } from './schema';

// Keystone auth is configured separately - check out the basic auth setup we are importing from our auth file.
import { withAuth, session } from './auth';
import { InMemoryLRUCache } from '@apollo/utils.keyvaluecache';

export default withAuth(
  // Using the config function helps typescript guide you to the available options.
  config({
    // the db sets the database provider - we're using sqlite for the fastest startup experience
    db: {
      provider: process.env.DATABASE_URL ? 'postgresql' : 'sqlite',
      url: process.env.DATABASE_URL || 'file:./keystone.db',
      useMigrations: true,
    },
    // This config allows us to set up features of the Admin UI https://keystonejs.com/docs/apis/config#ui
    ui: {
      // For our starter, we check that someone has session data before letting them see the Admin UI.
      isAccessAllowed: (context) => {
        if (context.session?.data.isAdmin) {
          return true;
        }

        const hasAllowedRoles = context.session?.data.roles.filter(
          (item: Roles) => item.isAdmin || item.isModerator || item.isEditor,
        );
        return !!context.session?.data && !!hasAllowedRoles.length;
      },
    },
    storage: {
      localLogos: {
        kind: 'local',
        type: 'image',
        generateUrl: (path) => `${process.env.BASE_URL || 'http://localhost:3500'}/logos${path}`,
        serverRoute: {
          path: '/logos',
        },
        storagePath: 'public/logos',
      },
      localImages: {
        kind: 'local',
        type: 'image',
        generateUrl: (path) => `${process.env.BASE_URL || 'http://localhost:3500'}/images${path}`,
        serverRoute: {
          path: '/images',
        },
        storagePath: 'public/images',
      },
    },
    server: {
      port: 3500,
      cors: {
        origin: [
          'localhost',
          'https://thecoinlogic.com',
          'https://www.thecoinlogic.com',
          'https://cms.thecoinlogic.com',
          'https://www.cms.thecoinlogic.com',
        ],
      },
    },
    graphql: {
      debug: process.env.NODE_ENV !== 'production',
      playground: process.env.NODE_ENV !== 'production',
      apolloConfig: {
        cache: new InMemoryLRUCache({
          max: 500,
          maxSize: Math.pow(2, 20) * 100,
          ttl: 1000 * 60 * 5,
        }),
      },
      cors: {
        origin: [
          'localhost',
          'https://thecoinlogic.com',
          'https://www.thecoinlogic.com',
          'https://cms.thecoinlogic.com',
          'https://www.cms.thecoinlogic.com',
        ],
      },
    },
    lists,
    session,
  }),
);
