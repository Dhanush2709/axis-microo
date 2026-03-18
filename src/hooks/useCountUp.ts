"use client";

import * as React from "react";

export function useCountUp(target: number, duration = 900) {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const start = performance.now();
    let raf = 0;

    const update = (time: number) => {
      const progress = Math.min(1, (time - start) / duration);
      setValue(Math.round(progress * target));
      if (progress < 1) raf = requestAnimationFrame(update);
    };

    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, [duration, target]);

  return value;
}
