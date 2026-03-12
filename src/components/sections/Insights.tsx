import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight, Calendar } from "lucide-react";

const articles = [
  {
    title: "A Importância do Planejamento Fiduciário na Proteção Patrimonial",
    category: "Direito Fiduciário",
    date: "10 Mar 2026",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Novas Tendências no Direito Civil e a Responsabilidade Digital",
    category: "Direito Civil",
    date: "05 Mar 2026",
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Mediação de Conflitos Familiares: Uma Abordagem Humanizada",
    category: "Direito de Família",
    date: "28 Fev 2026",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop",
  },
];

export function Insights() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".insight-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section id="insights" ref={containerRef} className="py-24 md:py-40 3xl:py-64 bg-muted overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 3xl:px-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl 3xl:max-w-4xl">
            <h2 className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-4">Insights</h2>
            <h3 className="font-serif text-4xl md:text-6xl 3xl:text-7xl text-primary leading-tight">
              Conhecimento que <span className="italic">protege</span> e orienta.
            </h3>
          </div>
          <button className="group flex items-center gap-3 text-primary hover:text-accent transition-colors duration-300">
            <span className="text-xs uppercase tracking-widest font-bold">Ver todos os artigos</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-12 3xl:gap-20">
          {articles.map((article, i) => (
            <div key={i} className="insight-card group cursor-pointer">
              <div className="relative aspect-[16/10] overflow-hidden mb-8">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 bg-secondary/90 backdrop-blur-md px-4 py-2">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-primary">{article.category}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-primary/50 text-[10px] uppercase tracking-widest font-bold mb-4">
                <Calendar size={12} />
                <span>{article.date}</span>
              </div>
              <h4 className="font-serif text-2xl text-primary mb-6 leading-tight group-hover:text-accent transition-colors duration-300">
                {article.title}
              </h4>
              <div className="flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0">
                <span className="text-[10px] uppercase tracking-widest font-bold">Ler Artigo</span>
                <ArrowRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
