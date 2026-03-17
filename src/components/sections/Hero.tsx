import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.fromTo(
      ".hero-elem",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.1, delay: 0.1 }
    ).fromTo(
      ".hero-image",
      { scale: 1.02, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.8, ease: "power2.out" },
      "-=1"
    ).fromTo(
      ".hero-badge",
      { scale: 0.9, rotation: -15, opacity: 0 },
      { scale: 1, rotation: -12, opacity: 1, duration: 1.2, ease: "power2.out" },
      "-=1.2"
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col bg-secondary overflow-hidden pt-20">
      <div className="flex-1 grid lg:grid-cols-2 w-full">
        
        {/* Left Column: Text */}
        <div className="flex flex-col justify-center items-start text-left px-6 md:px-12 lg:pl-24 3xl:pl-32 lg:pr-16 py-12 lg:py-32 z-10">
          <h1 className="hero-elem font-serif text-[6rem] sm:text-[8rem] lg:text-[10rem] xl:text-[12rem] text-primary leading-[0.8] tracking-tighter font-semibold mb-6 lowercase">
            estra<br />
            tégia.
          </h1>
          
          <h2 className="hero-elem font-sans text-xl md:text-2xl xl:text-3xl font-medium uppercase tracking-tight text-primary mb-6">
            Liderança feminina no direito!
          </h2>
          
          <p className="hero-elem text-base md:text-lg xl:text-xl text-primary/70 leading-relaxed max-w-md font-light mb-10">
            Comandado por mulheres, nosso escritório entrega resultados que impulsionam o seu crescimento. Atendimento exclusivo e personalizado para demandas complexas.
          </p>

          <a 
            href="#contato"
            className="hero-elem inline-flex items-center justify-center gap-2 bg-primary text-secondary px-8 py-4 rounded-full font-medium text-lg hover:bg-primary/90 hover:scale-105 active:scale-95 hover:shadow-xl transition-all duration-300"
          >
            Falar com Especialista
          </a>
        </div>

        {/* Right Column: Image */}
        <div className="relative w-full h-[50vh] lg:h-auto min-h-[400px] lg:min-h-[600px]">
          <div className="absolute inset-0 lg:pt-24 lg:pb-8 lg:pr-8">
            <div className="w-full h-full relative overflow-hidden rounded-t-3xl lg:rounded-t-none lg:rounded-tl-[3rem] lg:rounded-bl-[3rem] lg:rounded-tr-[3rem] lg:rounded-br-[3rem] shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200&auto=format&fit=crop" 
                alt="Advogada Especialista" 
                className="hero-image w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* Floating Badge */}
          <div className="hero-badge absolute top-0 lg:top-1/2 left-8 lg:-left-16 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 bg-[#FFD700] rounded-full flex items-center justify-center text-center p-4 transform -rotate-12 z-20 shadow-xl border-[6px] border-secondary">
            <div className="absolute inset-1 border border-dashed border-primary/30 rounded-full"></div>
            <span className="font-sans font-black text-primary text-xs md:text-sm uppercase leading-tight tracking-wider z-10">
              Agende<br/>Sua<br/>Consulta
            </span>
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
