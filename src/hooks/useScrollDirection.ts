import { useState, useEffect } from "react";
import { useSmoothScroll } from "../context/SmoothScrollContext";

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null);
  const [isAtTop, setIsAtTop] = useState(true);
  const { scroll } = useSmoothScroll();

  useEffect(() => {
    if (!scroll) {
      // Fallback for native scroll if Locomotive is not ready or disabled
      let lastScrollY = window.scrollY;
      let ticking = false;

      const updateScrollDirection = () => {
        const scrollY = window.scrollY;
        setIsAtTop(scrollY < 10);
        if (Math.abs(scrollY - lastScrollY) < 5) {
          ticking = false;
          return;
        }
        setScrollDirection(scrollY > lastScrollY ? "down" : "up");
        lastScrollY = scrollY > 0 ? scrollY : 0;
        ticking = false;
      };

      const onScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(updateScrollDirection);
          ticking = true;
        }
      };

      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }

    const handleScroll = (args: any) => {
      setIsAtTop(args.scroll.y < 10);
      setScrollDirection(args.direction === "down" ? "down" : "up");
    };

    scroll.on("scroll", handleScroll);

    return () => {
      scroll.off("scroll", handleScroll);
    };
  }, [scroll]);

  return { scrollDirection, isAtTop };
}
