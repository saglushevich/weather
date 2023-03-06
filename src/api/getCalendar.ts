import axios from "axios";

import { CALENDAR_LINK } from "@constants";

export const getCalendar = async (
  token: string,
  timeMin: string,
  timeMax: string
) => {
  const result = await axios(
    `${CALENDAR_LINK}?timeMin=${timeMin}&timeMax=${timeMax}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  sessionStorage.setItem("user", result.data.summary);
  return result.data.items;
};
