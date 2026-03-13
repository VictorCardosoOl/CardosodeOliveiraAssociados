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
    <section id="servicos" ref={containerRef} className="min-h-screen flex items-center py-24 bg-muted">
      <div className="container mx-auto px-6 md:px-12 3xl:px-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl 3xl:max-w-4xl">
            <h2 className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-4">Nossos Serviços</h2>
            <h3 className="font-serif text-5xl md:text-6xl 3xl:text-7xl text-primary leading-[0.9] tracking-tighter">
              Atuação <br/><span className="italic text-primary/80">especializada</span>.
            </h3>
          </div>
          <p className="text-primary/60 max-w-xs text-sm leading-relaxed font-light">
            Oferecemos soluções jurídicas personalizadas, combinando profundo conhecimento técnico com uma visão estratégica do seu caso.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 3xl:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card group bg-secondary p-10 rounded-3xl border border-primary/5 hover:border-accent/30 transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              <div className="w-14 h-14 bg-muted rounded-full flex items-center justify-center mb-8 group-hover:bg-accent/10 transition-colors duration-500">
                <service.icon className="w-6 h-6 text-accent group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
              </div>
              <h4 className="font-serif text-2xl text-primary mb-4 leading-tight">{service.title}</h4>
              <p className="text-primary/60 text-sm leading-relaxed font-light mt-auto">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
