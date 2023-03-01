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

  return (
    <WeekWeatherContainer>
      <SearchPanel />
      <CurrentWeather />
      <WeekWeatherBlock>
        {weather.map((item: ITransformedOpenWeatherDaily) => (
          <WeatherCard
            key={item.dt}
            temp={item.temp}
            icon={item.weather[0].icon}
            day={item.dt}
          />
        ))}
      </WeekWeatherBlock>
      <WeatherSwitcher />
    </WeekWeatherContainer>
  );
}

export default WeekWeather;
