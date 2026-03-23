import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const elements = gsap.utils.toArray('.about-elem');
    
    if (elements.length > 0) {
      gsap.fromTo(elements, 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        }
      );
    }

    if (document.querySelector('.about-image')) {
      gsap.fromTo('.about-image',
        { scale: 1.05, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        }
      );
    }
  }, { scope: containerRef });

  return (
    <section id="o-escritorio" ref={containerRef} className="py-[var(--spacing-section-y)] bg-secondary border-t border-primary/20 overflow-hidden">
      <div className="container">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 3xl:gap-32 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <h2 className="about-elem font-sans text-sm md:text-base font-medium uppercase tracking-[0.15em] text-primary mb-8">
              O Escritório
            </h2>
            
            <h3 className="about-elem font-serif text-4xl md:text-5xl lg:text-6xl 3xl:text-7xl 4xl:text-8xl text-primary leading-[1.1] tracking-tighter font-light mb-8">
              Uma advocacia <span className="italic text-accent">feminina</span> e moderna, focada em atendimento exclusivo.
            </h3>
            
            <p className="about-elem text-base md:text-lg 3xl:text-xl text-primary/70 leading-relaxed font-light mb-10 max-w-xl 3xl:max-w-2xl">
              Simplificar as complexidades do direito. Proporcionar tranquilidade aos nossos clientes. Fomentar o crescimento e o sucesso aliviando pressões jurídicas com dedicação total e soluções sob medida.
            </p>

            <a 
              href="#contato"
              className="about-elem inline-flex items-center justify-center gap-2 bg-accent text-secondary px-10 py-5 rounded-full font-medium text-sm tracking-widest uppercase hover:bg-accent-dark hover:scale-105 active:scale-95 hover:shadow-xl transition-all duration-300 w-fit"
            >
              Fale Conosco
            </a>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7 mt-12 lg:mt-0">
            <div className="relative w-full aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] mb-20 overflow-hidden rounded-t-full rounded-b-[3rem] shadow-xl border border-primary/10 p-2">
              <img 
                src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1200&auto=format&fit=crop" 
                alt="Escritório de Advocacia" 
                className="about-image w-full h-full object-cover rounded-t-full rounded-b-[2.5rem]"
                loading="lazy"
              />
              <div className="absolute inset-2 rounded-t-full rounded-b-[2.5rem] bg-accent/5 mix-blend-multiply pointer-events-none"></div>
            </div>

            <div>
              <h4 className="about-elem font-sans text-xs font-medium uppercase tracking-[0.15em] text-primary mb-10">
                Como Trabalhamos
              </h4>

              <div className="flex flex-col">
                {[
                  { num: "01", title: "Estratégia", desc: "Análise profunda do cenário para traçar o melhor caminho jurídico." },
                  { num: "02", title: "Atendimento", desc: "Contato direto e pessoal com a fundadora em todas as etapas." },
                  { num: "03", title: "Resultado", desc: "Foco incansável na resolução eficiente e favorável do seu caso." }
                ].map((item, i) => (
                  <div key={i} className="about-elem group flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-12 py-8 border-t border-primary/10 hover:border-accent transition-colors">
                    <span className="font-sans text-sm font-medium text-accent tracking-widest pt-1">{item.num}</span>
                    <div className="flex-1">
                      <h5 className="font-serif text-3xl text-primary font-medium mb-3 group-hover:text-accent transition-colors">{item.title}</h5>
                      <p className="text-sm text-primary/70 leading-relaxed font-light max-w-md">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
                <div className="border-t border-primary/10"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
