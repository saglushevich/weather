import axios from "axios";

import { transformOpenWeatherData } from "@utils";
import { OPEN_WEATHER_LINK, OPEN_WEATHER_KEY } from "@constants";

export const getOpenWeatherForecase = async (lat: number, lon: number) => {
  const result = await axios(
    `${OPEN_WEATHER_LINK}/3.0/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,alerts&units=metric&appid=${OPEN_WEATHER_KEY}`
  );

  return transformOpenWeatherData(result.data);
};
