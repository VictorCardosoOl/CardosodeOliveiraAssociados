import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    const titleSplit = new SplitType('.hero-title', { types: 'words' });
    const subtitleSplit = new SplitType('.hero-subtitle', { types: 'words' });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(".hero-fade, .hero-image-wrapper", { opacity: 1, y: 0, clipPath: 'none' });
      gsap.set(titleSplit.words, { opacity: 1, y: 0 });
      gsap.set(subtitleSplit.words, { opacity: 1, y: 0 });
    });

    mm.add("(min-width: 1024px)", () => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      gsap.set('.hero-image-wrapper', { clipPath: 'inset(100% 0% 0% 0%)' });
      gsap.set(imageRef.current, { scale: 1.2 });
      gsap.set('.hero-fade', { opacity: 0, y: 20 });

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
        duration: 1.2,
        stagger: 0.04,
      }, "-=0.8")
      .from(subtitleSplit.words, {
        y: 20,
        opacity: 0,
        duration: 1,
        stagger: 0.02,
      }, "-=0.8")
      .to('.hero-fade', {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.1
      }, "-=0.8");

      gsap.to(imageRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });
    });

    mm.add("(max-width: 1023px)", () => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      gsap.set('.hero-image-wrapper', { clipPath: 'inset(100% 0% 0% 0%)' });
      gsap.set(imageRef.current, { scale: 1.1 });
      gsap.set('.hero-fade', { opacity: 0, y: 20 });

      tl.to('.hero-image-wrapper', {
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 1.2,
        ease: "power3.inOut"
      })
      .to(imageRef.current, {
        scale: 1,
        duration: 1.2,
        ease: "power3.inOut"
      }, "<")
      .from(titleSplit.words, {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.05,
      }, "-=0.6")
      .from(subtitleSplit.words, {
        y: 20,
        opacity: 0,
        duration: 1,
        stagger: 0.05,
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
    <section ref={containerRef} className="relative min-h-[100svh] flex flex-col bg-secondary overflow-hidden pt-20">
      <div className="flex-1 grid lg:grid-cols-2 w-full">
        
        {/* Left Column: Text */}
        <div className="flex flex-col justify-center items-start text-left px-6 md:px-12 lg:pl-16 2xl:pl-20 3xl:pl-24 4xl:pl-32 lg:pr-16 py-[var(--spacing-section-y)] z-10">
          <h1 className="hero-title font-serif text-[var(--text-fluid-hero)] text-primary leading-[0.85] tracking-tighter font-light mb-8 lowercase">
            visão<br />
            <span className="italic">singular.</span>
          </h1>
          
          <h2 className="hero-subtitle font-sans text-[clamp(1rem,1.5vw,1.5rem)] font-light uppercase tracking-[0.2em] text-primary mb-6">
            Liderança feminina no direito
          </h2>
          
          <p className="hero-fade text-[var(--text-fluid-p)] text-primary/70 leading-relaxed max-w-2xl 3xl:max-w-3xl font-light mb-10">
            Comandado por mulheres, nosso escritório entrega resultados que impulsionam o seu crescimento. Atendimento exclusivo e personalizado para demandas complexas.
          </p>

          <a 
            href="#contato"
            className="hero-fade inline-flex items-center justify-center gap-2 bg-accent text-secondary px-10 py-5 rounded-full font-medium text-sm tracking-widest uppercase hover:bg-accent-dark transition-colors duration-300"
          >
            Falar com Especialista
          </a>
        </div>

        {/* Right Column: Image */}
        <div className="relative w-full min-h-[60vh] lg:min-h-full flex items-center justify-center lg:justify-end lg:pr-12 2xl:pr-16 3xl:pr-20 4xl:pr-24 py-12 lg:py-0">
          <div className="w-[85%] sm:w-[70%] md:w-[60%] lg:w-full max-w-md lg:max-w-xl xl:max-w-2xl 3xl:max-w-3xl 4xl:max-w-4xl aspect-[3/4] relative p-2 md:p-3 border border-primary/10 rounded-xl shadow-2xl">
            <div className="hero-image-wrapper w-full h-full relative overflow-hidden rounded-lg">
              <img 
                ref={imageRef}
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200&auto=format&fit=crop" 
                alt="Advogada Especialista" 
                className="w-full h-full object-cover origin-top will-change-transform"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
            </div>
          </div>
        </div>

      </div>

      {/* Logo Ticker */}
      <div className="w-full border-t border-primary/10 bg-secondary py-6 overflow-hidden flex items-center mt-auto">
        <div className="flex whitespace-nowrap animate-marquee items-center">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center gap-16 md:gap-32 px-8 md:px-16">
              <span className="hero-fade font-serif text-2xl md:text-3xl font-bold text-primary">Forbes</span>
              <span className="hero-fade font-serif text-2xl md:text-3xl font-bold text-primary">VOGUE</span>
              <span className="hero-fade font-serif text-2xl md:text-3xl font-bold text-primary">THE WALL STREET JOURNAL.</span>
              <span className="hero-fade font-serif text-2xl md:text-3xl font-bold text-primary">The New York Times</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
