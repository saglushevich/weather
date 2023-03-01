import { useEffect, useState, useRef } from "react";

export function useTime() {
  const [date, setDate] = useState(new Date());
  const timer = useRef<NodeJS.Timer>();

  useEffect(() => {
    timer.current = setInterval(() => {
      const currentTime = new Date();

      setDate((time: Date) =>
        date.getMinutes() === currentTime.getMinutes() ? time : currentTime
      );
    }, 1000);
    return () => clearInterval(timer.current);
  }, [date]);

  return [
    date.toLocaleString("en", {
      hour: "numeric",
      minute: "numeric",
    }),
    date.toLocaleString("en", {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
    }),
  ];
}
