import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";

const cases = [
  {
    tags: ["Consultivo", "Preventivo"],
    title: "Assessoria Jurídica Empresarial",
    subtitle: "Acompanhamento próximo para estruturação e segurança do seu negócio.",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop"
  },
  {
    tags: ["Contratos", "Negociações"],
    title: "Elaboração e Revisão de Contratos",
    subtitle: "Garantia de segurança jurídica em todas as suas relações comerciais.",
    image: "https://images.unsplash.com/photo-1505664173696-0746f4856282?q=80&w=800&auto=format&fit=crop"
  }
];

export function Expertise() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".case-elem",
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
    <section id="areas-de-atuacao" ref={containerRef} className="min-h-screen flex items-center py-24 bg-secondary">
      <div className="container mx-auto px-6 md:px-12 3xl:px-24 grid lg:grid-cols-12 gap-12 lg:gap-24">
        
        {/* Left Column */}
        <div className="lg:col-span-4">
          <span className="case-elem text-xs uppercase tracking-[0.2em] font-semibold text-primary/50">
            Áreas de Foco
          </span>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-8 flex flex-col gap-16">
          {cases.map((item, index) => (
            <div key={index} className="case-elem group flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-1/3 aspect-square overflow-hidden bg-muted">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="w-full md:w-2/3 flex flex-col pt-2 h-full">
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider font-medium bg-muted px-2 py-1 text-primary/70">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-primary leading-tight mb-4 group-hover:text-primary/70 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-primary/50 mb-8">
                  {item.subtitle}
                </p>
                <button className="mt-auto self-start bg-primary text-secondary w-10 h-10 flex items-center justify-center hover:bg-primary/80 transition-colors">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
