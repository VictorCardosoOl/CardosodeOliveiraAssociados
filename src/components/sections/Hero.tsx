import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from "split-type";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    // 1. Acessibilidade: Respeita prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      gsap.set(".hero-elem, .hero-image", { opacity: 1, y: 0 });
      return;
    }

    // 2. Text Reveal com SplitType
    const titleSplit = new SplitType(".hero-title", { types: "words,chars" });
    const subtitleSplit = new SplitType(".hero-subtitle", { types: "words" });

    // Esconde elementos iniciais para evitar FOUC
    gsap.set(titleSplit.chars, { yPercent: 100, opacity: 0 });
    gsap.set(subtitleSplit.words, { yPercent: 100, opacity: 0 });
    gsap.set(".hero-text", { y: 20, opacity: 0 });
    gsap.set(buttonRef.current, { y: 20, opacity: 0, scale: 0.9 });
    gsap.set(".hero-image-container", { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" });
    gsap.set(imageRef.current, { scale: 1.2 });

    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

    // 3. Lei do Ritmo e Inércia (Animação de Entrada)
    tl.to(".hero-image-container", {
      clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
      duration: 1.5,
      ease: "power3.inOut"
    })
    .to(imageRef.current, {
      scale: 1,
      duration: 1.5,
      ease: "power3.inOut"
    }, "<")
    .to(titleSplit.chars, {
      yPercent: 0,
      opacity: 1,
      duration: 1.2,
      stagger: 0.02,
    }, "-=1")
    .to(subtitleSplit.words, {
      yPercent: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.04,
    }, "-=1")
    .to(".hero-text", {
      y: 0,
      opacity: 1,
      duration: 1,
    }, "-=0.8")
    .to(buttonRef.current, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "elastic.out(1, 0.5)"
    }, "-=0.8");

    // 4. Lei da Profundidade (Parallax)
    // A imagem se move mais devagar que o scroll
    gsap.to(imageRef.current, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });

    // Cleanup do SplitType
    return () => {
      titleSplit.revert();
      subtitleSplit.revert();
    };
  }, { scope: containerRef });

  // 5. Microinteração Magnética (Botão)
  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      // Atração magnética suave
      gsap.to(button, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.6,
        ease: "power3.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.3)"
      });
    };

    button.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mousemove", handleMouseMove);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[100svh] flex flex-col bg-secondary overflow-hidden pt-20">
      <div className="flex-1 grid lg:grid-cols-2 w-full">
        
        {/* Left Column: Text */}
        <div className="flex flex-col justify-center items-start text-left px-6 md:px-12 lg:pl-16 2xl:pl-20 3xl:pl-24 4xl:pl-32 lg:pr-16 py-[var(--spacing-section-y)] z-10">
          <h1 className="hero-title font-serif text-[var(--text-fluid-hero)] text-primary leading-[0.85] tracking-tighter font-light mb-8 lowercase overflow-hidden">
            visão<br />
            <span className="italic">singular.</span>
          </h1>
          
          <div className="overflow-hidden mb-6">
            <h2 className="hero-subtitle font-sans text-[clamp(1rem,1.5vw,1.5rem)] font-light uppercase tracking-[0.2em] text-primary">
              Liderança feminina no direito
            </h2>
          </div>
          
          <p className="hero-text text-[var(--text-fluid-p)] text-primary/70 leading-relaxed max-w-2xl 3xl:max-w-3xl font-light mb-10">
            Comandado por mulheres, nosso escritório entrega resultados que impulsionam o seu crescimento. Atendimento exclusivo e personalizado para demandas complexas.
          </p>

          <a 
            ref={buttonRef}
            href="#contato"
            className="inline-flex items-center justify-center gap-2 bg-accent text-secondary px-10 py-5 rounded-full font-medium text-sm tracking-widest uppercase hover:bg-accent-dark transition-colors duration-300"
          >
            Falar com Especialista
          </a>
        </div>

        {/* Right Column: Image */}
        <div className="relative w-full min-h-[60vh] lg:min-h-full flex items-center justify-center lg:justify-end lg:pr-12 2xl:pr-16 3xl:pr-20 4xl:pr-24 py-12 lg:py-0">
          <div className="w-[85%] sm:w-[70%] md:w-[60%] lg:w-full max-w-md lg:max-w-xl xl:max-w-2xl 3xl:max-w-3xl 4xl:max-w-4xl aspect-[3/4] relative p-2 md:p-3 border border-primary/10 rounded-xl shadow-2xl">
            <div className="hero-image-container w-full h-full relative overflow-hidden rounded-lg">
              <img 
                ref={imageRef}
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200&auto=format&fit=crop" 
                alt="Advogada Especialista" 
                className="w-full h-full object-cover origin-top"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-accent/5 mix-blend-multiply pointer-events-none"></div>
            </div>
          </div>
        </div>

      </div>

      {/* Logo Ticker */}
      <div className="w-full border-t border-primary/10 bg-secondary py-6 overflow-hidden flex items-center mt-auto">
        <div className="flex whitespace-nowrap animate-marquee items-center">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center gap-16 md:gap-32 px-8 md:px-16">
              <span className="font-serif text-2xl md:text-3xl font-bold text-primary">Forbes</span>
              <span className="font-serif text-2xl md:text-3xl font-bold text-primary">VOGUE</span>
              <span className="font-serif text-2xl md:text-3xl font-bold text-primary">THE WALL STREET JOURNAL.</span>
              <span className="font-serif text-2xl md:text-3xl font-bold text-primary">The New York Times</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
