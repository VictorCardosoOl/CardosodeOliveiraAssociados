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
        duration: 0.8,
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
    <section id="setores" className="py-24 bg-secondary">
      <div className="container mx-auto px-6 md:px-12" ref={containerRef}>
        <div className="mb-16">
          <h2 className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-4">Grupos Setoriais</h2>
          <h3 className="font-serif text-4xl md:text-5xl text-primary max-w-2xl">
            Conhecimento profundo dos mercados em que nossos clientes atuam.
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="sector-item group flex flex-col items-center justify-center p-8 bg-white border border-primary/5 rounded-xl hover:border-accent/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
            >
              <sector.icon className="w-10 h-10 text-accent mb-4 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.2} />
              <span className="text-sm font-medium tracking-wide text-primary/80 group-hover:text-primary transition-colors">
                {sector.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
