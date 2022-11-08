import { Lists } from '.keystone/types';
import { list } from '@keystone-6/core';
import { relationship, text } from '@keystone-6/core/fields';

const Kyc: Lists = {
  Kyc: list({
    fields: {
      project: relationship({ ref: 'Project.kycBy', db: { foreignKey: true } }),
      kycGroup: relationship({ ref: 'KycGroup', db: { foreignKey: true } }),
      url: text(),
    },
  }),
};
export default Kyc;
