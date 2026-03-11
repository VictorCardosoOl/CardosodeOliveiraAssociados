import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Scale, ShieldCheck, Users, Briefcase, ArrowRight } from "lucide-react";

const areas = [
  {
    title: "Direito Civil",
    description: "Atuação estratégica em litígios complexos, contratos e responsabilidade civil, sempre buscando a melhor resolução para nossos clientes.",
    icon: Scale,
  },
  {
    title: "Direito Fiduciário",
    description: "Assessoria especializada em estruturação patrimonial, fundos e garantias fiduciárias com máxima segurança jurídica.",
    icon: ShieldCheck,
  },
  {
    title: "Direito de Família",
    description: "Acolhimento e firmeza em divórcios, pensão alimentícia, guarda e inventários, priorizando o bem-estar familiar.",
    icon: Users,
  },
  {
    title: "Consultoria Preventiva",
    description: "Análise de riscos e estruturação de negócios para evitar litígios futuros e garantir a solidez das suas decisões.",
    icon: Briefcase,
  },
];

export function Expertise() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".expertise-card");
    
    gsap.fromTo(
      ".expertise-header",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      cards,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".expertise-grid",
          start: "top 85%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section id="areas-de-atuacao" ref={containerRef} className="py-24 md:py-40 bg-primary text-secondary overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="expertise-header flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="max-w-3xl">
            <h2 className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-4">Nossa Expertise</h2>
            <h3 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight">
              Proteção patrimonial e <span className="italic">segurança jurídica</span>.
            </h3>
          </div>
          <p className="text-secondary/40 max-w-xs text-sm leading-relaxed">
            Soluções estratégicas desenhadas sob medida para as necessidades mais complexas do direito contemporâneo.
          </p>
        </div>

        <div className="expertise-grid grid md:grid-cols-2 gap-6 md:gap-8">
          {areas.map((area, index) => (
            <div 
              key={index} 
              className="expertise-card group relative bg-secondary/5 p-10 md:p-16 rounded-[3rem] border border-secondary/10 hover:border-accent/30 transition-all duration-700 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-accent/10 transition-colors duration-700" />
              
              <div className="relative z-10">
                <div className="bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-accent group-hover:rotate-6 transition-all duration-500">
                  <area.icon className="w-8 h-8 text-accent group-hover:text-primary transition-colors duration-500" strokeWidth={1.5} />
                </div>
                <h4 className="font-serif text-3xl mb-6 group-hover:text-accent transition-colors duration-300">{area.title}</h4>
                <p className="text-secondary/60 leading-relaxed text-lg font-light">
                  {area.description}
                </p>
                
                <div className="mt-12 flex items-center gap-3 text-accent opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0">
                  <span className="text-[10px] uppercase tracking-widest font-bold">Saiba mais</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
