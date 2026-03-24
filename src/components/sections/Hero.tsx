import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    if (document.querySelector('.hero-elem')) {
      tl.fromTo(
        ".hero-elem",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.1, delay: 0.1 }
      );
    }

    if (document.querySelector('.hero-image')) {
      tl.fromTo(
        ".hero-image",
        { scale: 1.02, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.8, ease: "power2.out" },
        "-=1"
      );
    }


  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-[100svh] flex flex-col bg-secondary overflow-hidden pt-20">
      <div className="flex-1 grid lg:grid-cols-2 w-full">
        
        {/* Left Column: Text */}
        <div className="flex flex-col justify-center items-start text-left px-6 md:px-12 lg:pl-16 2xl:pl-20 3xl:pl-24 4xl:pl-32 lg:pr-16 py-[var(--spacing-section-y)] z-10">
          <h1 className="hero-elem font-serif text-[var(--text-fluid-hero)] text-primary leading-[0.85] tracking-tighter font-light mb-8 lowercase">
            visão<br />
            <span className="italic">singular.</span>
          </h1>
          
          <h2 className="hero-elem font-sans text-[clamp(1rem,1.5vw,1.5rem)] font-light uppercase tracking-[0.2em] text-primary mb-6">
            Liderança feminina no direito
          </h2>
          
          <p className="hero-elem text-[var(--text-fluid-p)] text-primary/70 leading-relaxed max-w-2xl 3xl:max-w-3xl font-light mb-10">
            Comandado por mulheres, nosso escritório entrega resultados que impulsionam o seu crescimento. Atendimento exclusivo e personalizado para demandas complexas.
          </p>

          <a 
            href="#contato"
            className="hero-elem inline-flex items-center justify-center gap-2 bg-accent text-secondary px-10 py-5 rounded-full font-medium text-sm tracking-widest uppercase hover:bg-accent-dark hover:scale-105 active:scale-95 hover:shadow-xl transition-all duration-300"
          >
            Falar com Especialista
          </a>
        </div>

        {/* Right Column: Image */}
        <div className="relative w-full min-h-[60vh] lg:min-h-full flex items-center justify-center lg:justify-end lg:pr-12 2xl:pr-16 3xl:pr-20 4xl:pr-24 py-12 lg:py-0">
          <div className="w-[85%] sm:w-[70%] md:w-[60%] lg:w-full max-w-md lg:max-w-xl xl:max-w-2xl 3xl:max-w-3xl 4xl:max-w-4xl aspect-[3/4] relative p-2 md:p-3 border border-primary/10 rounded-t-full rounded-b-[3rem] shadow-2xl">
            <div className="w-full h-full relative overflow-hidden rounded-t-full rounded-b-[2.5rem]">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200&auto=format&fit=crop" 
                alt="Advogada Especialista" 
                className="hero-image w-full h-full object-cover"
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
