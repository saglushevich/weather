import { getIcon } from "@utils";
import { useCustomSelector } from "@store";
import { currentWeatherSelector } from "@store/selectors";

import {
  WeatherImage,
  WeatherWrapper,
  WeatherDegree,
  WeatherText,
  WeatherInfo,
  WeatherDegreeSup,
} from "./styles";

function CurrentWeather() {
  const current = useCustomSelector(currentWeatherSelector);

  const icon = getIcon(current.weather[0].icon);

  return (
    <WeatherWrapper>
      <WeatherImage src={icon} />
      <WeatherInfo>
        <WeatherText>Today</WeatherText>
        <WeatherDegree>
          {`${Math.round(current.temp)}`}
          <WeatherDegreeSup>° C</WeatherDegreeSup>
        </WeatherDegree>
      </WeatherInfo>
    </WeatherWrapper>
  );
}

export default CurrentWeather;
