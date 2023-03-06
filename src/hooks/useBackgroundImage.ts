import { useCustomSelector } from "@store";
import { currentWeatherSelector } from "@store/selectors";
import rain from "@assets/bg/rain.webp";
import cloudy from "@assets/bg/cloudy.webp";
import mist from "@assets/bg/mist.webp";
import snow from "@assets/bg/snow.webp";
import sunny from "@assets/bg/sunny.webp";
import thunderstorm from "@assets/bg/thunderstorm.webp";

export function useBackgroundImage() {
  const { weather } = useCustomSelector(currentWeatherSelector);
  const { id } = weather[0];
  let weatherId = 1;

  if (+id === 800) {
    weatherId = 1;
  } else {
    weatherId = +id.toString().slice(0, 1);
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
