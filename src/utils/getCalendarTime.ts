export function getCalendarTime() {
  const time: Date = new Date();
  const currentDate: string = time.toISOString().slice(0, 10);

  time.setHours(time.getTimezoneOffset() / -60, 0, 0, 0);
  const minDate: string = time.toISOString();

  time.setDate(time.getDate() + 1);
  const maxDate: string = time.toISOString();

  return [currentDate, minDate, maxDate];
}
