import { format, parseISO } from 'date-fns';

const DEFAULT_FORMAT = 'MMMM yyyy';

export const formatDate = (date: string, formatStr = DEFAULT_FORMAT): string =>
  format(parseISO(date), formatStr);
