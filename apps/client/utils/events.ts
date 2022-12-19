import { intervalToDuration, isAfter, isBefore, addHours } from 'date-fns';
import { DiscordEvent } from 'types';

export const hasEventEnded = (event: DiscordEvent) => {
  if (event.scheduledEndTimestamp) {
    return isAfter(new Date(), new Date(event.scheduledEndTimestamp));
  }

  return isAfter(new Date(), addHours(new Date(event.scheduledStartTimestamp), 2));
};

export const hasEventStarted = (event: DiscordEvent) => isAfter(new Date(), new Date(event.scheduledStartTimestamp));

export const getStartsIn = (event: DiscordEvent) => {
  const { months, days, hours, minutes, seconds } = intervalToDuration({
    start: new Date(event.scheduledStartTimestamp),
    end: new Date(),
  });

  const prefix = 'Starts in: ';

  const handlePlural = (count: number, noun: string) => (count > 1 ? `${noun}s` : noun);

  if (hasEventStarted(event) && !hasEventEnded(event)) {
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
