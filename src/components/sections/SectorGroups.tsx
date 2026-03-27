import { useRef } from "react";
import { usePremiumAnimation } from "@/hooks/usePremiumAnimation";
import { Car, Leaf, Building2, Zap, HeartPulse, Landmark } from "lucide-react";

const sectors = [
  { name: "Automotivo", icon: Car, desc: "Inovação e conformidade regulatória para montadoras e fornecedores." },
  { name: "Bioenergia", icon: Leaf, desc: "Sustentabilidade, transição energética e regulação ambiental." },
  { name: "Imobiliário", icon: Building2, desc: "Estruturação de grandes empreendimentos e fundos imobiliários." },
  { name: "Energia", icon: Zap, desc: "Regulação, contratos complexos e leilões no setor elétrico." },
  { name: "Saúde", icon: HeartPulse, desc: "Compliance, ANS e fusões no setor de saúde e farmacêutico." },
  { name: "Bancário", icon: Landmark, desc: "Operações financeiras, fintechs e mercado de capitais." },
];

export function SectorGroups() {
  const containerRef = useRef<HTMLDivElement>(null);

  usePremiumAnimation(containerRef);

  return (
    <section id="setores" className="py-[var(--spacing-section-y)] bg-muted overflow-hidden">
      <div className="container" ref={containerRef}>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-primary/20 text-primary px-6 py-2 micro-text mb-12 w-fit">
              <span>Grupos Setoriais</span>
            </div>
            <h3 className="anim-title font-editorial text-[clamp(3rem,5vw,5rem)] leading-[0.85] tracking-tighter uppercase">
              Expertise em <br/><span className="italic text-accent">mercados estratégicos</span>.
            </h3>
          </div>
          <p className="text-lg text-primary/70 max-w-sm leading-relaxed font-light pb-4">
            Nossa atuação é segmentada por setores para garantir um entendimento profundo das dinâmicas de cada negócio.
          </p>
        </div>

        <div className="anim-stagger-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-primary/10 border border-primary/10">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="anim-stagger-item group flex flex-col items-start p-10 md:p-12 bg-secondary hover:bg-primary transition-colors duration-500"
            >
              <div className="w-16 h-16 border border-primary/20 flex items-center justify-center mb-12 group-hover:border-secondary/20 transition-colors duration-500">
                <sector.icon className="w-6 h-6 text-primary group-hover:text-secondary transition-colors duration-500" strokeWidth={1} />
              </div>
              <span className="font-editorial text-3xl uppercase tracking-tighter text-primary mb-4 group-hover:text-secondary transition-colors duration-500">
                {sector.name}
              </span>
              <p className="text-sm text-primary/70 leading-relaxed font-light group-hover:text-secondary/70 transition-colors duration-500">
                {sector.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
