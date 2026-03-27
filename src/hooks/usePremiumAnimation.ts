import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

export function usePremiumAnimation(containerRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      
      // Helper to revert SplitType instances on cleanup
      const splits: SplitType[] = [];

      const initAnimations = (isDesktop: boolean) => {
        const yOffset = isDesktop ? 40 : 20;
        const duration = isDesktop ? 1.2 : 1;
        const startTrigger = isDesktop ? "top 85%" : "top 90%";

        // 1. Titles (Split Text)
        const titles = gsap.utils.toArray('.anim-title');
        titles.forEach((title: any) => {
          const split = new SplitType(title, { types: 'words' });
          splits.push(split);
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
        const fadeUps = gsap.utils.toArray('.anim-fade-up');
        fadeUps.forEach((elem: any) => {
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
        const staggerContainers = gsap.utils.toArray('.anim-stagger-container');
        staggerContainers.forEach((container: any) => {
          const items = container.querySelectorAll('.anim-stagger-item');
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
            items.forEach((item: any) => {
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
        const imageWrappers = gsap.utils.toArray('.anim-image-wrapper');
        imageWrappers.forEach((wrapper: any) => {
          const img = wrapper.querySelector('img');
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
      };

      mm.add("(min-width: 1024px)", () => initAnimations(true));
      mm.add("(max-width: 1023px)", () => initAnimations(false));

      return () => {
        splits.forEach(split => split.revert());
      };
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef]);
}
