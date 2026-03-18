"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

export function useNavbarTransparency() {
  const pathname = usePathname();
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparentRoutes = new Set([
    "/",
    "/industries",
    "/industries/automotive",
    "/industries/hydraulic",
    "/industries/pneumatic",
  ]);

  const isTransparent = scrollY < 80 && transparentRoutes.has(pathname);

  return { isTransparent };
}

