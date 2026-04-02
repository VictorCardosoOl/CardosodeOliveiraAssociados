import { useState, useRef, lazy, Suspense } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { CardItem } from "../ui/CardItem";

const ContentModal = lazy(() => import('../ui/ContentModal').then(module => ({ default: module.ContentModal })));

gsap.registerPlugin(ScrollTrigger);

const cases = [
  {
    id: "1",
    title: "Assessoria Jurídica Empresarial",
    subtitle: "Acompanhamento próximo para estruturação e segurança do seu negócio.",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop",
    content: "Detalhes completos sobre a Assessoria Jurídica Empresarial...",
    tags: ["Consultivo", "Preventivo"],
    theme: "light",
    colSpan: "md:col-span-12 lg:col-span-8"
  },
  {
    id: "2",
    title: "Elaboração e Revisão de Contratos",
    subtitle: "Garantia de segurança jurídica em todas as suas relações comerciais.",
    image: "https://images.unsplash.com/photo-1505664173696-0746f4856282?q=80&w=800&auto=format&fit=crop",
    content: "Detalhes completos sobre a Elaboração e Revisão de Contratos...",
    tags: ["Contratos", "Negociações"],
    theme: "dark",
    colSpan: "md:col-span-12 lg:col-span-4"
  },
  {
    id: "3",
    title: "Direito de Família e Sucessões",
    subtitle: "Atendimento humanizado e discreto para questões familiares complexas.",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=800&auto=format&fit=crop",
    content: "Detalhes completos sobre Direito de Família e Sucessões...",
    tags: ["Família", "Sucessões"],
    theme: "light",
    colSpan: "md:col-span-12 lg:col-span-4"
  },
  {
    id: "4",
    title: "Contencioso Cível Estratégico",
    subtitle: "Defesa assertiva dos seus interesses em litígios de alta complexidade.",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop",
    content: "Detalhes completos sobre o Contencioso Cível Estratégico...",
    tags: ["Contencioso", "Estratégico"],
    theme: "light",
    colSpan: "md:col-span-12 lg:col-span-8"
  }
];

export function AreasDeAtuacao() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedItem = cases.find(c => c.id === selectedId);
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const elements = gsap.utils.toArray('.anim-element');
    
    elements.forEach((el: any) => {
      if (!el) return;
      gsap.fromTo(el, 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          }
        }
      );
    });
  }, { scope: sectionRef });

  return (
    <section data-scroll-section id="areas-de-atuacao" ref={sectionRef} className="py-[var(--spacing-section-y)] bg-secondary border-t border-primary/10">
      <div className="container">
        <div className="mb-16 md:mb-24">
          <span className="anim-element micro-text text-muted block mb-6">
            Áreas de Foco
          </span>
          <h2 className="anim-element text-[var(--text-fluid-h2)] font-editorial leading-[0.85] tracking-tighter uppercase max-w-4xl 2xl:max-w-6xl 3xl:max-w-7xl">
            Soluções jurídicas<br/>
            <span className="italic text-accent">sob medida</span> para suas necessidades.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {cases.map((item) => (
            <div key={item.id} className={`anim-element ${item.colSpan}`}>
              <CardItem 
                item={item} 
                onClick={() => setSelectedId(item.id)} 
                className="h-full"
              />
            </div>
          ))}
        </div>
      </div>

      <Suspense fallback={null}>
        <ContentModal 
          isOpen={!!selectedId}
          onClose={() => setSelectedId(null)}
          selectedItem={selectedItem}
        />
      </Suspense>
    </section>
  );
}
