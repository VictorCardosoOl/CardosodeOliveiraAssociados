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
    <section id="o-escritorio" ref={containerRef} className="min-h-screen flex items-center py-24 bg-muted">
      <div className="container mx-auto px-6 md:px-12 3xl:px-24 grid lg:grid-cols-12 gap-12 lg:gap-24">
        
        {/* Left Column */}
        <div className="lg:col-span-4 flex flex-col justify-between h-full">
          <span className="about-elem text-xs uppercase tracking-[0.2em] font-semibold text-primary/50 mb-12 lg:mb-0">
            O Escritório
          </span>
          
          <div className="mt-auto">
            <p className="about-elem text-sm text-primary/60 leading-relaxed mb-8 max-w-xs">
              Simplificar as complexidades do direito. Proporcionar tranquilidade aos nossos clientes. Fomentar o crescimento e o sucesso aliviando pressões jurídicas com dedicação total.
            </p>
            <button className="about-elem bg-primary text-secondary px-8 py-4 text-sm font-medium hover:bg-primary/90 transition-colors rounded-full">
              Fale Conosco
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-8">
          <h2 className="about-elem font-serif text-4xl md:text-5xl lg:text-6xl text-primary leading-[1.1] mb-16 max-w-3xl tracking-tight">
            Uma advocacia moderna, focada em atendimento exclusivo e soluções sob medida.
          </h2>

          <div className="about-elem w-full aspect-video overflow-hidden mb-16 bg-secondary rounded-2xl">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop" 
              alt="Equipe Jurídica" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="mt-16">
            <span className="about-elem text-xs uppercase tracking-[0.2em] font-semibold text-primary/50 mb-8 block">
              Como Trabalhamos
            </span>
            
            <div className="flex flex-col">
              {[
                { num: "01.", title: "ESTRATÉGIA", desc: "Análise profunda do cenário para traçar o melhor caminho jurídico." },
                { num: "02.", title: "ATENDIMENTO", desc: "Contato direto e pessoal com a fundadora em todas as etapas." },
                { num: "03.", title: "RESULTADO", desc: "Foco incansável na resolução eficiente e favorável do seu caso." }
              ].map((item, i) => (
                <div key={i} className="about-elem group flex flex-col md:flex-row md:items-center gap-4 md:gap-12 py-8 border-t border-primary/20 hover:border-primary transition-colors">
                  <span className="font-mono text-sm text-primary/50">{item.num}</span>
                  <h3 className="font-sans text-4xl md:text-6xl tracking-tighter text-primary group-hover:translate-x-4 transition-transform duration-500">{item.title}</h3>
                  <p className="md:ml-auto text-sm text-primary/60 max-w-xs">{item.desc}</p>
                </div>
              ))}
              <div className="border-t border-primary/20"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
