import { useRef } from "react";
import { usePremiumAnimation } from "@/hooks/usePremiumAnimation";
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

  usePremiumAnimation(containerRef);

  return (
    <section id="responsabilidade-social" className="flex items-center py-[var(--spacing-section-y)] bg-secondary text-primary overflow-hidden">
      <div className="container" ref={containerRef}>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-primary/20 text-primary px-6 py-2 micro-text mb-12 w-fit">
              <span>Responsabilidade Social</span>
            </div>
            <h3 className="anim-title font-editorial text-[clamp(3rem,5vw,5rem)] leading-[0.85] tracking-tighter uppercase">
              Nosso compromisso vai <br/><span className="italic text-accent">além do escritório</span>.
            </h3>
          </div>
          <p className="text-lg text-primary/70 max-w-sm leading-relaxed font-light pb-4">
            Acreditamos no poder transformador do direito como ferramenta de impacto social e equidade.
          </p>
        </div>

        <div className="anim-stagger-container grid md:grid-cols-3 gap-px bg-primary/10 border border-primary/10">
          {initiatives.map((item, index) => (
            <div 
              key={index} 
              className="anim-stagger-item group p-10 md:p-12 bg-secondary hover:bg-primary transition-colors duration-500"
            >
              <div className="w-16 h-16 border border-primary/20 flex items-center justify-center mb-12 group-hover:border-secondary/20 transition-colors duration-500">
                <item.icon className="w-6 h-6 text-primary group-hover:text-secondary transition-colors duration-500" strokeWidth={1} />
              </div>
              <h4 className="font-editorial text-3xl uppercase tracking-tighter text-primary mb-4 group-hover:text-secondary transition-colors duration-500">{item.title}</h4>
              <p className="text-sm text-primary/70 leading-relaxed font-light group-hover:text-secondary/70 transition-colors duration-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
