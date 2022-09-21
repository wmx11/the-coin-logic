import { list } from '@keystone-6/core';
import { Lists } from '.keystone/types';
import { checkbox, password, relationship, text, timestamp } from '@keystone-6/core/fields';
import { isAdmin, isAdminOrPerson, isPerson } from '../utils/rbac';
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
      isSubscribedToEmail: checkbox({
        defaultValue: false,
        ui: { description: 'Is the user subscribed to the email notifications' },
      }),
      isNotChargeable: checkbox({
        defaultValue: false,
        ui: { description: 'Allows to use the services without paying' },
      }),
      isVerified: checkbox({
        defaultValue: true,
        ui: { description: "Is user's email verified" },
      }),
      subscribedTill: timestamp({ ui: { description: 'Shows the subscription date of the services' } }),
      referrer: text({ ui: { description: 'Refferring person' } }),
      referralCode: text({
        ui: { description: 'Personal referral code' },
        hooks: {
          resolveInput: async (data) => generateInputData('referralCode', `tcl_${nanoid()}`)(data),
        },
      }),
      projects: relationship({ ref: 'Project.user', many: true }),
      payments: relationship({ ref: 'Payment.billedTo', many: true }),
      dateCreated: timestamp({ defaultValue: { kind: 'now' } }),
    },
  }),
};

export default User;
