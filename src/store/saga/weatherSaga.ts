import { takeEvery, call, put } from "redux-saga/effects";
import { addToast } from "modsen-toasts-lib";

import { IOpenWeatherResponse } from "@interfaces";
import { toastErrorData } from "@constants";
import { getOpenWeatherForecase, getVisualCrossingForecase } from "@api";
import { fetchWeather } from "@store/actions/actions";
import { changeLoading, setCurrentWeather, setWeather } from "../slices/index";

interface IVisualCrossingApiResponse {
  dt: string;
  temp: number;
  weather: {
    id: number;
    main: string;
  }[];
}
function* weatherWorker({ payload }: ReturnType<typeof fetchWeather>) {
  try {
    const { location, weatherType } = payload;

    yield put(changeLoading(true));

    if (weatherType === "daily") {
      const result: IOpenWeatherResponse = yield call(
        getOpenWeatherForecase,
        location[0],
        location[1]
      );

      yield put(setCurrentWeather(result.current));
      yield put(setWeather(result.daily));
    } else {
      const result: IVisualCrossingApiResponse[] = yield call(
        getVisualCrossingForecase,
        location[0],
        location[1]
      );

      yield put(setWeather(result));
    }

    yield put(changeLoading(false));
  } catch (error) {
    addToast(toastErrorData)();
  }
}

function* weatherWatcher() {
  yield takeEvery("FETCH_WEATHER", weatherWorker);
}

export default weatherWatcher;
