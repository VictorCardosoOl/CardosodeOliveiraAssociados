import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { RefObject } from "react";

gsap.registerPlugin(ScrollTrigger);

export function useFadeIn(containerRef: RefObject<any | null>) {
  useGSAP(() => {
    // Optimize performance for smooth 120hz feel
    gsap.config({ force3D: true });

    const elements = gsap.utils.toArray('.anim-element');
    elements.forEach((el: any) => {
      if (!el) return;
      gsap.fromTo(el, 
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.0,
          ease: "power4.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          }
        }
      );
    });

    const titles = gsap.utils.toArray('h2, h3, .anim-title');
    titles.forEach((title: any) => {
      if (!title) return;
      gsap.fromTo(title,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: title,
            start: "top 90%",
          }
        }
      );
    });
  }, { scope: containerRef });
}
