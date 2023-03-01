import { all } from "redux-saga/effects";
import locationWatcher from "./locationSaga";
import weatherWatcher from "./weatherSaga";
import calendarWatcher from "./calendarSaga";

export default function* rootWatcher() {
  yield all([locationWatcher(), weatherWatcher(), calendarWatcher()]);
}
