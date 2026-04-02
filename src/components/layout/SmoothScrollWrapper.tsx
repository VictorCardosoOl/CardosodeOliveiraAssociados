import { ReactNode, useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useSmoothScroll } from "../../context/SmoothScrollContext";

gsap.registerPlugin(ScrollTrigger);
gsap.config({ force3D: true });

// Global ScrollTrigger configurations for Locomotive Scroll
ScrollTrigger.config({ 
  ignoreMobileResize: true,
});

interface SmoothScrollWrapperProps {
  children: ReactNode;
}

export function SmoothScrollWrapper({ children }: SmoothScrollWrapperProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const locoScrollRef = useRef<LocomotiveScroll | null>(null);
  const { setScroll } = useSmoothScroll();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || !scrollRef.current) {
      return; 
    }

    const locoScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1,
      class: "is-reveal",
      lerp: 0.08,
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      }
    });

    locoScrollRef.current = locoScroll;
    setScroll(locoScroll);

    // Sync ScrollTrigger with Locomotive Scroll
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#scroll-container", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value as number, { duration: 0, disableLerp: true })
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: scrollRef.current.style.transform ? "transform" : "fixed",
    });

    ScrollTrigger.defaults({ scroller: "#scroll-container" });

    // Refresh ScrollTrigger and Locomotive Scroll
    const refreshLoco = () => locoScroll.update();
    ScrollTrigger.addEventListener("refresh", refreshLoco);
    ScrollTrigger.refresh();

    // ResizeObserver to update locoScroll when content changes
    const resizeObserver = new ResizeObserver(() => {
      locoScroll.update();
      ScrollTrigger.refresh();
    });
    resizeObserver.observe(scrollRef.current);

    return () => {
      resizeObserver.disconnect();
      ScrollTrigger.removeEventListener("refresh", refreshLoco);
      locoScroll.destroy();
      setScroll(null);
    };
  }, [setScroll]);

  return (
    <div ref={scrollRef} id="scroll-container" data-scroll-container>
      {children}
    </div>
  );
}
