import { Lists } from '.keystone/types';
import { list } from '@keystone-6/core';
import { checkbox, relationship, timestamp } from '@keystone-6/core/fields';

const Promotion: Lists = {
  Promotion: list({
    fields: {
      isEnabled: checkbox(),
      project: relationship({ ref: 'Project.promotion', db: { foreignKey: true } }),
      startDate: timestamp(),
      endDate: timestamp(),
      dateAdded: timestamp({ defaultValue: { kind: 'now' } }),
      updatedAt: timestamp({
        db: {
          updatedAt: true,
        },
      }),
    },
  }),
};
export default Promotion;
