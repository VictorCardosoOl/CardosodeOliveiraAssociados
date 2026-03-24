import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";

const cases = [
  {
    id: "1",
    title: "Assessoria Jurídica Empresarial",
    subtitle: "Acompanhamento próximo para estruturação e segurança do seu negócio.",
    content: "Nossa assessoria jurídica empresarial oferece um suporte completo e contínuo para empresas de todos os portes. Atuamos na estruturação societária, governança corporativa, compliance e gestão de riscos.\n\nNosso objetivo é garantir que sua empresa opere com máxima segurança jurídica, prevenindo litígios e otimizando processos internos. Elaboramos pareceres complexos, participamos de negociações estratégicas e oferecemos consultoria diária para as demandas do seu negócio, permitindo que você foque no crescimento da sua empresa com tranquilidade."
  },
  {
    id: "2",
    title: "Elaboração e Revisão de Contratos",
    subtitle: "Garantia de segurança jurídica em todas as suas relações comerciais.",
    content: "A elaboração e revisão de contratos é fundamental para a mitigação de riscos em qualquer operação comercial. Nossa equipe possui vasta experiência na redação de instrumentos contratuais complexos, nacionais e internacionais.\n\nAnalisamos minuciosamente cada cláusula para proteger seus interesses, assegurando clareza, validade jurídica e equilíbrio nas relações negociais. Atuamos em contratos de prestação de serviços, fornecimento, distribuição, franquia, acordos de confidencialidade (NDA), memorandos de entendimentos (MOU) e contratos de tecnologia."
  },
  {
    id: "3",
    title: "Direito de Família e Sucessões",
    subtitle: "Atendimento humanizado e discreto para questões familiares complexas.",
    content: "Compreendemos que as demandas de Direito de Família e Sucessões exigem não apenas excelência técnica, mas também extrema sensibilidade, discrição e empatia. Nosso escritório oferece um atendimento acolhedor e personalizado.\n\nAtuamos em divórcios, partilha de bens, guarda, pensão alimentícia, interdição e planejamento sucessório (testamentos, holdings familiares, doações). Buscamos sempre, quando possível, a resolução consensual dos conflitos, preservando as relações familiares e o patrimônio dos envolvidos."
  },
  {
    id: "4",
    title: "Contencioso Cível Estratégico",
    subtitle: "Defesa assertiva dos seus interesses em litígios de alta complexidade.",
    content: "No contencioso cível estratégico, atuamos de forma combativa e inteligente na defesa dos interesses de nossos clientes em processos judiciais e arbitrais de alta complexidade e relevância econômica.\n\nNossa abordagem envolve uma análise profunda do caso, mapeamento de riscos, definição da melhor estratégia processual e atuação incisiva em todas as instâncias, incluindo os Tribunais Superiores. Representamos empresas e indivíduos em disputas societárias, responsabilidade civil, recuperação de crédito, litígios imobiliários e conflitos contratuais."
  }
];

interface CardItemProps {
  item: typeof cases[0];
  isOpen: boolean;
  onClick: () => void;
}

const CardItem = ({ item, isOpen, onClick }: CardItemProps) => {
  return (
    <motion.div
      layout
      onClick={onClick}
      className="group cursor-pointer p-8 md:p-10 lg:p-12 bg-secondary border border-primary/10 hover:border-accent/30 rounded-xl transition-colors shadow-sm hover:shadow-md flex flex-col h-full"
    >
      <motion.div layout className="flex justify-between items-start gap-4">
        <div>
          <motion.h3 layout className="text-2xl md:text-3xl font-serif text-primary mb-3 group-hover:text-accent transition-colors">
            {item.title}
          </motion.h3>
          <motion.p layout className="text-primary/70 font-light text-base md:text-lg">
            {item.subtitle}
          </motion.p>
        </div>
        <motion.div
          layout
          className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-secondary transition-colors"
          animate={{ rotate: isOpen ? 45 : 0 }}
        >
          <Plus className="w-5 h-5" />
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-6 mt-6 border-t border-primary/10">
              <p className="text-primary/80 font-light leading-relaxed whitespace-pre-line text-base md:text-lg">
                {item.content}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export function Expertise() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <section id="areas-de-atuacao" className="py-[var(--spacing-section-y)] bg-muted">
      <div className="container">
        <div className="mb-16 md:mb-24">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-primary/50 block mb-4">
            Áreas de Foco
          </span>
          <h2 className="font-serif text-4xl md:text-6xl 3xl:text-8xl text-primary leading-tight max-w-4xl font-light">
            Soluções jurídicas <span className="italic">sob medida</span> para suas necessidades.
          </h2>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start">
          {cases.map((item) => (
            <CardItem 
              key={item.id} 
              item={item} 
              isOpen={selectedId === item.id}
              onClick={() => setSelectedId(selectedId === item.id ? null : item.id)} 
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
