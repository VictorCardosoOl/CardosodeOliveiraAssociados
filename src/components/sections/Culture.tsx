import { useRef } from "react";
import { usePremiumAnimation } from "@/hooks/usePremiumAnimation";

export function Culture() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  usePremiumAnimation(containerRef);

  return (
    <section id="cultura" className="flex items-center py-[var(--spacing-section-y)] bg-primary text-secondary overflow-hidden">
      <div className="container grid lg:grid-cols-12 gap-12 lg:gap-24 items-center" ref={containerRef}>
        <div className="lg:col-span-5 lg:col-start-1 anim-fade-up relative z-10">
          <div className="inline-flex items-center gap-2 border border-secondary/20 text-secondary px-6 py-2 micro-text mb-12 w-fit">
            <span>Nossa Cultura</span>
          </div>
          <h3 className="font-editorial text-[clamp(3rem,6vw,6rem)] leading-[0.85] tracking-tighter uppercase mb-12">
            A força do <br/><span className="italic text-secondary/70">feminino</span> na advocacia.
          </h3>
          <p className="text-lg md:text-xl text-secondary/70 leading-relaxed mb-16 font-light">
            Nossa cultura é baseada na colaboração, no respeito mútuo e na busca incessante pela justiça. Como um escritório feminino, trazemos uma perspectiva única para o direito: combinamos o rigor técnico com uma sensibilidade aguçada para as nuances de cada caso.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div>
              <h4 className="micro-text text-secondary/70 mb-4">Propósito</h4>
              <p className="text-secondary/70 font-light leading-relaxed">Transformar a vida de nossos clientes através de uma advocacia ética e empática.</p>
            </div>
            <div>
              <h4 className="micro-text text-secondary/70 mb-4">Valores</h4>
              <p className="text-secondary/70 font-light leading-relaxed">Transparência, excelência técnica e compromisso com a equidade.</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7 anim-image-wrapper relative h-[60vh] lg:h-[80vh] w-full overflow-hidden p-2 border border-secondary/20">
          <div 
            ref={imageRef}
            className="absolute inset-2 overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2000&auto=format&fit=crop"
              alt="Cultura"
              className="w-full h-full object-cover will-change-transform"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-accent/20 mix-blend-multiply" />
          </div>
        </div>
      </div>
    </section>
  );
}
