// @Todo - Fix types
const getChangesPartial = (currentSet: any, previousSet: any) => (value: string) => {
  const currentValue = currentSet ? currentSet[value] : 0;
  const previousValue = previousSet ? previousSet[value] : 0;

  return {
    [`${value}Change`]: {
      change: currentValue - previousValue,
      percentage: (currentValue / previousValue - 1) * 100,
    },
  };
};

export default getChangesPartial;
