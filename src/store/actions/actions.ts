export const fetchCalendar = (value: string) => {
  return {
    type: "FETCH_CALENDAR",
    payload: value,
  };
};

export const fetchGeolocation = (coords: number[]) => {
  return {
    type: "FETCH_GEOLOCATION",
    payload: coords,
  };
};

export const fetchWeather = (location: number[], weatherType: string) => {
  return {
    type: "FETCH_WEATHER",
    payload: {
      location,
      weatherType,
    },
  };
};
