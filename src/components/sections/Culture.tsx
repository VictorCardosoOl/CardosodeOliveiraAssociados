import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function Culture() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (document.querySelector('.culture-content')) {
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
    }

    if (imageRef.current) {
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
    }
  }, { scope: containerRef });

  return (
    <section id="cultura" className="flex items-center py-[var(--spacing-section-y)] bg-primary text-secondary overflow-hidden">
      <div className="container grid lg:grid-cols-2 gap-[var(--spacing-gap)] items-center" ref={containerRef}>
        <div className="culture-content max-w-2xl 3xl:max-w-4xl relative z-10 bg-primary p-8 md:p-12 3xl:p-16 4xl:p-24 rounded-[3rem] lg:-mr-16 3xl:-mr-24 4xl:-mr-32 mt-12 lg:mt-0 shadow-2xl border border-secondary/10">
          <h2 className="text-accent uppercase tracking-[0.2em] text-[clamp(0.75rem,1vw,0.875rem)] font-medium mb-8">Nossa Cultura</h2>
          <h3 className="font-serif text-[var(--text-fluid-h2)] leading-[0.9] mb-10 tracking-tighter font-light">
            A força do <br/><span className="italic text-secondary/80">feminino</span> na advocacia.
          </h3>
          <p className="text-[var(--text-fluid-p)] text-secondary/70 leading-relaxed mb-12 font-light max-w-xl 3xl:max-w-2xl">
            Nossa cultura é baseada na colaboração, no respeito mútuo e na busca incessante pela justiça. Como um escritório feminino, trazemos uma perspectiva única para o direito: combinamos o rigor técnico com uma sensibilidade aguçada para as nuances de cada caso.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 3xl:gap-16">
            <div>
              <h4 className="font-serif text-[var(--text-fluid-h3)] mb-2 text-secondary font-medium">Propósito</h4>
              <p className="text-secondary/60 text-[var(--text-fluid-p)] font-light max-w-xs 3xl:max-w-sm">Transformar a vida de nossos clientes através de uma advocacia ética e empática.</p>
            </div>
            <div>
              <h4 className="font-serif text-[var(--text-fluid-h3)] mb-2 text-secondary font-medium">Valores</h4>
              <p className="text-secondary/60 text-[var(--text-fluid-p)] font-light max-w-xs 3xl:max-w-sm">Transparência, excelência técnica e compromisso com a equidade.</p>
            </div>
          </div>
        </div>

        <div className="relative h-[60vh] lg:h-[80vh] 3xl:h-[90vh] w-full overflow-hidden rounded-t-[10rem] 3xl:rounded-t-[15rem] rounded-b-[3rem] 3xl:rounded-b-[5rem] z-0 p-2 border border-secondary/20">
          <div 
            ref={imageRef}
            className="absolute inset-2 rounded-t-[9.5rem] 3xl:rounded-t-[14.5rem] rounded-b-[2.5rem] 3xl:rounded-b-[4.5rem] overflow-hidden"
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
