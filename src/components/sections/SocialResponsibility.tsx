import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Heart, Users2, ShieldAlert } from "lucide-react";

const initiatives = [
  {
    title: "Apoio a Mulheres",
    description: "Consultoria jurídica gratuita para mulheres em situação de vulnerabilidade, garantindo acesso à justiça e proteção de direitos.",
    icon: Heart,
  },
  {
    title: "Mentoria Jurídica",
    description: "Programa de mentoria para jovens advogadas, fortalecendo a presença feminina no mercado jurídico e em cargos de liderança.",
    icon: Users2,
  },
  {
    title: "Combate à Violência",
    description: "Ações pro bono focadas na proteção de vítimas de violência doméstica e familiar, oferecendo suporte jurídico integral.",
    icon: ShieldAlert,
  },
];

export function SocialResponsibility() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".initiative-card",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section id="responsabilidade-social" className="flex items-center py-[var(--spacing-section-y)] bg-secondary text-primary overflow-hidden">
      <div className="container" ref={containerRef}>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-[var(--spacing-gap)]">
          <div className="max-w-3xl 3xl:max-w-4xl">
            <h2 className="text-accent uppercase tracking-[0.2em] text-[clamp(0.75rem,1vw,0.875rem)] font-bold mb-4">Responsabilidade Social</h2>
            <h3 className="font-serif text-[var(--text-fluid-h2)] leading-[0.9] tracking-tighter font-medium">
              Nosso compromisso vai <br/><span className="italic text-primary/80">além do escritório</span>.
            </h3>
          </div>
          <p className="text-primary/60 max-w-xs text-[var(--text-fluid-p)] leading-relaxed font-light">
            Acreditamos no poder transformador do direito como ferramenta de impacto social e equidade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 3xl:gap-12">
          {initiatives.map((item, index) => (
            <div 
              key={index} 
              className="initiative-card group p-10 md:p-12 bg-muted border border-primary/5 hover:border-accent/30 transition-all duration-500 hover:-translate-y-2 rounded-[3rem] rounded-tl-3xl"
            >
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-8 group-hover:bg-accent transition-colors duration-500">
                <item.icon className="w-7 h-7 text-accent group-hover:text-secondary transition-colors duration-500" strokeWidth={1} />
              </div>
              <h4 className="font-serif text-[var(--text-fluid-h3)] mb-4 font-medium">{item.title}</h4>
              <p className="text-primary/60 leading-relaxed font-light text-[var(--text-fluid-p)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
