export interface IOpenWeatherIcon {
  id: number;
  icon: string;
  main: string;
}

export interface IOpenWeatherDaily {
  dt: number;
  temp: {
    day: number;
  };
  weather: IOpenWeatherIcon[];
}

export interface IOpenWeatherCurrent {
  temp: number;
  weather: IOpenWeatherIcon[];
}

export interface IOpenWeatherResponse {
  current: IOpenWeatherCurrent;
  daily: IOpenWeatherDaily[];
}

export interface ITransformedOpenWeatherDaily {
  dt: string;
  temp: number;
  weather: IOpenWeatherIcon[];
}
