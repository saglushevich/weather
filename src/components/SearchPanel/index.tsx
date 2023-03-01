import { usePlacesWidget } from "react-google-autocomplete";
import { addToast } from "modsen-toasts-lib";

import { useCustomSelector, useCustomDispatch } from "@store";
import { placeSelector } from "@store/selectors";
import { fetchWeather } from "@store/actions/actions";
import { setGeolocation } from "@store/slices/place";
import { toastWarningCityData, GOOGLE_MAPS_KEY } from "@constants";

import { SearchInput } from "./styles";

function SearchPanel() {
  const dispatch = useCustomDispatch();
  const { city } = useCustomSelector(placeSelector);

  const { ref }: { ref: RefObject<null> } = usePlacesWidget({
    apiKey: GOOGLE_MAPS_KEY,
    onPlaceSelected: (place) => {
      if (place.geometry) {
        const { location } = place.geometry;
        const geolocation = {
          city: place.formatted_address,
          coordinates: [location.lat(), location.lng()],
        };
        dispatch(setGeolocation(geolocation));
        dispatch(fetchWeather([location.lat(), location.lng()], "daily"));
      } else {
        addToast(toastWarningCityData)();
      }
    },
  });

  return <SearchInput ref={ref} defaultValue={city} />;
}

export default SearchPanel;
