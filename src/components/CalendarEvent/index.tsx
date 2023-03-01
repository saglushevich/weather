import { ICalendarEventProps } from "@interfaces";

import { EventWrapper, EventText } from "./styles";

function CalendarEvent({ time, summary, organizer }: ICalendarEventProps) {
  return (
    <EventWrapper>
      <EventText>Time: {time}</EventText>
      <EventText>Summary: {summary}</EventText>
      <EventText>Organizer: {organizer}</EventText>
    </EventWrapper>
  );
}

export default CalendarEvent;
