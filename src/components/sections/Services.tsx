import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Layout, Aperture, Target, Infinity, Layers, Hexagon } from "lucide-react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

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

  useGSAP(() => {
    const elements = gsap.utils.toArray('.service-item');
    
    if (elements.length > 0) {
      gsap.fromTo(elements, 
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
          }
        }
      );
    }

    if (document.querySelector('.services-sidebar')) {
      gsap.fromTo('.services-sidebar',
        { x: 20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
          }
        }
      );
    }
  }, { scope: containerRef });

  return (
    <section id="servicos" ref={containerRef} className="py-[var(--spacing-section-y)] bg-secondary text-primary border-t border-primary/20">
      <div className="container">
        
        <div className="grid lg:grid-cols-[1fr_350px] xl:grid-cols-[1fr_400px] 3xl:grid-cols-[1fr_500px] 4xl:grid-cols-[1fr_600px] gap-12 lg:gap-0">
          
          {/* Left Side: Services Grid */}
          <div className="grid md:grid-cols-2 relative lg:pr-12 xl:pr-16 3xl:pr-20 4xl:pr-24">
            {/* Vertical Divider for Desktop */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-primary/20 -translate-x-1/2"></div>
            
            {services.map((service, index) => (
              <div 
                key={index}
                className={cn(
                  "service-item py-10 md:py-14 3xl:py-20 group",
                  // Add padding right for left column, padding left for right column
                  index % 2 === 0 ? "md:pr-12 3xl:pr-16" : "md:pl-12 3xl:pl-16",
                  // Add bottom border to all except the last row
                  index < services.length - 2 ? "border-b border-primary/10" : "",
                  // On mobile, add bottom border to the second to last item
                  index === services.length - 2 ? "border-b md:border-b-0 border-primary/10" : ""
                )}
              >
                <div className="flex items-start gap-6 3xl:gap-10">
                  <div className="w-14 h-14 3xl:w-20 3xl:h-20 rounded-full bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors duration-500">
                    <service.icon className="w-6 h-6 3xl:w-8 3xl:h-8 text-primary group-hover:text-secondary transition-colors duration-500" strokeWidth={1} />
                  </div>
                  <div>
                    <h3 className="text-2xl 3xl:text-4xl font-serif font-medium mb-4 leading-tight whitespace-pre-line group-hover:text-accent transition-colors duration-500">
                      {service.title}
                    </h3>
                    <p className="text-sm 3xl:text-lg text-primary/70 leading-relaxed font-light max-w-md 3xl:max-w-xl">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Sidebar */}
          <div className="services-sidebar lg:border-l border-primary/20 lg:pl-12 xl:pl-16 3xl:pl-20 4xl:pl-24 pt-10 lg:pt-14">
            <div className="sticky top-32">
              <h2 className="text-3xl md:text-4xl 3xl:text-6xl font-sans font-medium mb-6">Nossa Atuação</h2>
              <p className="text-sm md:text-base 3xl:text-xl text-primary/70 leading-relaxed mb-10 font-light max-w-md 3xl:max-w-xl">
                Oferecemos assessoria jurídica personalizada em um ambiente seguro e estratégico, especializando-nos em demandas corporativas complexas para ajudar sua empresa a navegar pelos desafios do mercado com resiliência e clareza.
              </p>
              <a 
                href="#contato"
                className="inline-block bg-accent text-secondary px-8 py-3.5 rounded-full font-medium hover:bg-accent-dark transition-colors text-sm"
              >
                Agendar uma consulta
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
