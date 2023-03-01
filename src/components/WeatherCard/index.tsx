import { IWeatherCardProps } from "@interfaces";
import { getIcon } from "@utils";

import { WeatherCardWrapper, WeatherCardText, WeatherCardImg } from "./styles";

function WeatherCard({ temp, icon, day }: IWeatherCardProps) {
  return (
    <WeatherCardWrapper>
      <WeatherCardText>{Math.round(temp)}</WeatherCardText>
      <WeatherCardImg src={getIcon(icon)} />
      <WeatherCardText>{day}</WeatherCardText>
    </WeatherCardWrapper>
  );
}

export default WeatherCard;
