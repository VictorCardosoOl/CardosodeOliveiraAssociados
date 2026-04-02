import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, X } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

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

interface CardItemProps {
  item: any;
  onClick: () => void;
  className?: string;
}

const CardItem = ({ item, onClick, className }: CardItemProps) => {
  const isDark = item.theme === 'dark';
  
  return (
    <div 
      onClick={onClick} 
      className={`group cursor-pointer flex flex-col justify-between p-8 md:p-12 min-h-[400px] md:min-h-[480px] border transition-transform duration-500 hover:scale-[0.98] ${
        isDark ? 'bg-primary text-secondary border-primary' : 'bg-secondary text-primary border-primary/10'
      } ${className || ''}`}
    >
      {/* Tags */}
      <div className="flex flex-wrap gap-2 md:gap-3 mb-8">
        {item.tags.map((tag: string, i: number) => (
          <span 
            key={i} 
            className={`micro-text px-4 py-2 border ${
              isDark ? 'border-secondary/20 text-secondary/80' : 'border-primary/20 text-primary/70'
            }`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Content */}
      <div className="mt-auto mb-8 md:mb-12">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-editorial uppercase tracking-tighter leading-[0.9] mb-4 md:mb-6">
           {item.title}
        </h3>
        <p className={`micro-text normal-case tracking-normal leading-relaxed max-w-md lg:max-w-lg 2xl:max-w-xl ${isDark ? 'text-secondary/70' : 'text-muted'}`}>
          {item.subtitle}
        </p>
      </div>

      {/* Arrow Button */}
      <div className="flex justify-end">
        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 ${
          isDark ? 'bg-secondary text-primary' : 'bg-primary text-secondary'
        }`}>
          <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform duration-300" strokeWidth={1} />
        </div>
      </div>
    </div>
  );
};

const ContentModal = ({ isOpen, onClose, selectedItem }: any) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const modalContainerRef = useRef<HTMLDivElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(isOpen);

  useLayoutEffect(() => {
    if (isOpen) {
      setShouldRender(true);
    }
  }, [isOpen]);

  useEffect(() => {
    if (shouldRender && isOpen) {
      document.body.style.overflow = 'hidden';
      
      const tl = gsap.timeline();
      tl.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "power2.out" })
        .fromTo(modalRef.current, 
          { y: 100, opacity: 0, scale: 0.95 }, 
          { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "expo.out" }, 
          "-=0.3"
        );

      // Modal Scroll Setup (Native)
      if (modalContainerRef.current) {
        modalContainerRef.current.scrollTo(0, 0);
      }

      return () => {
        // Cleanup if needed
      };
    } else if (shouldRender && !isOpen) {
      const tl = gsap.timeline({
        onComplete: () => {
          setShouldRender(false);
          document.body.style.overflow = '';
        }
      });
      
      tl.to(modalRef.current, { y: 50, opacity: 0, scale: 0.98, duration: 0.4, ease: "power2.in" })
        .to(overlayRef.current, { opacity: 0, duration: 0.3 }, "-=0.2");
    }
  }, [isOpen, shouldRender]);

  if (!shouldRender || !selectedItem) return null;

  const isDark = selectedItem.theme === 'dark';

  return createPortal(
    <div className="fixed inset-0 z-[9998] flex items-center justify-center">
      <div 
        ref={overlayRef}
        onClick={onClose} 
        className="absolute inset-0 bg-primary/40 backdrop-blur-sm" 
      />
      
      <div className="relative z-[9999] w-full h-full md:w-[90vw] md:h-[90vh] pointer-events-none flex items-center justify-center">
        <div
          ref={modalRef}
          className={`pointer-events-auto w-full h-full shadow-2xl overflow-hidden flex flex-col relative ${
            isDark ? 'bg-primary text-secondary' : 'bg-secondary text-primary'
          }`}
        >
          {/* Modal Scroll Container */}
          <div ref={modalContainerRef} className="h-full w-full overflow-y-auto">
             <div ref={modalContentRef} className="min-h-full flex flex-col">
                <div className="p-8 md:p-16 lg:p-24 flex-1 flex flex-col">
                  <div className="max-w-4xl 2xl:max-w-5xl 3xl:max-w-6xl mx-auto w-full mt-12 md:mt-0">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-12">
                      {selectedItem.tags.map((tag: string, i: number) => (
                        <span 
                          key={i} 
                          className={`micro-text px-4 py-2 border ${
                            isDark ? 'border-secondary/20 text-secondary/80' : 'border-primary/20 text-primary/70'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-editorial uppercase tracking-tighter mb-8 md:mb-12 leading-[0.9]">
                      {selectedItem.title}
                    </h2>
                    
                    <div className={`prose prose-lg md:prose-xl max-w-none font-sans font-light ${
                        isDark ? 'text-secondary/70' : 'text-primary/70'
                      }`}
                    >
                      <p className="text-2xl md:text-3xl mb-12 leading-relaxed font-editorial italic">
                        {selectedItem.subtitle}
                      </p>
                      <p className="text-base md:text-lg leading-relaxed">
                        {selectedItem.content}
                      </p>
                      <p className="mt-8 text-base md:text-lg leading-relaxed">
                        Nossa abordagem é estratégica e focada em resultados. Analisamos cada detalhe do seu caso para construir a melhor tese jurídica, sempre com transparência e proximidade.
                      </p>
                    </div>
                  </div>
                </div>
             </div>
          </div>
          
          {/* Botão Fechar Flutuante */}
          <button 
            onClick={onClose} 
            className={`absolute top-6 right-6 md:top-10 md:right-10 z-50 p-3 md:p-4 rounded-full hover:scale-110 transition-transform ${
              isDark ? 'bg-secondary text-primary' : 'bg-primary text-secondary'
            }`}
          >
             <X size={24} strokeWidth={1} />
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

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

      <ContentModal 
        isOpen={!!selectedId}
        onClose={() => setSelectedId(null)}
        selectedItem={selectedItem}
      />
    </section>
  );
}
