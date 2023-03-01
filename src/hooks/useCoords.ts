import { useEffect } from "react";
import { addToast } from "modsen-toasts-lib";

import { useCustomSelector, useCustomDispatch } from "@store";
import { placeSelector } from "@store/selectors";
import { toastLocationData } from "@constants";
import { fetchGeolocation } from "@store/actions/actions";

export function useCoords() {
  const { city } = useCustomSelector(placeSelector);
  const dispatch = useCustomDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        if (!city) {
          dispatch(fetchGeolocation([latitude, longitude]));
        }
      },
      addToast(toastLocationData)
    );
  }, []);
}
