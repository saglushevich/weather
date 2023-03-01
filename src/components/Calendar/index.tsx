import { useEffect } from "react";
import { useSession } from "@supabase/auth-helpers-react";

import CalendarEvent from "@components/CalendarEvent";
import { useTime, useGoogleAuth } from "@hooks";
import { fetchCalendar } from "@store/actions/actions";
import { useCustomSelector, useCustomDispatch } from "@store";
import { ICalendar } from "@interfaces";
import { calendarSelector } from "@store/selectors";

import {
  CalendarWrapper,
  Time,
  Date,
  CalendarButton,
  CalendarEvents,
  CalendarText,
} from "./styles";

function CalendarList() {
  const session = useSession();
  const dispatch = useCustomDispatch();
  const [signIn, signOut] = useGoogleAuth();
  const events = useCustomSelector(calendarSelector);

  useEffect(() => {
    if (session?.provider_token) {
      dispatch(fetchCalendar(`${session?.provider_token}`));
    }
  }, [dispatch, session?.provider_token]);

  const [time, date]: string[] = useTime();

  const message =
    session?.provider_token && !events.length ? (
      <CalendarText>No events in your calendar</CalendarText>
    ) : (
      <CalendarText>Login to show your calendar</CalendarText>
    );

  return (
    <CalendarWrapper>
      <Time>{time}</Time>
      <Date>{date}</Date>
      {session?.provider_token ? (
        <CalendarButton onClick={signOut}>Hide calendar</CalendarButton>
      ) : (
        <CalendarButton onClick={signIn}>Show calendar</CalendarButton>
      )}
      {events.length ? (
        <CalendarEvents>
          {events.map((item: ICalendar) => (
            <CalendarEvent
              key={item.id}
              time={item.start.dateTime.slice(11, 16)}
              summary={item.summary}
              organizer={item.organizer.email}
            />
          ))}
        </CalendarEvents>
      ) : (
        message
      )}
    </CalendarWrapper>
  );
}

export default CalendarList;
