import { Lists } from '.keystone/types';
import { list } from '@keystone-6/core';
import { relationship, text } from '@keystone-6/core/fields';

const Audit: Lists = {
  Audit: list({
    fields: {
      project: relationship({ ref: 'Project.auditBy', db: { foreignKey: true } }),
      auditor: relationship({ ref: 'Auditor', db: { foreignKey: true } }),
      url: text(),
    },
  }),
};
export default Audit;
