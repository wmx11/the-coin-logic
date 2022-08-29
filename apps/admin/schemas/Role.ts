import { list } from '@keystone-6/core';
import { Lists } from '.keystone/types';
import { checkbox, relationship, text, timestamp } from '@keystone-6/core/fields';

const Role: Lists = {
  Role: list({
    fields: {
      name: text({ validation: { isRequired: true } }),
      slug: text({ validation: { isRequired: true } }),
      isAdmin: checkbox({ defaultValue: false }),
      isModerator: checkbox({ defaultValue: false }),
      isEditor: checkbox({ defaultValue: false }),
      isProjectOwner: checkbox({ defaultValue: false }),
      users: relationship({ ref: 'User.roles', many: true }),
      dateAdded: timestamp({ defaultValue: { kind: 'now' } }),
    },
    ui: {
      isHidden: true,
      description: 'Project tag managemet',
    },
  }),
};
export default Role;
