import { CustomTrackersResponse } from 'types/MarketData';

const getFormattedLabel = (label: string) => label.replace(' ', '').toLowerCase();

export const prepareCustomTrackers = (customData: CustomTrackersResponse[]) => {
  if (!customData || !customData.length) {
    return {};
  }

  return customData.reduce((obj, currValue) => {
    const label = getFormattedLabel(currValue.label);
    const value = currValue.value;
    Object.assign(obj, { [label]: value });
    return obj;
  }, {});
};

export const getCustomTrackersLabels = (customData: CustomTrackersResponse[]) => {
  if (!customData || !customData.length) {
    return [];
  }

  return customData.reduce<string[]>((arr, currValue) => {
    const label = getFormattedLabel(currValue.label);
    arr.push(label);
    return arr;
  }, []);
};

export const getCustomTrackersChangeLabels = (labels: string[]) => {
  if (!labels || !labels.length) {
    return [];
  }

  return labels.map((label) => `${label}Change`);
};
