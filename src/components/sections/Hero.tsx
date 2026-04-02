import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { useSmoothScroll } from "../../context/SmoothScrollContext";
import { SITE_CONTENT } from "@/constants/content";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const { scroll } = useSmoothScroll();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (scroll) {
      scroll.scrollTo(href);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useGSAP(() => {
    if (!containerRef.current) return;

    const mm = gsap.matchMedia();
    const titleSplit = new SplitType('.hero-title', { types: 'words, chars' });
    const subtitleSplit = new SplitType('.hero-subtitle', { types: 'words' });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(".hero-fade, .hero-image-wrapper", { opacity: 1, y: 0, clipPath: 'none' });
      gsap.set(titleSplit.chars, { opacity: 1, y: 0 });
      gsap.set(subtitleSplit.words, { opacity: 1, y: 0 });
    });

    mm.add("(min-width: 1024px)", () => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      gsap.set('.hero-image-wrapper', { clipPath: 'inset(100% 0% 0% 0%)' });
      gsap.set(imageRef.current, { scale: 1.15 });
      gsap.set('.hero-fade', { opacity: 0, y: 40 });

      tl.to('.hero-image-wrapper', {
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 2,
        ease: "power4.inOut"
      })
      .to(imageRef.current, {
        scale: 1,
        duration: 2,
        ease: "power4.inOut"
      }, "<")
      .from(titleSplit.chars, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.02,
        ease: "expo.out"
      }, "-=1.4")
      .from(subtitleSplit.words, {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.04,
        ease: "expo.out"
      }, "-=1.0")
      .to('.hero-fade', {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "expo.out"
      }, "-=1.0");

      // Parallax Effect
      gsap.to(imageRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      // Magnetic Button
      const btn = buttonRef.current;
      if (btn) {
        const xTo = gsap.quickTo(btn, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yTo = gsap.quickTo(btn, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        const handleMouseMove = (e: MouseEvent) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - (rect.left + rect.width / 2);
          const y = e.clientY - (rect.top + rect.height / 2);
          xTo(x * 0.4);
          yTo(y * 0.4);
        };

        const handleMouseLeave = () => {
          xTo(0);
          yTo(0);
        };

        btn.addEventListener("mousemove", handleMouseMove);
        btn.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          btn.removeEventListener("mousemove", handleMouseMove);
          btn.removeEventListener("mouseleave", handleMouseLeave);
        };
      }
    });

    mm.add("(max-width: 1023px)", () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      gsap.set('.hero-image-wrapper', { clipPath: 'inset(100% 0% 0% 0%)' });
      gsap.set(imageRef.current, { scale: 1.05 });
      gsap.set('.hero-fade', { opacity: 0, y: 20 });

      tl.to('.hero-image-wrapper', {
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 1.5,
        ease: "power3.inOut"
      })
      .to(imageRef.current, {
        scale: 1,
        duration: 1.5,
        ease: "power3.inOut"
      }, "<")
      .from(titleSplit.words, {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.05
      }, "-=1")
      .from(subtitleSplit.words, {
        y: 20,
        opacity: 0,
        duration: 1,
        stagger: 0.05
      }, "-=0.8")
      .to('.hero-fade', {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.1
      }, "-=0.8");
    });

    return () => {
      titleSplit.revert();
      subtitleSplit.revert();
    };
  }, { scope: containerRef });

  return (
    <section data-scroll-section id="inicio" ref={containerRef} className="relative min-h-[100svh] flex flex-col bg-secondary overflow-hidden pt-32 pb-16">
      <div className="container flex-1 grid grid-cols-12 gap-8 items-end">
        
        {/* Left Column: Text */}
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-end pb-12 z-10">
          <h1 className="hero-title font-editorial text-[var(--text-fluid-hero)] text-primary leading-[0.85] tracking-tighter uppercase mb-8" dangerouslySetInnerHTML={{ __html: SITE_CONTENT.hero.title }} />
          
          <div className="flex flex-col gap-6 max-w-md">
            <h2 className="hero-subtitle micro-text text-primary">
              {SITE_CONTENT.hero.subtitle}
            </h2>
            
            <p className="hero-fade micro-text text-muted">
              Comandado por mulheres, nosso escritório entrega resultados que impulsionam o seu crescimento. Atendimento exclusivo e personalizado para demandas complexas.
            </p>

            <div className="hero-fade w-fit mt-4">
              <a 
                ref={buttonRef}
                href="#contato"
                onClick={(e) => handleNavClick(e, "#contato")}
                className="inline-flex items-center justify-center gap-2 border border-primary text-primary px-8 py-4 font-sans text-[10px] tracking-[0.2em] uppercase hover:bg-primary hover:text-secondary transition-colors duration-500 will-change-transform"
              >
                {SITE_CONTENT.hero.cta}
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="col-span-12 lg:col-span-5 relative w-full h-[50vh] lg:h-[80vh] flex items-end justify-end">
          <div className="hero-image-wrapper w-full h-full relative overflow-hidden">
            <img 
              ref={imageRef}
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200&auto=format&fit=crop" 
              alt="Advogada Especialista" 
              className="w-full h-full object-cover origin-top will-change-transform"
              loading="eager"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-accent/10 mix-blend-multiply pointer-events-none"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
