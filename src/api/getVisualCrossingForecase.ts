import axios from "axios";

import { transformVisualCrossingData } from "@utils";
import { VISUAL_CROSSING_LINK, VISUAL_CROSSING_KEY } from "@constants";

export const getVisualCrossingForecase = async (lat: number, lon: number) => {
  const result = await axios(
    `${VISUAL_CROSSING_LINK}/${lat},${lon}?unitGroup=metric&key=${VISUAL_CROSSING_KEY}`
  );

  return transformVisualCrossingData(result.data.days);
};
