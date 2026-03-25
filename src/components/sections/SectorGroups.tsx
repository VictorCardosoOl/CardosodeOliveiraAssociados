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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl 3xl:max-w-4xl">
            <h2 className="anim-title text-accent uppercase tracking-[0.2em] text-sm md:text-base font-bold mb-4">Grupos Setoriais</h2>
            <h3 className="font-serif text-5xl md:text-6xl lg:text-7xl 3xl:text-8xl 4xl:text-9xl text-primary leading-[0.9] tracking-tighter font-medium">
              Expertise em <br/><span className="italic text-primary/80">mercados estratégicos</span>.
            </h3>
          </div>
          <p className="text-primary/60 max-w-xs 3xl:max-w-md text-sm md:text-base 3xl:text-xl leading-relaxed font-light">
            Nossa atuação é segmentada por setores para garantir um entendimento profundo das dinâmicas de cada negócio.
          </p>
        </div>

        <div className="anim-stagger-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 3xl:gap-10">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="anim-stagger-item group flex flex-col items-start p-10 md:p-12 3xl:p-16 bg-secondary rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-primary/5"
            >
              <div className="w-16 h-16 3xl:w-24 3xl:h-24 bg-muted rounded-full flex items-center justify-center mb-8 3xl:mb-12 group-hover:bg-primary transition-colors duration-500">
                <sector.icon className="w-7 h-7 3xl:w-10 3xl:h-10 text-primary group-hover:text-secondary transition-colors duration-500" strokeWidth={1} />
              </div>
              <span className="font-serif text-2xl md:text-3xl 3xl:text-5xl font-medium text-primary mb-4 group-hover:text-accent transition-colors">
                {sector.name}
              </span>
              <p className="text-sm 3xl:text-lg text-primary/60 leading-relaxed font-light max-w-xs 3xl:max-w-md">
                {sector.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
