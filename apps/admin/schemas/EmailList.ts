import { Lists } from '.keystone/types';
import { list } from '@keystone-6/core';
import { text, timestamp } from '@keystone-6/core/fields';
import { isAdmin } from '../utils/rbac';

const EmailList: Lists = {
  EmailList: list({
    fields: {
      email: text({
        validation: { isRequired: true },
        isIndexed: 'unique',
        isFilterable: true,
      }),
      dateAdded: timestamp({ defaultValue: { kind: 'now' } }),
      updatedAt: timestamp({
        db: {
          updatedAt: true,
        },
      }),
    },
    access: {
      operation: {
        query: isAdmin,
        delete: isAdmin,
        update: isAdmin,
      },
    },
  }),
};
export default EmailList;
