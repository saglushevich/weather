interface IEventTime {
  dateTime: string;
}

export interface ICalendar {
  id: string;
  summary: string;
  start: IEventTime;
  organizer: {
    email: string;
  };
}
