import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      ".hero-title-line",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, delay: 0.2 }
    )
    .fromTo(
      ".hero-subtitle",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      "-=0.8"
    )
    .fromTo(
      ".hero-button",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      "-=0.6"
    )
    .fromTo(
      imageRef.current,
      { scale: 1.1, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" },
      "-=1.2"
    );

    // Parallax effect on scroll
    gsap.to(imageRef.current, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-secondary">
      {/* Background Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay z-0">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <filter id="heroNoise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#heroNoise)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div ref={textRef} className="max-w-2xl">
          <div className="mb-8">
            <span className="hero-subtitle inline-block text-[10px] uppercase tracking-[0.4em] font-bold text-accent mb-4">
              Escritório Boutique de Advocacia
            </span>
            <div className="overflow-hidden mb-2">
              <h1 className="hero-title-line font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.9] text-primary tracking-tighter">
                Justiça com
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1 className="hero-title-line font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.9] text-primary tracking-tighter">
                <span className="italic text-accent">empatia</span> e rigor.
              </h1>
            </div>
          </div>
          
          <p className="hero-subtitle text-lg md:text-xl text-primary/60 mb-12 max-w-md leading-relaxed font-light">
            Defendemos o que é justo com excelência técnica, transparência absoluta e um olhar humano dedicado ao direito civil e fiduciário.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <button className="hero-button group flex items-center gap-4 bg-primary text-secondary px-10 py-5 rounded-full hover:bg-accent transition-all duration-500 shadow-xl shadow-primary/10">
              <span className="font-medium uppercase tracking-widest text-xs">Consultoria Especializada</span>
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
            </button>
            
            <a href="#areas-de-atuação" className="hero-button text-xs uppercase tracking-[0.2em] font-bold text-primary/40 hover:text-primary transition-colors duration-300 py-4 border-b border-transparent hover:border-primary/20">
              Explorar Expertise
            </a>
          </div>
        </div>

        <div className="relative h-[50vh] lg:h-[85vh] w-full rounded-[3rem] overflow-hidden shadow-2xl group">
          <div 
            ref={imageRef}
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop')" 
            }}
          >
            <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
          </div>
          
          {/* Decorative element */}
          <div className="absolute bottom-12 left-12 right-12 p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 hidden md:block">
            <p className="text-white text-sm font-serif italic opacity-90">"A advocacia não é apenas uma profissão, é um compromisso com a dignidade humana."</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
        <span className="text-[8px] uppercase tracking-[0.5em] font-bold text-primary">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}
