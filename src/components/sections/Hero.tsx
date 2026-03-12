import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      ".hero-elem",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.15, delay: 0.2 }
    ).fromTo(
      ".hero-image",
      { scale: 1.05, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" },
      "-=0.8"
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-24 pb-16 bg-secondary">
      <div className="container mx-auto px-6 md:px-12 3xl:px-24 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div className="max-w-xl">
          <span className="hero-elem inline-block text-xs uppercase tracking-[0.2em] font-semibold text-primary/50 mb-6">
            Consultoria Jurídica
          </span>
          
          <h1 className="hero-elem font-serif text-5xl md:text-6xl lg:text-7xl text-primary leading-[1.05] mb-8 tracking-tight">
            Somos especialistas no campo jurídico.
          </h1>
          
          <p className="hero-elem text-base md:text-lg text-primary/60 mb-10 leading-relaxed max-w-md">
            Nossos serviços abrangem uma ampla gama de necessidades jurídicas, desde a elaboração e negociação de contratos até fusões e aquisições complexas.
          </p>

          <div className="hero-elem">
            <button className="bg-primary text-secondary px-8 py-4 text-sm font-medium hover:bg-primary/90 transition-colors">
              Agendar Consulta
            </button>
          </div>
        </div>

        <div className="hero-image relative w-full aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] overflow-hidden bg-muted">
          <img 
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop" 
            alt="Profissional Jurídico" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
