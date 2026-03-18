"use client";

import * as React from "react";

export function useScrollPosition() {
  const [y, setY] = React.useState(0);

  React.useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return y;
}
