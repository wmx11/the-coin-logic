import { format } from 'date-fns';

export const formatDate = (date: Date | string) => {
  if (!date) {
    return null;
  }

  return format(new Date(date), 'yyyy-MM-dd');
};

export const formateDateWithHours = (date: string) => {
  if (!date) {
    return null;
  }

  return format(new Date(date), 'yyyy-MM-dd HH:mm');
};
