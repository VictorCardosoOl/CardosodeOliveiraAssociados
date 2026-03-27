import { usePremiumAnimation } from "@/hooks/usePremiumAnimation";
import { useState, useRef } from 'react';
import { Plus } from 'lucide-react';

const FAQ_ITEMS = [
  { 
    id: 1, 
    question: "Como funciona a primeira consulta?", 
    answer: "A primeira consulta é um momento de escuta ativa e análise estratégica. Entendemos a fundo o seu cenário, identificamos os riscos e oportunidades, e desenhamos um plano de ação preliminar. É uma reunião focada em trazer clareza e direcionamento." 
  },
  { 
    id: 2, 
    question: "Quais áreas do direito vocês atendem?", 
    answer: "Nossa expertise abrange o Direito Empresarial (consultivo e contratos), Direito de Família e Sucessões, e Contencioso Cível Estratégico. Atuamos em demandas complexas que exigem alta especialização e visão de negócios." 
  },
  { 
    id: 3, 
    question: "Como é cobrado o valor dos honorários?", 
    answer: "Trabalhamos com total transparência. Os honorários são definidos após a análise do caso, considerando a complexidade, o tempo estimado e o valor envolvido. Oferecemos propostas personalizadas que alinham nossos interesses aos resultados do cliente." 
  },
  { 
    id: 4, 
    question: "Vocês atendem clientes de outros estados?", 
    answer: "Sim. Nossa estrutura tecnológica nos permite atender clientes em todo o Brasil e no exterior com a mesma proximidade e eficiência de um atendimento presencial, através de reuniões virtuais e gestão digital de processos." 
  },
  { 
    id: 5, 
    question: "Qual o diferencial de um escritório feminino?", 
    answer: "Combinamos o rigor técnico e a agressividade estratégica necessários no direito com uma sensibilidade aguçada para negociações e resolução de conflitos. Nossa liderança feminina traz uma perspectiva inovadora, focada em eficiência, empatia e resultados sustentáveis." 
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  usePremiumAnimation(containerRef);

  return (
    <section id="faq" ref={containerRef} className="py-[var(--spacing-section-y)] bg-secondary text-primary border-t border-primary/10">
      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        
        {/* COLUNA ESQUERDA (Sticky) */}
        <div className="lg:col-span-4 relative">
          <div className="anim-fade-up lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2 border border-primary/20 text-primary px-6 py-2 micro-text mb-12 w-fit">
              <span>Suporte</span>
            </div>
            <h2 className="anim-title font-editorial text-[clamp(3rem,5vw,5rem)] leading-[0.85] tracking-tighter uppercase mb-8">
              Dúvidas <br/> <span className="italic text-accent">Frequentes</span>
            </h2>
            <p className="text-lg text-primary/70 font-light max-w-sm mb-12 leading-relaxed">
              Encontre respostas para as principais dúvidas sobre nossa forma de atuação e contratação.
            </p>
            <a 
              href="#contato"
              className="inline-flex items-center justify-center gap-2 border border-primary text-primary px-8 py-4 micro-text hover:bg-primary hover:text-secondary transition-all duration-500"
            >
              Falar com Especialista
            </a>
          </div>
        </div>

        {/* COLUNA DIREITA (Lista) */}
        <div className="lg:col-span-8 mt-12 lg:mt-0">
          <div className="anim-stagger-container border-t border-primary/10">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={item.id} className="anim-stagger-item border-b border-primary/10">
                  <button 
                    onClick={() => toggleItem(idx)}
                    className="w-full py-8 md:py-10 flex justify-between items-center text-left group"
                    aria-expanded={isOpen}
                  >
                    <h3 className={`font-editorial text-2xl md:text-3xl lg:text-4xl uppercase tracking-tighter transition-all duration-500 pr-8 ${
                      isOpen ? 'translate-x-4 text-accent' : 'text-primary/80 group-hover:text-primary'
                    }`}>
                      {item.question}
                    </h3>
                    <div className={`flex-shrink-0 w-12 h-12 border flex items-center justify-center transition-all duration-500 ${
                      isOpen ? 'bg-accent text-secondary rotate-45 border-accent' : 'border-primary/20 text-primary group-hover:border-primary'
                    }`}>
                      <Plus size={20} strokeWidth={1} />
                    </div>
                  </button>
                  
                  {/* Área de Resposta (Expandable using CSS Grid) */}
                  <div 
                    className="grid transition-all duration-500 ease-in-out"
                    style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                  >
                    <div className="overflow-hidden">
                      <p className={`text-lg text-primary/70 font-light max-w-2xl leading-relaxed pb-10 transition-all duration-500 delay-100 ${
                        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}>
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
