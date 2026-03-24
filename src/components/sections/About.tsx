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
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
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
            start: "top 85%",
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
          <div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col h-full">
            <div className="mb-12">
              <h2 className="about-elem font-sans text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-6 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-accent"></span>
                O Escritório
              </h2>
              
              <h3 className="about-elem font-serif text-4xl md:text-5xl lg:text-6xl 3xl:text-7xl 4xl:text-8xl text-primary leading-[1.1] tracking-tighter font-light mb-8">
                Uma advocacia <span className="italic text-accent">feminina</span> e moderna, focada em atendimento exclusivo.
              </h3>
              
              <p className="about-elem text-base md:text-lg 3xl:text-xl text-primary/70 leading-relaxed font-light mb-10 max-w-xl">
                Simplificar as complexidades do direito. Proporcionar tranquilidade aos nossos clientes. Fomentar o crescimento e o sucesso aliviando pressões jurídicas com dedicação total e soluções sob medida.
              </p>

              <a 
                href="#contato"
                className="about-elem inline-flex items-center justify-center gap-2 bg-primary text-secondary px-8 py-4 rounded-full font-medium text-xs tracking-[0.15em] uppercase hover:bg-accent hover:text-primary transition-all duration-300 w-fit"
              >
                Conheça nossa história
              </a>
            </div>

            {/* Stats / Highlight */}
            <div className="about-elem mt-auto pt-12 border-t border-primary/10 grid grid-cols-2 gap-8">
              <div>
                <span className="block font-serif text-4xl md:text-5xl text-primary mb-2">15+</span>
                <span className="text-xs uppercase tracking-widest text-primary/60 font-medium">Anos de<br/>Experiência</span>
              </div>
              <div>
                <span className="block font-serif text-4xl md:text-5xl text-primary mb-2">1k+</span>
                <span className="text-xs uppercase tracking-widest text-primary/60 font-medium">Casos<br/>Resolvidos</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7 mt-16 lg:mt-0">
            <div className="relative w-full aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] mb-24 overflow-hidden rounded-sm shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1200&auto=format&fit=crop" 
                alt="Escritório de Advocacia" 
                className="about-image w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/5 mix-blend-multiply pointer-events-none"></div>
            </div>

            <div className="pl-0 md:pl-12 lg:pl-24">
              <h4 className="about-elem font-sans text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-12 flex items-center gap-4">
                Como Trabalhamos
                <span className="flex-1 h-[1px] bg-primary/10"></span>
              </h4>

              <div className="flex flex-col">
                {[
                  { num: "01", title: "Estratégia", desc: "Análise profunda do cenário para traçar o melhor caminho jurídico." },
                  { num: "02", title: "Atendimento", desc: "Contato direto e pessoal com a fundadora em todas as etapas." },
                  { num: "03", title: "Resultado", desc: "Foco incansável na resolução eficiente e favorável do seu caso." }
                ].map((item, i) => (
                  <div key={i} className="about-elem group flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-12 py-10 border-b border-primary/10 hover:bg-primary/5 transition-colors px-6 -mx-6 rounded-lg">
                    <span className="font-serif text-2xl text-accent/50 italic pt-1">{item.num}</span>
                    <div className="flex-1">
                      <h5 className="font-serif text-2xl md:text-3xl text-primary mb-3 group-hover:text-accent transition-colors">{item.title}</h5>
                      <p className="text-sm md:text-base text-primary/70 leading-relaxed font-light max-w-md">
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
