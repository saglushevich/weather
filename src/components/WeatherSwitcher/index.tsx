import { useCustomSelector, useCustomDispatch } from "@store";
import { placeSelector } from "@store/selectors";
import { fetchWeather } from "@store/actions/actions";
import { WeatherSwitcherWrapper, WeatherSwitcherButton } from "./styles";

export function WeatherSwitcher() {
  const place = useCustomSelector(placeSelector);
  const dispatch = useCustomDispatch();

  const toggleweatherType = (value: string) => () => {
    dispatch(fetchWeather(place.coordinates, value));
  };

  return (
    <WeatherSwitcherWrapper>
      <WeatherSwitcherButton onClick={toggleweatherType("daily")}>
        Daily
      </WeatherSwitcherButton>
      <WeatherSwitcherButton onClick={toggleweatherType("hourly")}>
        Hourly
      </WeatherSwitcherButton>
    </WeatherSwitcherWrapper>
  );
}
