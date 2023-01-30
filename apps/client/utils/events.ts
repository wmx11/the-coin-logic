import { addHours, intervalToDuration, isAfter } from 'date-fns';

type EventTimeTypes = {
  startDate: Date | string;
  endDate?: Date | string;
  checkEnd?: boolean;
};

export const hasEventEnded = ({ startDate, endDate }: EventTimeTypes) => {
  if (endDate) {
    return isAfter(new Date(), new Date(endDate));
  }

  return isAfter(new Date(), addHours(new Date(startDate), 2));
};

export const hasEventStarted = (startDate: Date | string) => isAfter(new Date(), new Date(startDate));

export const getStartsIn = ({ startDate, endDate, checkEnd }: EventTimeTypes) => {
  const { months, days, hours, minutes, seconds } = intervalToDuration({
    start: new Date(startDate),
    end: new Date(),
  });

  const prefix = 'Starts in: ';

  const handlePlural = (count: number, noun: string) => (count > 1 ? `${noun}s` : noun);

  if (hasEventStarted(startDate) && !hasEventEnded({ startDate, endDate }) && checkEnd) {
    return 'Live';
  }

  if (hasEventStarted(startDate) && !checkEnd) {
    return 'Live';
  }


  if (months && months > 0) {
    return `${prefix} ${months} ${handlePlural(months, 'Month')}`;
  }

  if (days && days > 0) {
    return `${prefix} ${days} ${handlePlural(days, 'Day')}`;
  }

  if (hours && hours > 0) {
    return `${prefix} ${hours} ${handlePlural(hours, 'Hour')}`;
  }

  if (minutes && minutes > 0) {
    return `${prefix} ${minutes} ${handlePlural(minutes, 'Minute')}`;
  }

  if (seconds && seconds > 0) {
    return `${prefix} ${seconds} ${handlePlural(seconds, 'Second')}`;
  }

  return 'Live';
};
