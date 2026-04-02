import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { useSmoothScroll } from "../../context/SmoothScrollContext";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const { scroll } = useSmoothScroll();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (scroll) {
      scroll.scrollTo(href);
    }
  };

  useGSAP(() => {
    if (!containerRef.current) return;

    const mm = gsap.matchMedia();
    const titleSplit = new SplitType('.hero-title', { types: 'words' });
    const subtitleSplit = new SplitType('.hero-subtitle', { types: 'words' });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(".hero-fade, .hero-image-wrapper", { opacity: 1, y: 0, clipPath: 'none' });
      gsap.set(titleSplit.words, { opacity: 1, y: 0 });
      gsap.set(subtitleSplit.words, { opacity: 1, y: 0 });
    });

    mm.add("(min-width: 1024px)", () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      gsap.set('.hero-image-wrapper', { clipPath: 'inset(100% 0% 0% 0%)' });
      gsap.set(imageRef.current, { scale: 1.1 });
      gsap.set('.hero-fade', { opacity: 0, y: 50 });

      tl.to('.hero-image-wrapper', {
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 1.8,
        ease: "power4.inOut"
      })
      .to(imageRef.current, {
        scale: 1,
        duration: 1.8,
        ease: "power4.inOut"
      }, "<")
      .from(titleSplit.words, {
        y: 80,
        opacity: 0,
        duration: 1.2,
        stagger: 0.05,
        ease: "expo.out"
      }, "-=1.2")
      .from(subtitleSplit.words, {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.02,
        ease: "expo.out"
      }, "-=0.8")
      .to('.hero-fade', {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: "expo.out"
      }, "-=0.8");

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
    });

    mm.add("(max-width: 1023px)", () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      gsap.set('.hero-image-wrapper', { clipPath: 'inset(100% 0% 0% 0%)' });
      gsap.set(imageRef.current, { scale: 1.1 });
      gsap.set('.hero-fade', { opacity: 0, y: 30 });

      tl.to('.hero-image-wrapper', {
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 1.5,
        ease: "power4.inOut"
      })
      .to(imageRef.current, {
        scale: 1,
        duration: 1.5,
        ease: "power4.inOut"
      }, "<")
      .from(titleSplit.words, {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.05,
        ease: "expo.out"
      }, "-=1")
      .from(subtitleSplit.words, {
        y: 20,
        opacity: 0,
        duration: 1,
        stagger: 0.05,
        ease: "expo.out"
      }, "-=0.8")
      .to('.hero-fade', {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: "expo.out"
      }, "-=0.8");
    });

    return () => {
      titleSplit.revert();
      subtitleSplit.revert();
      mm.revert();
    };
  }, { scope: containerRef });

  return (
    <section data-scroll-section id="inicio" ref={containerRef} className="relative min-h-[100svh] flex flex-col bg-secondary overflow-hidden pt-32 pb-16">
      <div className="container flex-1 grid grid-cols-12 gap-8 items-end">
        
        {/* Left Column: Text */}
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-end pb-12 z-10">
          <h1 className="hero-title font-editorial text-[var(--text-fluid-hero)] text-primary leading-[0.85] tracking-tighter uppercase mb-8">
            Visão<br />
            <span className="italic text-accent">Singular.</span>
          </h1>
          
          <div className="flex flex-col gap-6 max-w-md">
            <h2 className="hero-subtitle micro-text text-primary">
              Liderança feminina no direito
            </h2>
            
            <p className="hero-fade micro-text text-muted">
              Comandado por mulheres, nosso escritório entrega resultados que impulsionam o seu crescimento. Atendimento exclusivo e personalizado para demandas complexas.
            </p>

            <a 
              href="#contato"
              onClick={(e) => handleNavClick(e, "#contato")}
              className="hero-fade inline-flex items-center justify-center gap-2 border border-primary text-primary px-8 py-4 font-sans text-[10px] tracking-[0.2em] uppercase hover:bg-primary hover:text-secondary transition-colors duration-500 w-fit"
            >
              Falar com Especialista
            </a>
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
