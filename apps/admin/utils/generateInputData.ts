import { BaseListTypeInfo } from '@keystone-6/core/types';

type ResolveInput = {
  operation: 'create' | 'update';
  inputData: BaseListTypeInfo['inputs']['create'];
  resolvedData: BaseListTypeInfo['inputs']['create'];
};

const generateInputData =
  (target: string, data: string) =>
  async ({ operation, resolvedData }: ResolveInput) => {
    if (operation !== 'create') {
      return resolvedData[target];
    }

    const newResolvedData: typeof resolvedData = {
      ...resolvedData,
      [target]: data,
    };

    return newResolvedData[target];
  };

export default generateInputData;
