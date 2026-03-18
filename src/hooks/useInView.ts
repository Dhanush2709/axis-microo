"use client";

import * as React from "react";

type UseInViewOptions = IntersectionObserverInit & {
  freezeOnceVisible?: boolean;
};

export function useInView<T extends Element>(
  options: UseInViewOptions = { threshold: 0.15, freezeOnceVisible: true },
) {
  const { freezeOnceVisible = true, ...observerOptions } = options;
  const ref = React.useRef<T | null>(null);
  const [isInView, setIsInView] = React.useState(false);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (freezeOnceVisible && isInView) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, observerOptions);

    observer.observe(node);
    return () => observer.disconnect();
  }, [freezeOnceVisible, isInView, observerOptions]);

  return { ref, isInView };
}
