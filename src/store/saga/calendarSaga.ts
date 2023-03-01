import { takeEvery, call, put } from "redux-saga/effects";
import { addToast } from "modsen-toasts-lib";

import { getCalendar } from "@api";
import { setCalendar } from "@store/slices/calendar";
import { ICalendar } from "@interfaces";
import { getCalendarTime } from "@utils";
import { fetchCalendar } from "@store/actions/actions";
import { toastErrorData } from "@constants";

function* calendarWorker({ payload }: ReturnType<typeof fetchCalendar>) {
  try {
    const [currentDate, minDate, maxDate]: string[] = getCalendarTime();

    const result: ICalendar[] = yield call(
      getCalendar,
      payload,
      minDate,
      maxDate
    );

    const transformed = result
      .filter((item) => item.start.dateTime.slice(0, 10) === currentDate)
      .sort(
        (a, b) => +new Date(a.start.dateTime) - +new Date(b.start.dateTime)
      );

    yield put(setCalendar(transformed));
  } catch (error) {
    addToast(toastErrorData)();
  }
}

function* calendarWatcher() {
  yield takeEvery("FETCH_CALENDAR", calendarWorker);
}

export default calendarWatcher;
