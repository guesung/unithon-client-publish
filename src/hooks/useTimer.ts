import { useEffect, useState } from "react";

/**
 *
 * ```ts
 * const time = useTimer({ remainedTime: 60 * 60 * 2 });
 *
 * time -> 02:00:00
 * ```
 */
export default function useTimer({ remainedTime }: { remainedTime: number }) {
  const [time, setTime] = useState(remainedTime);

  useEffect(() => {
    const id = setInterval(() => {
      setTime(time => time - 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  function secondsToHms(seconds: number) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    return [h, m, s].map(v => (v < 10 ? "0" + v : v)).join(":");
  }

  return secondsToHms(time);
}
