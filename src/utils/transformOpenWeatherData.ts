import { IOpenWeatherResponse } from "@interfaces";

export function transformOpenWeatherData(data: IOpenWeatherResponse) {
  return {
    current: {
      temp: data.current.temp,
      weather: data.current.weather,
    },
    daily: data.daily
      .map((item) => {
        return {
          dt: new Date(item.dt * 1000).toString().slice(0, 3),
          temp: item.temp.day,
          weather: item.weather,
        };
      })
      .slice(1, 7),
  };
}
