import { useRef } from "react";
import { ArrowRight, Calendar } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
    const elements = gsap.utils.toArray('.anim-element');
    
    gsap.fromTo(elements, 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section id="insights" ref={containerRef} className="flex items-center py-[var(--spacing-section-y)] bg-secondary overflow-hidden border-t border-primary/10">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="anim-element micro-text text-muted mb-6">Insights</h2>
            <h3 className="anim-element font-editorial text-[var(--text-fluid-h2)] text-primary leading-[0.85] tracking-tighter uppercase">
              Conhecimento que <br/><span className="italic text-accent">protege e orienta</span>.
            </h3>
          </div>
          <button className="group flex items-center gap-3 text-primary hover:text-accent transition-colors duration-300">
            <span className="micro-text">Ver todos os artigos</span>
            <ArrowRight size={16} strokeWidth={1} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {articles.map((article, i) => (
            <div key={i} className="anim-element group cursor-pointer flex flex-col">
              <div className="relative aspect-[4/5] overflow-hidden mb-8 border border-primary/10">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-accent/5 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0" />
                <div className="absolute top-6 left-6 bg-secondary px-4 py-2 border border-primary/10">
                  <span className="micro-text text-primary">{article.category}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-muted micro-text mb-4">
                <Calendar size={12} strokeWidth={1} />
                <span>{article.date}</span>
              </div>
              <h4 className="font-editorial text-2xl lg:text-3xl text-primary mb-6 leading-tight uppercase tracking-tighter group-hover:text-accent transition-colors duration-300">
                {article.title}
              </h4>
              <div className="flex items-center gap-2 text-accent mt-auto opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0">
                <span className="micro-text">Ler Artigo</span>
                <ArrowRight size={14} strokeWidth={1} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
