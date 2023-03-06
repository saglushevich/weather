/* eslint-disable no-shadow */
import WeatherCard from "@components/WeatherCard";
import CurrentWeather from "@components/CurrentWeather";
import SearchPanel from "@components/SearchPanel";
import { WeatherSwitcher } from "@components/WeatherSwitcher";
import { useCustomSelector } from "@store";
import { weatherSelector } from "@store/selectors";
import { ITransformedOpenWeatherDaily } from "@interfaces";

import { WeekWeatherContainer, WeekWeatherBlock } from "./styles";

function WeekWeather() {
  const weather = useCustomSelector(weatherSelector);

  const weatherCards = weather.map((item: ITransformedOpenWeatherDaily) => {
    const { dt, temp, weather } = item;

    return <WeatherCard key={dt} temp={temp} icon={weather[0].icon} day={dt} />;
  });

  return (
    <WeekWeatherContainer>
      <SearchPanel />
      <CurrentWeather />
      <WeekWeatherBlock>{weatherCards}</WeekWeatherBlock>
      <WeatherSwitcher />
    </WeekWeatherContainer>
  );
}

export default WeekWeather;
