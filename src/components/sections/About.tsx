import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const elements = gsap.utils.toArray('.anim-element');
    
    elements.forEach((el: any) => {
      gsap.fromTo(el, 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          }
        }
      );
    });
  }, { scope: containerRef });

  return (
    <section id="o-escritorio" ref={containerRef} className="py-[var(--spacing-section-y)] bg-secondary border-t border-primary/10 overflow-hidden">
      <div className="container">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-6 lg:sticky lg:top-32 flex flex-col h-full">
            <h2 className="anim-element font-editorial text-[var(--text-fluid-h2)] text-primary leading-[0.85] tracking-tighter uppercase mb-8">
              Uma advocacia<br />
              <span className="italic text-accent">feminina</span><br />
              e moderna.
            </h2>
            
            {/* Stats / Highlight */}
            <div className="anim-element mt-auto pt-12 border-t border-primary/10 grid grid-cols-2 gap-8">
              <div>
                <span className="block font-editorial text-5xl text-primary mb-2">15+</span>
                <span className="micro-text text-muted">Anos de<br/>Experiência</span>
              </div>
              <div>
                <span className="block font-editorial text-5xl text-primary mb-2">1k+</span>
                <span className="micro-text text-muted">Casos<br/>Resolvidos</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6 mt-16 lg:mt-0">
            <div className="anim-element relative w-full aspect-[3/4] mb-24 overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1200&auto=format&fit=crop" 
                alt="Escritório de Advocacia" 
                className="w-full h-full object-cover will-change-transform"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-accent/5 mix-blend-multiply pointer-events-none"></div>
            </div>

            <div className="pl-0 md:pl-12">
              <p className="anim-element micro-text text-muted mb-16 max-w-md">
                Simplificar as complexidades do direito. Proporcionar tranquilidade aos nossos clientes. Fomentar o crescimento e o sucesso aliviando pressões jurídicas com dedicação total e soluções sob medida.
              </p>

              <h4 className="anim-element micro-text text-primary mb-12 flex items-center gap-4">
                Como Trabalhamos
                <span className="flex-1 h-[1px] bg-primary/10"></span>
              </h4>

              <div className="flex flex-col">
                {[
                  { num: "01", title: "Estratégia", desc: "Análise profunda do cenário para traçar o melhor caminho jurídico." },
                  { num: "02", title: "Atendimento", desc: "Contato direto e pessoal com a fundadora em todas as etapas." },
                  { num: "03", title: "Resultado", desc: "Foco incansável na resolução eficiente e favorável do seu caso." }
                ].map((item, i) => (
                  <div key={i} className="anim-element group flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-12 py-10 border-b border-primary/10 hover:bg-primary/5 transition-colors">
                    <span className="font-editorial text-2xl text-accent/50 italic pt-1">{item.num}</span>
                    <div className="flex-1">
                      <h5 className="font-editorial text-3xl text-primary mb-3 uppercase tracking-tighter group-hover:text-accent transition-colors">{item.title}</h5>
                      <p className="micro-text text-muted">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
