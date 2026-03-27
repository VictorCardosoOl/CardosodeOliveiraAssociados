import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import React from 'react';

gsap.registerPlugin(ScrollTrigger);

/**
 * Enterprise-grade animation hook using @gsap/react for automatic cleanup.
 * Handles responsive animations, split text, and parallax effects.
 */
export function usePremiumAnimation(containerRef: React.RefObject<HTMLElement | null>) {
  useGSAP(() => {
    if (!containerRef.current) return;

    const mm = gsap.matchMedia();

    const initAnimations = (isDesktop: boolean) => {
      const localSplits: SplitType[] = [];
      const yOffset = isDesktop ? 40 : 20;
      const duration = isDesktop ? 1.2 : 1;
      const startTrigger = isDesktop ? "top 85%" : "top 90%";

      // 1. Titles (Split Text)
      const titles = gsap.utils.toArray<HTMLElement>('.anim-title');
      titles.forEach((title) => {
        const split = new SplitType(title, { types: 'words' });
        localSplits.push(split);
        gsap.from(split.words, {
          y: yOffset,
          opacity: 0,
          duration: duration,
          stagger: 0.02,
          ease: "expo.out",
          scrollTrigger: {
            trigger: title,
            start: startTrigger,
          }
        });
      });

      // 2. Fade Ups
      const fadeUps = gsap.utils.toArray<HTMLElement>('.anim-fade-up');
      fadeUps.forEach((elem) => {
        gsap.fromTo(elem,
          { y: yOffset, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: duration,
            ease: "expo.out",
            scrollTrigger: {
              trigger: elem,
              start: startTrigger,
            }
          }
        );
      });

      // 3. Stagger Containers
      const staggerContainers = gsap.utils.toArray<HTMLElement>('.anim-stagger-container');
      staggerContainers.forEach((container) => {
        const items = container.querySelectorAll<HTMLElement>('.anim-stagger-item');
        if (isDesktop) {
          gsap.fromTo(items,
            { y: yOffset, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: duration,
              stagger: 0.1,
              ease: "expo.out",
              scrollTrigger: {
                trigger: container,
                start: startTrigger,
              }
            }
          );
        } else {
          items.forEach((item) => {
            gsap.fromTo(item,
              { y: yOffset, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "expo.out",
                scrollTrigger: {
                  trigger: item,
                  start: startTrigger,
                }
              }
            );
          });
        }
      });

      // 4. Image Wrappers (Clip Path Reveal)
      const imageWrappers = gsap.utils.toArray<HTMLElement>('.anim-image-wrapper');
      imageWrappers.forEach((wrapper) => {
        const img = wrapper.querySelector<HTMLImageElement>('img');
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrapper,
            start: startTrigger,
          }
        });

        gsap.set(wrapper, { clipPath: 'inset(100% 0% 0% 0%)' });
        if (img) {
          gsap.set(img, { 
            scale: isDesktop ? 1.2 : 1.1,
            willChange: "transform" 
          });
        }

        tl.to(wrapper, {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: isDesktop ? 1.5 : 1.2,
          ease: "power4.inOut"
        });
        
        if (img) {
          tl.to(img, {
            scale: 1,
            duration: isDesktop ? 1.5 : 1.2,
            ease: "power4.inOut"
          }, "<");

          // Subtle Parallax Effect
          gsap.to(img, {
            yPercent: isDesktop ? 15 : 10,
            ease: "none",
            scrollTrigger: {
              trigger: wrapper,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            }
          });
        }
      });

      return () => {
        localSplits.forEach(split => split.revert());
      };
    };

    mm.add("(min-width: 1024px)", () => initAnimations(true));
    mm.add("(max-width: 1023px)", () => initAnimations(false));

    return () => {
      mm.revert();
    };
  }, { scope: containerRef, dependencies: [containerRef] });
}

