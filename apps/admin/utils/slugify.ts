import { BaseListTypeInfo } from '@keystone-6/core/types';
import slug from 'slug';

type ResolveInput = {
  operation: 'create' | 'update';
  inputData: BaseListTypeInfo['inputs']['create'];
  resolvedData: BaseListTypeInfo['inputs']['create'];
};

const slugify =
  (target: string, dependsOn: string) =>
  async ({ operation, inputData, resolvedData }: ResolveInput) => {
    if (operation === 'create' || operation === 'update') {
      if (!inputData[dependsOn]) {
        return resolvedData[target];
      }
      const newResolvedData: typeof resolvedData = {
        ...resolvedData,
        [target]: slug(inputData[dependsOn] as string),
      };
      return newResolvedData[target];
    }
  };

export default slugify;
