import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import { X, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useSmoothScroll } from "@/context/SmoothScrollContext";

export const ContentModal = ({ isOpen, onClose, selectedItem }: any) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const modalContainerRef = useRef<HTMLDivElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [shouldRender, setShouldRender] = useState(isOpen);
  const { scroll } = useSmoothScroll();

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

      if (modalContainerRef.current) {
        modalContainerRef.current.scrollTo(0, 0);
      }

      // Focus trap
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
        if (e.key === 'Tab') {
          const focusableElements = modalRef.current?.querySelectorAll(
            'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
          );
          if (focusableElements && focusableElements.length > 0) {
            const firstElement = focusableElements[0] as HTMLElement;
            const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

            if (e.shiftKey) {
              if (document.activeElement === firstElement) {
                lastElement.focus();
                e.preventDefault();
              }
            } else {
              if (document.activeElement === lastElement) {
                firstElement.focus();
                e.preventDefault();
              }
            }
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      closeButtonRef.current?.focus();

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
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
  }, [isOpen, shouldRender, onClose]);

  if (!shouldRender || !selectedItem) return null;

  const isDark = selectedItem.theme === 'dark';

  const handleContactClick = () => {
    onClose();
    setTimeout(() => {
      if (scroll) {
        scroll.scrollTo('#contato');
      } else {
        const element = document.querySelector('#contato');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      
      // In a real app, you might use a state management solution or URL parameters 
      // to pre-fill the contact form subject based on selectedItem.title
      // For now, we just scroll to the contact section.
    }, 400); // Wait for modal to close
  };

  return createPortal(
    <div className="fixed inset-0 z-[9998] flex items-center justify-center" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div 
        ref={overlayRef}
        onClick={onClose} 
        className="absolute inset-0 bg-primary/40 backdrop-blur-sm" 
        aria-hidden="true"
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

                    <h2 id="modal-title" className="text-4xl md:text-6xl lg:text-7xl font-editorial uppercase tracking-tighter mb-8 md:mb-12 leading-[0.9]">
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

                    {/* CTA Button */}
                    <div className="mt-16 pt-12 border-t border-current/10">
                      <button 
                        onClick={handleContactClick}
                        className={`group inline-flex items-center gap-4 px-8 py-4 border transition-colors duration-500 ${
                          isDark 
                            ? 'border-secondary text-secondary hover:bg-secondary hover:text-primary' 
                            : 'border-primary text-primary hover:bg-primary hover:text-secondary'
                        }`}
                      >
                        <span className="micro-text">Falar sobre este caso</span>
                        <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" strokeWidth={1} />
                      </button>
                    </div>
                  </div>
                </div>
             </div>
          </div>
          
          {/* Botão Fechar Flutuante */}
          <button 
            ref={closeButtonRef}
            onClick={onClose} 
            aria-label="Fechar modal"
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
