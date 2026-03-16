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
    <section id="o-escritorio" ref={containerRef} className="min-h-screen flex items-center py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 3xl:px-24 grid lg:grid-cols-12 gap-12 lg:gap-24">
        
        {/* Left Column */}
        <div className="lg:col-span-4 flex flex-col justify-between h-full">
          <div className="about-elem inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-12 lg:mb-0 rounded-sm w-fit">
            <span>O Escritório</span>
          </div>
          
          <div className="mt-auto">
            <p className="about-elem text-base text-primary/70 leading-relaxed mb-8 max-w-sm font-medium">
              Simplificar as complexidades do direito. Proporcionar tranquilidade aos nossos clientes. Fomentar o crescimento e o sucesso aliviando pressões jurídicas com dedicação total.
            </p>
            <button className="about-elem bg-primary text-white px-8 py-4 text-sm font-bold hover:bg-accent transition-colors rounded-sm">
              Fale Conosco
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-8">
          <h2 className="about-elem font-sans text-4xl md:text-5xl lg:text-6xl text-primary leading-[1.1] mb-16 max-w-3xl tracking-tighter font-bold">
            Uma advocacia moderna, focada em <span className="text-accent">atendimento exclusivo</span> e soluções sob medida.
          </h2>

          <div className="about-elem relative w-full aspect-video mb-16">
            {/* Geometric Accent */}
            <div className="absolute -inset-4 bg-muted rounded-sm -z-10 translate-x-4 translate-y-4 hidden md:block"></div>
            <div className="w-full h-full overflow-hidden bg-gray-100 rounded-sm relative">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop" 
                alt="Equipe Jurídica" 
                className="w-full h-full object-cover grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-accent/5 mix-blend-multiply"></div>
            </div>
          </div>

          <div className="mt-16">
            <span className="about-elem text-xs uppercase tracking-widest font-bold text-accent mb-8 block">
              Como Trabalhamos
            </span>
            
            <div className="flex flex-col">
              {[
                { num: "01", title: "ESTRATÉGIA", desc: "Análise profunda do cenário para traçar o melhor caminho jurídico." },
                { num: "02", title: "ATENDIMENTO", desc: "Contato direto e pessoal com a fundadora em todas as etapas." },
                { num: "03", title: "RESULTADO", desc: "Foco incansável na resolução eficiente e favorável do seu caso." }
              ].map((item, i) => (
                <div key={i} className="about-elem group flex flex-col md:flex-row md:items-center gap-4 md:gap-12 py-8 border-t border-gray-200 hover:border-accent transition-colors">
                  <span className="font-sans font-bold text-lg text-accent/50 group-hover:text-accent transition-colors">{item.num}</span>
                  <h3 className="font-sans text-3xl md:text-5xl tracking-tighter text-primary font-bold group-hover:translate-x-4 transition-transform duration-500">{item.title}</h3>
                  <p className="md:ml-auto text-sm text-primary/60 max-w-xs font-medium">{item.desc}</p>
                </div>
              ))}
              <div className="border-t border-gray-200"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
