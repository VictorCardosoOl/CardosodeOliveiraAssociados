import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Scale, ShieldCheck, Briefcase, Handshake } from "lucide-react";

const services = [
  {
    title: "Direito Civil",
    description: "Atuação abrangente em litígios cíveis, responsabilidade civil e direito de família, com foco na proteção dos seus interesses.",
    icon: Scale,
  },
  {
    title: "Direito Fiduciário",
    description: "Especialistas em estruturação e proteção patrimonial, garantindo a segurança e a sucessão dos seus bens com estratégias sólidas.",
    icon: ShieldCheck,
  },
  {
    title: "Consultoria Empresarial",
    description: "Apoio jurídico completo para o seu negócio, desde a constituição até operações complexas e contratos comerciais.",
    icon: Briefcase,
  },
  {
    title: "Resolução de Conflitos",
    description: "Mediação e negociação estratégica para solucionar disputas de forma ágil, preservando relacionamentos e reduzindo custos.",
    icon: Handshake,
  },
];

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".service-card",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section id="servicos" ref={containerRef} className="min-h-screen flex items-center py-24 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12 3xl:px-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl 3xl:max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-8 rounded-sm">
              <span>Nossos Serviços</span>
            </div>
            <h3 className="font-sans text-5xl md:text-6xl 3xl:text-7xl text-primary leading-[0.95] tracking-tighter font-bold">
              Atuação <br/><span className="text-accent">especializada</span>.
            </h3>
          </div>
          <p className="text-primary/70 max-w-sm text-base leading-relaxed font-medium">
            Oferecemos soluções jurídicas personalizadas, combinando profundo conhecimento técnico com uma visão estratégica do seu caso.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 3xl:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card group bg-white p-10 rounded-sm border border-gray-200 hover:border-accent hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col relative overflow-hidden"
            >
              {/* Subtle accent line on top */}
              <div className="absolute top-0 left-0 w-full h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              <div className="w-14 h-14 bg-accent/10 rounded-sm flex items-center justify-center mb-8 group-hover:bg-accent transition-colors duration-500">
                <service.icon className="w-6 h-6 text-accent group-hover:text-white transition-colors duration-500" strokeWidth={2} />
              </div>
              <h4 className="font-sans font-bold text-2xl text-primary mb-4 leading-tight">{service.title}</h4>
              <p className="text-primary/60 text-sm leading-relaxed font-medium mt-auto">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
