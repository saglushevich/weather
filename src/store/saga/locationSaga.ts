import { takeEvery, call, put } from "redux-saga/effects";
import { addToast } from "modsen-toasts-lib";

import { getGeolocation } from "@api";
import { ILocation } from "@interfaces";
import { setGeolocation } from "@store/slices/place";
import { fetchGeolocation, fetchWeather } from "@store/actions/actions";
import { toastErrorData } from "@constants";

function* locationWorker({ payload }: ReturnType<typeof fetchGeolocation>) {
  try {
    const result: ILocation = yield call(
      getGeolocation,
      payload[0],
      payload[1]
    );

    const geolocation = {
      city: result.name,
      country: result.sys.country,
      coordinates: payload,
    };

    yield put(setGeolocation(geolocation));
    yield put(fetchWeather(geolocation.coordinates, "daily"));
  } catch (error) {
    addToast(toastErrorData)();
  }
}

function* locationWatcher() {
  yield takeEvery("FETCH_GEOLOCATION", locationWorker);
}

export default locationWatcher;
