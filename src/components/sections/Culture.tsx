import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function Culture() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".culture-content",
      { x: -30, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      }
    );

    gsap.fromTo(
      imageRef.current,
      { scale: 1.05, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section id="cultura" className="min-h-screen flex items-center py-24 2xl:py-48 3xl:py-64 bg-primary text-secondary overflow-hidden">
      <div className="container grid lg:grid-cols-2 gap-16 3xl:gap-32 items-center" ref={containerRef}>
        <div className="culture-content max-w-2xl 3xl:max-w-3xl relative z-10 bg-primary p-8 md:p-12 rounded-sm lg:-mr-32 mt-12 lg:mt-0 shadow-2xl">
          <h2 className="text-accent uppercase tracking-[0.2em] text-sm font-bold mb-8">Nossa Cultura</h2>
          <h3 className="font-serif text-5xl md:text-7xl lg:text-8xl 3xl:text-9xl leading-[0.9] mb-10 tracking-tighter font-medium">
            A força do <br/><span className="italic text-secondary/80">feminino</span> na advocacia.
          </h3>
          <p className="text-base md:text-lg text-secondary/70 leading-relaxed mb-12 font-light">
            Nossa cultura é baseada na colaboração, no respeito mútuo e na busca incessante pela justiça. Como um escritório feminino, trazemos uma perspectiva única para o direito: combinamos o rigor técnico com uma sensibilidade aguçada para as nuances de cada caso.
          </p>
          <div className="grid grid-cols-2 gap-8 3xl:gap-16">
            <div>
              <h4 className="font-serif text-2xl mb-2 text-secondary font-medium">Propósito</h4>
              <p className="text-secondary/60 text-sm font-light">Transformar a vida de nossos clientes através de uma advocacia ética e empática.</p>
            </div>
            <div>
              <h4 className="font-serif text-2xl mb-2 text-secondary font-medium">Valores</h4>
              <p className="text-secondary/60 text-sm font-light">Transparência, excelência técnica e compromisso com a equidade.</p>
            </div>
          </div>
        </div>

        <div className="relative h-[60vh] lg:h-[80vh] w-full overflow-hidden rounded-sm z-0">
          <div 
            ref={imageRef}
            className="absolute inset-0"
          >
            <img 
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2000&auto=format&fit=crop"
              alt="Cultura"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
          </div>
        </div>
      </div>
    </section>
  );
}
