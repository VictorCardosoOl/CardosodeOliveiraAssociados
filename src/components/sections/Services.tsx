import { useRef } from "react";
import { usePremiumAnimation } from "@/hooks/usePremiumAnimation";
import { Layout, Aperture, Target, Infinity, Layers, Hexagon } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Direito\nSocietário",
    description: "Estruturação e reorganização de sociedades, garantindo segurança jurídica e eficiência operacional para o seu negócio.",
    icon: Layout,
  },
  {
    title: "Fusões e\nAquisições",
    description: "Assessoria completa em operações de M&A, desde a due diligence até a negociação e fechamento de contratos complexos.",
    icon: Aperture,
  },
  {
    title: "Planejamento\nSucessório",
    description: "Estratégias para proteção patrimonial e transição geracional segura, minimizando impactos fiscais e conflitos familiares.",
    icon: Target,
  },
  {
    title: "Contratos\nComplexos",
    description: "Elaboração, revisão e negociação de instrumentos jurídicos sofisticados para viabilizar negócios de alto impacto.",
    icon: Infinity,
  },
  {
    title: "Contencioso\nEstratégico",
    description: "Atuação incisiva em litígios de alta complexidade, defendendo os interesses da sua empresa nos tribunais superiores.",
    icon: Layers,
  },
  {
    title: "Consultoria\nPreventiva",
    description: "Mapeamento e mitigação de riscos legais, assegurando conformidade e evitando passivos para a sua operação.",
    icon: Hexagon,
  },
];

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  usePremiumAnimation(containerRef);

  return (
    <section id="servicos" ref={containerRef} className="py-[var(--spacing-section-y)] bg-secondary text-primary border-t border-primary/10">
      <div className="container">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Left Side: Sidebar */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <h2 className="anim-title anim-fade-up text-[var(--text-fluid-h2)] font-editorial leading-[0.85] tracking-tighter uppercase mb-8">
              Nossa<br/>
              <span className="italic text-accent">Atuação.</span>
            </h2>
            <p className="anim-fade-up micro-text text-muted mb-10 max-w-md">
              Oferecemos assessoria jurídica personalizada em um ambiente seguro e estratégico, especializando-nos em demandas corporativas complexas para ajudar sua empresa a navegar pelos desafios do mercado com resiliência e clareza.
            </p>
            <a 
              href="#contato"
              className="anim-fade-up inline-flex items-center justify-center gap-2 border border-primary text-primary px-8 py-4 font-sans text-[10px] tracking-[0.2em] uppercase hover:bg-primary hover:text-secondary transition-colors duration-500 w-fit"
            >
              Agendar uma consulta
            </a>
          </div>

          {/* Right Side: Services Grid */}
          <div className="lg:col-span-7 anim-stagger-container grid sm:grid-cols-2 gap-x-12 gap-y-16 lg:pl-12 pt-12 lg:pt-0">
            {services.map((service, index) => (
              <div 
                key={index}
                className="anim-stagger-item group flex flex-col items-start"
              >
                <div className="w-12 h-12 rounded-full border border-primary/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:border-accent transition-colors duration-500">
                  <service.icon className="w-5 h-5 text-primary group-hover:text-secondary transition-colors duration-500" strokeWidth={1} />
                </div>
                <h3 className="text-3xl font-editorial uppercase tracking-tighter mb-4 whitespace-pre-line group-hover:text-accent transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="micro-text text-muted normal-case tracking-normal leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
