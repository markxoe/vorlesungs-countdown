import { useEffect, useState } from "react";

export const useTime = (interval: number) => {
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const t = setInterval(() => setTime(Date.now()), interval);
    return () => clearInterval(t);
  }, []);

  return time;
};
