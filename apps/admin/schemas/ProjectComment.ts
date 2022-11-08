import { Lists } from '.keystone/types';
import { list } from '@keystone-6/core';
import { text, relationship, timestamp } from '@keystone-6/core/fields';

const ProjectComment: Lists = {
  ProjectComment: list({
    fields: {
      comment: text({ ui: { displayMode: 'textarea' }, validation: { isRequired: true } }),
      user: relationship({ ref: 'User' }),
      project: relationship({ ref: 'Project.reviews' }),
      dateAdded: timestamp({ defaultValue: { kind: 'now' } }),
      updatedAt: timestamp({
        db: {
          updatedAt: true,
        },
      }),
    },
  }),
};
export default ProjectComment;
