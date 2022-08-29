import { CustomDataResponse } from 'types/MarketData';

const getFormattedLabel = (label: string) => label.replace(' ', '').toLowerCase();

export const prepareCustomData = (customData: CustomDataResponse[]) => {
  if (!customData || !customData.length) {
    return {};
  }

  return customData.reduce((obj, currValue) => {
    const label = getFormattedLabel(currValue.label);
    const value = currValue.withPairPrice || currValue.withPrice || currValue.value;
    Object.assign(obj, { [label]: value });
    return obj;
  }, {});
};

export const getCustomDataLabels = (customData: CustomDataResponse[]) => {
  if (!customData || !customData.length) {
    return [];
  }

  return customData.reduce<string[]>((arr, currValue) => {
    const label = getFormattedLabel(currValue.label);
    arr.push(label);
    return arr;
  }, []);
};

export const getCustomDataChangeLabels = (labels: string[]) => {
  if (!labels || !labels.length) {
    return [];
  }

  return labels.map((label) => `${label}Change`);
};
