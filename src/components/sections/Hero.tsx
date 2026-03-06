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
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div ref={textRef} className="max-w-2xl">
          <div className="overflow-hidden mb-2">
            <h1 className="hero-title-line font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-primary">
              Justiça com
            </h1>
          </div>
          <div className="overflow-hidden mb-6">
            <h1 className="hero-title-line font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-primary">
              <span className="italic text-accent">empatia</span> e rigor.
            </h1>
          </div>
          
          <p className="hero-subtitle text-lg md:text-xl text-primary/70 mb-10 max-w-lg leading-relaxed">
            Um escritório liderado por mulheres, dedicado ao direito civil e fiduciário. Defendemos o que é justo com excelência, transparência e acolhimento.
          </p>

          <button className="hero-button group flex items-center gap-4 bg-primary text-secondary px-8 py-4 rounded-full hover:bg-accent transition-colors duration-300">
            <span className="font-medium uppercase tracking-wider text-sm">Fale com uma especialista</span>
            <span className="bg-secondary/20 p-2 rounded-full group-hover:bg-secondary/40 transition-colors">
              <ArrowRight size={16} />
            </span>
          </button>
        </div>

        <div className="relative h-[60vh] lg:h-[80vh] w-full rounded-2xl overflow-hidden shadow-2xl">
          <div 
            ref={imageRef}
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop')" 
            }}
          >
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
          </div>
        </div>
      </div>
    </section>
  );
}
