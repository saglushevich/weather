import { ITransformedVisualCrossing } from "@interfaces";

export function transformVisualCrossingData(
  data: ITransformedVisualCrossing[]
) {
  const currentHour = new Date().getHours();

  const list = data[0].hours.filter(
    (item) => +item.datetime.slice(0, 2) >= currentHour
  );

  while (list.length < 6) {
    const elem = data[1].hours.shift();
    if (elem) {
      list.push(elem);
    }
  }

  return list.slice(0, 6).map((item) => {
    return {
      dt: item.datetime.slice(0, 5),
      weather: [
        {
          icon: item.icon,
        },
      ],
      temp: item.temp,
    };
  });
}
