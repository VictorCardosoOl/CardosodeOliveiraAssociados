import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from "motion/react";
import { createPortal } from "react-dom";
import Lenis from "lenis";
import { ArrowRight, X } from "lucide-react";

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
  key?: string | number;
}

const CardItem = ({ item, onClick, className }: CardItemProps) => {
  const isDark = item.theme === 'dark';
  
  return (
    <motion.div 
      layoutId={`modal-container-${item.id}`}
      onClick={onClick} 
      className={`group cursor-pointer flex flex-col justify-between p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] min-h-[400px] md:min-h-[480px] transition-transform hover:scale-[1.02] duration-300 ${
        isDark ? 'bg-[#2A2522] text-[#EAE8E0]' : 'bg-[#EAE8E0] text-[#2A2522]'
      } ${className || ''}`}
    >
      {/* Tags */}
      <div className="flex flex-wrap gap-2 md:gap-3 mb-8">
        {item.tags.map((tag: string, i: number) => (
          <span 
            key={i} 
            className={`text-[10px] md:text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full ${
              isDark ? 'bg-white/10 text-white/80' : 'bg-white/60 text-black/50'
            }`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Content */}
      <div className="mt-auto mb-8 md:mb-12">
        <motion.h3 layoutId={`title-${item.id}`} className="text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.1] mb-4 md:mb-6">
           {item.title}
        </motion.h3>
        <p className={`text-sm md:text-base leading-relaxed max-w-md font-light ${isDark ? 'text-white/70' : 'text-black/60'}`}>
          {item.subtitle}
        </p>
      </div>

      {/* Arrow Button */}
      <div className="flex justify-end">
        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 ${
          isDark ? 'bg-[#EAE8E0] text-[#2A2522]' : 'bg-[#2A2522] text-[#EAE8E0]'
        }`}>
          <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </motion.div>
  );
};

const ContentModal = ({ isOpen, onClose, children, layoutId }: any) => {
  const modalContainerRef = useRef<HTMLDivElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);
  const scopedLenisRef = useRef<any>(null);

  // Lógica de Scroll Isolado (Lenis)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Trava body
      
      // Inicia Lenis apenas no Modal após mount
      setTimeout(() => {
        if (modalContainerRef.current && modalContentRef.current) {
            const scopedLenis = new Lenis({
                wrapper: modalContainerRef.current,
                content: modalContentRef.current,
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Ease Out Quart
                orientation: 'vertical',
                gestureOrientation: 'vertical',
                touchMultiplier: 2,
            });
            scopedLenisRef.current = scopedLenis;
            
            function raf(time: number) {
                scopedLenis.raf(time);
                requestAnimationFrame(raf);
            }
            requestAnimationFrame(raf);
        }
      }, 300); // Delay para permitir animação de entrada
    } else {
      document.body.style.overflow = '';
      scopedLenisRef.current?.destroy();
    }
    return () => {
       document.body.style.overflow = '';
       scopedLenisRef.current?.destroy();
    };
  }, [isOpen]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div onClick={onClose} className="fixed inset-0 bg-black/90 z-[9998]" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} />
          
          <motion.div
            layoutId={layoutId ? `modal-container-${layoutId}` : undefined}
            initial={{ y: "100%" }}
            animate={{ y: "2%", transition: { type: "spring", damping: 30, stiffness: 300 } }}
            exit={{ y: "100%", transition: { duration: 0.4, ease: "easeInOut" } }} // Tween na saída
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            onDragEnd={(e, { offset, velocity }) => {
              if (offset.y > 100 || velocity.y > 500) {
                onClose();
              }
            }}
            className="fixed inset-0 z-[9999] bg-secondary rounded-t-[2rem] h-[98vh] shadow-2xl overflow-hidden"
          >
            {/* Container de Scroll para o Lenis */}
            <div ref={modalContainerRef} className="h-full w-full overflow-y-auto">
               <div ref={modalContentRef}>
                  {children}
               </div>
            </div>
            
            {/* Botão Fechar Flutuante */}
            <button onClick={onClose} className="absolute top-8 right-8 z-50 bg-primary text-secondary p-3 rounded-full hover:scale-110 transition-transform">
               <X />
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};

export function Expertise() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedItem = cases.find(c => c.id === selectedId);

  return (
    <section id="areas-de-atuacao" className="py-[var(--spacing-section-y)] bg-secondary">
      <div className="container">
        <div className="mb-16 md:mb-24">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-primary/50 block mb-4">
            Áreas de Foco
          </span>
          <h2 className="font-serif text-4xl md:text-6xl 3xl:text-8xl text-primary leading-tight max-w-4xl font-light">
            Soluções jurídicas <span className="italic">sob medida</span> para suas necessidades.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {cases.map((item) => (
            <CardItem 
              key={item.id} 
              item={item} 
              onClick={() => setSelectedId(item.id)} 
              className={item.colSpan}
            />
          ))}
        </div>
      </div>

      <ContentModal 
        isOpen={!!selectedId} 
        onClose={() => setSelectedId(null)}
        layoutId={selectedId}
      >
        {selectedItem && (
          <div className="pb-24">
            {/* Hero Section */}
            <div className="w-full h-[50vh] md:h-[60vh] relative">
              <motion.img 
                layoutId={`image-${selectedItem.id}`}
                src={selectedItem.image}
                className="w-full h-full object-cover"
                alt={selectedItem.title}
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
            
            <div className="container mt-12 md:mt-20 max-w-4xl mx-auto px-6">
              <motion.h2 
                layoutId={`title-${selectedItem.id}`}
                className="text-4xl md:text-6xl font-serif text-primary mb-8"
              >
                {selectedItem.title}
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="prose prose-lg max-w-none text-primary/80 font-light"
              >
                <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                  {selectedItem.subtitle}
                </p>
                <p>
                  {selectedItem.content}
                </p>
                <p className="mt-6">
                  Nossa abordagem é estratégica e focada em resultados. Analisamos cada detalhe do seu caso para construir a melhor tese jurídica, sempre com transparência e proximidade.
                </p>
              </motion.div>
            </div>
          </div>
        )}
      </ContentModal>
    </section>
  );
}
