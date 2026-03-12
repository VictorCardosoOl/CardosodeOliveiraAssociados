import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".about-elem",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section id="o-escritorio" ref={containerRef} className="py-24 md:py-32 bg-muted">
      <div className="container mx-auto px-6 md:px-12 3xl:px-24 grid lg:grid-cols-12 gap-12 lg:gap-24">
        
        {/* Left Column */}
        <div className="lg:col-span-4 flex flex-col justify-between h-full">
          <span className="about-elem text-xs uppercase tracking-[0.2em] font-semibold text-primary/50 mb-12 lg:mb-0">
            O Escritório
          </span>
          
          <div className="mt-auto">
            <p className="about-elem text-sm text-primary/60 leading-relaxed mb-8 max-w-xs">
              Simplificar as complexidades do direito. Proporcionar tranquilidade aos nossos clientes. Fomentar o crescimento e o sucesso aliviando pressões jurídicas.
            </p>
            <button className="about-elem bg-primary text-secondary px-8 py-4 text-sm font-medium hover:bg-primary/90 transition-colors">
              Fale Conosco
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-8">
          <h2 className="about-elem font-serif text-4xl md:text-5xl lg:text-6xl text-primary leading-[1.1] mb-12 max-w-3xl tracking-tight">
            Há mais de 25 anos, ajudamos clientes a navegar por seus desafios jurídicos com segurança.
          </h2>
          
          <div className="about-elem w-full aspect-video overflow-hidden mb-16 bg-secondary">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop" 
              alt="Equipe Jurídica" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-3 gap-8 border-t border-primary/10 pt-12">
            <div className="about-elem">
              <h3 className="font-serif text-4xl md:text-5xl text-primary mb-3">10k</h3>
              <p className="text-xs text-primary/50 uppercase tracking-widest font-medium">Clientes globais</p>
            </div>
            <div className="about-elem">
              <h3 className="font-serif text-4xl md:text-5xl text-primary mb-3">20+</h3>
              <p className="text-xs text-primary/50 uppercase tracking-widest font-medium">Especialistas</p>
            </div>
            <div className="about-elem">
              <h3 className="font-serif text-4xl md:text-5xl text-primary mb-3">50+</h3>
              <p className="text-xs text-primary/50 uppercase tracking-widest font-medium">Prêmios e honrarias</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
