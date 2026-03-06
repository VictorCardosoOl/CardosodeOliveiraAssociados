import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Scale, ShieldCheck, Users, Briefcase } from "lucide-react";

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
    <section id="areas-de-atuacao" ref={containerRef} className="py-24 md:py-32 bg-primary text-secondary">
      <div className="container mx-auto px-6 md:px-12">
        <div className="expertise-header max-w-3xl mb-16 md:mb-24">
          <h2 className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-4">Nossa Expertise</h2>
          <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
            Especialistas em proteger o seu patrimônio e os seus direitos.
          </h3>
        </div>

        <div className="expertise-grid grid md:grid-cols-2 gap-8 md:gap-12">
          {areas.map((area, index) => (
            <div 
              key={index} 
              className="expertise-card group border border-secondary/20 p-8 md:p-12 rounded-2xl hover:bg-secondary/5 transition-colors duration-500"
            >
              <area.icon className="w-12 h-12 text-accent mb-8 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
              <h4 className="font-serif text-2xl mb-4">{area.title}</h4>
              <p className="text-secondary/70 leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
