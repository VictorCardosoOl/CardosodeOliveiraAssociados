import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Car, Leaf, Building2, Zap, HeartPulse, Landmark } from "lucide-react";

const sectors = [
  { name: "Automotivo", icon: Car },
  { name: "Bioenergia", icon: Leaf },
  { name: "Imobiliário", icon: Building2 },
  { name: "Energia", icon: Zap },
  { name: "Saúde", icon: HeartPulse },
  { name: "Bancário", icon: Landmark },
];

export function SectorGroups() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".sector-item",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section id="setores" className="min-h-screen flex items-center py-24 bg-muted overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 3xl:px-24" ref={containerRef}>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl 3xl:max-w-4xl">
            <h2 className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-4">Grupos Setoriais</h2>
            <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl 3xl:text-7xl text-primary leading-tight">
              Expertise em <span className="italic">mercados estratégicos</span>.
            </h3>
          </div>
          <p className="text-primary/60 max-w-xs text-sm leading-relaxed">
            Nossa atuação é segmentada por setores para garantir um entendimento profundo das dinâmicas de cada negócio.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 3xl:gap-10">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="sector-item group flex flex-col items-center justify-center p-10 bg-secondary border border-primary/5 hover:border-accent/30 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-muted flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors duration-500">
                <sector.icon className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-500" strokeWidth={1.2} />
              </div>
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-primary/60 group-hover:text-primary transition-colors">
                {sector.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
