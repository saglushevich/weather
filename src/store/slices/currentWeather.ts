import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  temp: 0,
  weather: [{ id: 0, icon: "", main: "" }],
  clouds: 0,
  windSpeed: 0,
  temperatures: {
    day: 0,
    morn: 0,
    eve: 0,
    night: 0,
  },
};

const currentWeatherSlice = createSlice({
  name: "currentWeather",
  initialState,
  reducers: {
    setCurrentWeather: (state, { payload }) => payload,
  },
});

const { actions, reducer } = currentWeatherSlice;

export default reducer;

export const { setCurrentWeather } = actions;
