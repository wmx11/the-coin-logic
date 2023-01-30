// @Todo - Fix types
const getChangesPartial =
  (currentSet: any, previousSet: any) =>
  <T extends string>(value: T) => {
    const currentValue = currentSet ? (currentSet[value] as number) : 0;
    const previousValue = previousSet ? (previousSet[value] as number) : 0;

    const change = currentValue - previousValue;
    const percentage = (currentValue / previousValue - 1) * 100;

    return {
      [`${value as T}Change`]: {
        change: !Number.isNaN(change) && change !== Infinity ? change : 0,
        percentage: !Number.isNaN(percentage) && percentage !== Infinity ? percentage : 0,
      },
    };
  };

export default getChangesPartial;
