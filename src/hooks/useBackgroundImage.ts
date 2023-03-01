import { useCustomSelector } from "@store";
import { currentWeatherSelector } from "@store/selectors";
import rain from "@assets/bg/rain.jpeg";
import cloudy from "@assets/bg/cloudy.jpeg";
import mist from "@assets/bg/mist.jpeg";
import snow from "@assets/bg/snow.jpeg";
import sunny from "@assets/bg/sunny.jpeg";
import thunderstorm from "@assets/bg/thunderstorm.jpeg";

export function useBackgroundImage() {
  const currentWeather = useCustomSelector(currentWeatherSelector);

  let weatherId = 1;

  if (+currentWeather.weather[0].id === 800) {
    weatherId = 1;
  } else {
    weatherId = +currentWeather.weather[0].id.toString().slice(0, 1);
  }

  switch (weatherId) {
    case 2:
      return thunderstorm;
    case 3:
    case 5:
      return rain;
    case 6:
      return snow;
    case 7:
      return mist;
    case 8:
      return cloudy;
    default:
      return sunny;
  }
}
