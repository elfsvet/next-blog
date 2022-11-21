import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
  const date = parseISO(dateString);
//   Month (stand alone) LLLL - January, February, d - day of month 1,2, calendar year 2017,2018
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}
