import { isAfter, isToday } from 'date-fns';
import { IncomingMessage } from 'http';
import path from 'path';
import { CartItem, Project, Promotion } from 'types';
import { products as productsSku } from 'utils/products';
import { formatDate } from './formatters';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { hasEventEnded, hasEventStarted } from './events';

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

export const sanitizeIp = (ip: string) => ip?.trim().replace(/(::ffff:)/g, '');

export const getIpAddress = (req: IncomingMessage) => {
  const forwarded = req.headers['x-forwarded-for'];
  const ip = typeof forwarded === 'string' ? forwarded.split(/, /)[0] : req.socket.remoteAddress;
  return sanitizeIp(ip as string);
};

export const calculateItemTotal = (item: CartItem, duration: string | number) => {
  const discount = item?.product?.discount ? item?.product?.discount : item?.discount;
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

export const LINKS_REGEX = /(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/g;

export const YOUTUBE_REGEX =
  /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(-nocookie)?\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/g;

export const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

export const validateYouTubeUrl = (url: string) => YOUTUBE_REGEX.test(url);

export const addLinksToText = (string: string) =>
  string.replace(
    LINKS_REGEX,
    (link: string) => `<a href="${link}" target="__blank" class="text-violet underline">${link}</a>`,
  );

export const getLogoLink = (imageId: string, extension: string) =>
  `${process.env.NEXT_PUBLIC_LOGOS_URL}/${imageId}.${extension}`;

export const resolveImagePaths = () => {
  const getPath = (pathName: string) => path.resolve(process.cwd(), '../', 'admin', 'public', pathName);
  return {
    logos: getPath('logos'),
    images: getPath('images'),
  };
};

export const msToTime = (s: number) => {
  const ms = s % 1000;
  s = (s - ms) / 1000;
  const secs = s % 60;
  s = (s - secs) / 60;
  const mins = s % 60;
  const hrs = (s - mins) / 60;

  const seconds = secs < 10 ? `0${secs}` : secs;
  const minutes = mins < 10 ? `0${mins}` : mins;
  const hours = hrs < 10 ? `0${hrs}` : hrs;

  if (hrs === 0) {
    return `${minutes}:${seconds}`;
  }

  return `${hours}:${minutes}:${seconds}`;
};

export const handleErrorMessage = (error: unknown, messageSetter?: (message: string) => void) => {
  if (error === undefined) {
    return null;
  }
  const errors = error as AxiosError<{ errorMessage: string }>;
  messageSetter && messageSetter(errors?.response?.data?.errorMessage || '');
  toast.error(errors?.response?.data?.errorMessage);
};

export const formatBytes = (bytes: number, decimals = 2) => {
  if (!+bytes) {
    return '0 Bytes';
  }
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
};

export const isPromoted = (promotion?: Promotion) => {
  if (!promotion) {
    return false;
  }

  const { isEnabled, startDate, endDate } = promotion;

  if (!isEnabled) {
    return false;
  }

  const hasStarted = hasEventStarted(startDate);
  const hasEnded = hasEventEnded({ startDate, endDate });

  return hasStarted && !hasEnded;
};
