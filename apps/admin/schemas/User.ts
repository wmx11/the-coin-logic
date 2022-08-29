import { list } from '@keystone-6/core';
import { Lists } from '.keystone/types';
import { checkbox, password, relationship, text, timestamp } from '@keystone-6/core/fields';
import { isAdmin, isAdminOrPerson, isPerson } from '../utils/rbac';
import { addHours, formatISO } from 'date-fns';
import { nanoid } from 'nanoid';
import generateInputData from '../utils/generateInputData';

const User: Lists = {
  User: list({
    fields: {
      name: text(),
      firstName: text(),
      lastName: text(),
      email: text({
        validation: { isRequired: true },
        isIndexed: 'unique',
        isFilterable: true,
        // access: {
        //   read: isAdminOrPerson,
        // },
      }),
      roles: relationship({
        ref: 'Role.users',
        many: true,
        access: {
          read: isAdmin,
          update: isAdmin,
        },
      }),
      password: password({
        validation: { isRequired: true },
        access: {
          read: isAdminOrPerson,
          update: isPerson,
        },
      }),
      isAdmin: checkbox({
        defaultValue: false,
        access: {
          read: isAdmin,
          update: isAdmin,
        },
      }),
      isSubscribedToEmail: checkbox({ defaultValue: false }), // Is the user subscribed to the email notifications
      isNotChargeable: checkbox({ defaultValue: false }), // Allows to use the services without paying
      isVerified: checkbox({ defaultValue: true }), // Is user's email verified
      subscribedTill: timestamp(), // Shows the subscription date of the services
      referrer: text(), // The person who referred code
      referralCode: text({
        // The personal referal code
        hooks: {
          resolveInput: async (data) => generateInputData('referralCode', nanoid())(data),
        },
      }),
      projects: relationship({ ref: 'Project.user', many: true }),
      payments: relationship({ ref: 'Payment.billedTo', many: true }),
      dateCreated: timestamp({ defaultValue: { kind: 'now' } }),
      emailVerificationString: text({
        hooks: {
          resolveInput: async (data) => generateInputData('emailVerificationString', nanoid(35))(data),
        },
      }),
      emailVerificationExpiresIn: timestamp({
        hooks: {
          resolveInput: async (data) =>
            generateInputData('emailVerificationExpiresIn', formatISO(addHours(new Date(), 1)))(data),
        },
      }),
    },
  }),
};

export default User;
