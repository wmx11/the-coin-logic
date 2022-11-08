import { isAfter, isToday } from 'date-fns';
import { IncomingMessage } from 'http';
import { CartItem } from 'types';
import { products as productsSku } from 'types/Products';
import { formatDate } from './formatters';

export const isDev = process.env.NODE_ENV !== 'production';

export const resolvePercentage = (percentage: number, metric: number) => metric * (1 + percentage / 100);

export const capitalize = (string: string) => string.charAt(0).toUpperCase() + string.substring(1, string.length);

export const getMedian = (data: Array<any>) => {
  if (!data) {
    return null;
  }

  const sorted = Array.from(data).sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 0) {
    return (sorted[middle - 1] + sorted[middle]) / 2;
  }

  return sorted[middle];
};

type GetStatusByDateTpes = {
  startDate: string;
  endDate: string;
  status: string;
};

export const getStatusByDate = ({ startDate, endDate, status }: GetStatusByDateTpes) => {
  const currentDate = formatDate(new Date());

  if (status === 'ended') {
    return 'ended';
  }

  if (isToday(new Date(endDate))) {
    return 'completed';
  }

  if (isAfter(new Date(currentDate as string), new Date(endDate))) {
    return 'completed';
  }

  if (isAfter(new Date(currentDate as string), new Date(startDate))) {
    return 'active';
  }

  return 'pending';
};

export const getAveragesAndMedians = <T extends Record<string, number>>(
  dataset: T[],
  selectors: Record<string, boolean>,
  initialObj: Record<string, number>,
) => {

  const failSafeDataset = dataset.length ? dataset : Object.keys(selectors).map((key) => ({ [key]: 0 }));

  return failSafeDataset.reduce((obj, item, index) => {
    Object.keys(selectors).forEach((key) => {
      Object.assign(obj, {
        [key]: (item[key as keyof typeof obj] || 0) + (obj[key as keyof typeof obj] || 0),
      });
    });
    if (index === failSafeDataset.length - 1) {
      Object.keys(selectors).forEach((key) => {
        Object.assign(obj, { [key]: (obj[key as keyof typeof obj] || 0) / failSafeDataset.length });
        Object.assign(obj, {
          [`${key}Median`]: getMedian(failSafeDataset.map((item) => item[key as keyof typeof item])) || 0,
        });
      });
    }

    return obj;
  }, initialObj);
};

export const getIpAddress = (req: IncomingMessage) => {
  const forwarded = req.headers['x-forwarded-for'];
  const ip = typeof forwarded === 'string' ? forwarded.split(/, /)[0] : req.socket.remoteAddress;
  return ip;
};

export const calculateItemTotal = (item: CartItem, duration: string | number) => {
  const discount = item.product?.discount ? item.product?.discount : item.discount;
  let price = (item?.price as number) * parseInt(duration as string, 10) || 0;

  if ((discount as number) > 0) {
    price = Math.round(price * (1 - (discount || 1) / 100));
  }

  if ((item?.tax as number) > 0) {
    price = Math.round(price * (1 + (item?.tax || 1) / 100));
  }

  return { price, discount };
};

export const hasMarketingTrackerSubscription = (subscription: { sku: string }) =>
  subscription &&
  [
    productsSku.sku.marketingCampaignTracker,
    productsSku.sku.marketingCampaignTrackerFree,
    productsSku.sku.marketingCampaignTrackerListed,
    productsSku.sku.marketingCampaignTrackerUnlisted,
  ].includes(subscription?.sku);
