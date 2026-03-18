"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";

export function AnimatedCounter({ value }: { value: number }) {
  const ref = React.useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { amount: 0.4, once: true });
  const [display, setDisplay] = React.useState(0);

  React.useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const duration = 900;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setDisplay(Math.round(p * value));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <motion.span ref={ref} initial={{ opacity: 0 }} animate={{ opacity: inView ? 1 : 0 }}>
      {display}
    </motion.span>
  );
}

