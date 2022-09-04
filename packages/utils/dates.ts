import { set } from 'date-fns';

export const getMidnightToday = () => set(new Date(), { hours: 0, minutes: 0, seconds: 0 });
