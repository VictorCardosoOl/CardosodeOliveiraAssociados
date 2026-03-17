import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";

const cases = [
  {
    tags: ["Consultivo", "Preventivo"],
    title: "Assessoria Jurídica Empresarial",
    subtitle: "Acompanhamento próximo para estruturação e segurança do seu negócio.",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop",
    colSpan: "lg:col-span-8",
    bg: "bg-muted"
  },
  {
    tags: ["Contratos", "Negociações"],
    title: "Elaboração e Revisão de Contratos",
    subtitle: "Garantia de segurança jurídica em todas as suas relações comerciais.",
    image: "https://images.unsplash.com/photo-1505664173696-0746f4856282?q=80&w=800&auto=format&fit=crop",
    colSpan: "lg:col-span-4",
    bg: "bg-primary text-secondary"
  },
  {
    tags: ["Família", "Sucessões"],
    title: "Direito de Família e Sucessões",
    subtitle: "Atendimento humanizado e discreto para questões familiares complexas.",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=800&auto=format&fit=crop",
    colSpan: "lg:col-span-4",
    bg: "bg-muted"
  },
  {
    tags: ["Contencioso", "Estratégico"],
    title: "Contencioso Cível Estratégico",
    subtitle: "Defesa assertiva dos seus interesses em litígios de alta complexidade.",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop",
    colSpan: "lg:col-span-8",
    bg: "bg-muted"
  }
];

export function Expertise() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".case-elem",
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section id="areas-de-atuacao" ref={containerRef} className="min-h-screen flex flex-col justify-center py-24 2xl:py-48 3xl:py-64 bg-secondary">
      <div className="container">
        
        <div className="mb-16">
          <span className="case-elem text-xs uppercase tracking-[0.2em] font-bold text-primary/50 block mb-4">
            Áreas de Foco
          </span>
          <h2 className="case-elem font-serif text-4xl md:text-6xl text-primary leading-tight max-w-2xl font-medium">
            Soluções jurídicas <span className="italic">sob medida</span> para suas necessidades.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {cases.map((item, index) => (
            <div 
              key={index} 
              className={`case-elem group relative overflow-hidden rounded-[2rem] p-8 md:p-12 flex flex-col justify-between min-h-[400px] ${item.colSpan} ${item.bg}`}
            >
              {/* Background Image for some cards (optional, but let's keep it clean like the bento box) */}
              {item.bg === "bg-primary text-secondary" ? (
                <div className="absolute inset-0 opacity-10 mix-blend-overlay">
                  <img src={item.image} alt="" className="w-full h-full object-cover" loading="lazy" />
                </div>
              ) : null}

              <div className="relative z-10">
                <div className="flex flex-wrap gap-2 mb-8">
                  {item.tags.map(tag => (
                    <span 
                      key={tag} 
                      className={`text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full ${
                        item.bg === "bg-primary text-secondary" 
                          ? "bg-secondary/20 text-secondary" 
                          : "bg-secondary text-primary/70"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className={`font-serif text-3xl md:text-4xl leading-tight mb-4 font-medium ${
                  item.bg === "bg-primary text-secondary" ? "text-secondary" : "text-primary"
                }`}>
                  {item.title}
                </h3>
                <p className={`text-sm max-w-md font-light ${
                  item.bg === "bg-primary text-secondary" ? "text-secondary/70" : "text-primary/60"
                }`}>
                  {item.subtitle}
                </p>
              </div>

              <div className="relative z-10 mt-12 flex justify-end">
                <button className={`w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110 ${
                  item.bg === "bg-primary text-secondary" ? "bg-secondary text-primary" : "bg-primary text-secondary"
                }`}>
                  <ArrowRight size={20} strokeWidth={1.5} className="group-hover:-rotate-45 transition-transform duration-500" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
