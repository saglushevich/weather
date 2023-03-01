export function getIcon(icon: string): string {
  let selectedIcon = 2;

  switch (icon) {
    case "snow":
    case "13d":
    case "13n":
      selectedIcon = 17;
      break;
    case "snow-showers-day":
    case "snow-showers-night":
      selectedIcon = 19;
      break;
    case "thunder-rain":
    case "thunder-showers-day":
    case "thunder-showers-night":
    case "11d":
    case "11n":
      selectedIcon = 14;
      break;
    case "showers-day":
    case "showers-night":
    case "09d":
    case "09n":
      selectedIcon = 13;
      break;
    case "clear-day":
    case "clear-night":
    case "01d":
    case "01n":
      selectedIcon = 2;
      break;
    case "rain":
    case "10d":
    case "10n":
      selectedIcon = 11;
      break;
    case "fog":
    case "50d":
    case "50n":
      selectedIcon = 9;
      break;
    case "wind":
    case "cloudy":
    case "03d":
    case "03n":
      selectedIcon = 7;
      break;
    case "04d":
    case "04n":
      selectedIcon = 6;
      break;
    case "partly-cloudy-day":
    case "partly-cloudy-night":
    case "02d":
    case "02n":
      selectedIcon = 4;
      break;
    default:
      selectedIcon = 2;
      break;
  }

  return `https://www.meteosource.com/static/img/ico/weather/${selectedIcon}.svg`;
}
