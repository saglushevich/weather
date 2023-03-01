import { rootState } from "@store";

export const calendarSelector = (state: rootState) => state.calendar;

export const loadingSelector = (state: rootState) => state.loading;

export const currentWeatherSelector = (state: rootState) =>
  state.currentWeather;

export const placeSelector = (state: rootState) => state.place;

export const weatherSelector = (state: rootState) => state.weather;
