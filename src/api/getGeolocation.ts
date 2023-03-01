import axios from "axios";

import { OPEN_WEATHER_LINK, OPEN_WEATHER_KEY } from "@constants";

export const getGeolocation = async (lat: number, lon: number) => {
  const result = await axios(
    `${OPEN_WEATHER_LINK}/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_KEY}`
  );

  return result.data;
};
