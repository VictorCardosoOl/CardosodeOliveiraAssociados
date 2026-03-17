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
    
    gsap.fromTo(elements, 
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.05,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        }
      }
    );

    gsap.fromTo('.services-sidebar',
      { x: 20, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section id="servicos" ref={containerRef} className="py-24 2xl:py-32 bg-secondary text-primary border-t border-primary/20">
      <div className="container mx-auto px-6 md:px-12 3xl:px-24">
        
        <div className="grid lg:grid-cols-[1fr_350px] xl:grid-cols-[1fr_400px] gap-12 lg:gap-0">
          
          {/* Left Side: Services Grid */}
          <div className="grid md:grid-cols-2 relative lg:pr-12 xl:pr-20">
            {/* Vertical Divider for Desktop */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-primary/20 -translate-x-1/2"></div>
            
            {services.map((service, index) => (
              <div 
                key={index}
                className={cn(
                  "service-item py-10 md:py-14",
                  // Add padding right for left column, padding left for right column
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12",
                  // Add bottom border to all except the last row
                  index < services.length - 2 ? "border-b border-primary/20" : "",
                  // On mobile, add bottom border to the second to last item
                  index === services.length - 2 ? "border-b md:border-b-0 border-primary/20" : ""
                )}
              >
                <div className="flex items-start gap-6">
                  <service.icon className="w-10 h-10 text-primary shrink-0 mt-1" strokeWidth={1} />
                  <div>
                    <h3 className="text-2xl font-sans font-medium mb-4 leading-tight whitespace-pre-line">
                      {service.title}
                    </h3>
                    <p className="text-sm text-primary/70 leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Sidebar */}
          <div className="services-sidebar lg:border-l border-primary/20 lg:pl-12 xl:pl-20 pt-10 lg:pt-14">
            <div className="sticky top-32">
              <h2 className="text-3xl md:text-4xl font-sans font-medium mb-6">Nossa Atuação</h2>
              <p className="text-sm md:text-base text-primary/70 leading-relaxed mb-10 font-light">
                Oferecemos assessoria jurídica personalizada em um ambiente seguro e estratégico, especializando-nos em demandas corporativas complexas para ajudar sua empresa a navegar pelos desafios do mercado com resiliência e clareza.
              </p>
              <a 
                href="#contato"
                className="inline-block bg-[#6B7254] text-white px-8 py-3.5 rounded-full font-medium hover:bg-[#5a6146] transition-colors text-sm"
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
