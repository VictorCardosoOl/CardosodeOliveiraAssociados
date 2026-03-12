import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "A excelência técnica aliada a um atendimento humano e acolhedor transformou nossa visão sobre o suporte jurídico. Elas não são apenas advogadas, são parceiras estratégicas.",
    author: "Helena Silveira",
    role: "CEO, TechFlow Solutions",
  },
  {
    quote: "O rigor fiduciário e a transparência em cada etapa do processo nos deram a segurança necessária para decisões complexas. Um escritório que realmente entende o valor da confiança.",
    author: "Mariana Costa",
    role: "Diretora Financeira, Grupo Horizonte",
  },
  {
    quote: "Encontramos no Cardoso de Oliveira Associados uma advocacia moderna, ágil e extremamente competente. O olhar feminino traz uma sensibilidade única para a resolução de conflitos.",
    author: "Beatriz Mendes",
    role: "Fundadora, Studio B",
  },
];

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".testimonial-card",
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
    <section id="depoimentos" ref={containerRef} className="py-24 md:py-40 3xl:py-64 bg-secondary overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 3xl:px-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl 3xl:max-w-4xl">
            <h2 className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-4">Depoimentos</h2>
            <h3 className="font-serif text-4xl md:text-6xl 3xl:text-7xl text-primary leading-tight">
              A voz de quem <span className="italic">confia</span> em nós.
            </h3>
          </div>
          <p className="text-primary/60 max-w-xs text-sm leading-relaxed">
            Relatos de quem encontrou no nosso escritório a segurança e o suporte necessários para seus desafios.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 3xl:gap-12">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="testimonial-card bg-muted p-10 border border-primary/5 flex flex-col justify-between hover:border-accent/30 transition-all duration-500 group"
            >
              <div>
                <Quote className="text-accent mb-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500" size={40} />
                <p className="text-primary/80 text-lg leading-relaxed mb-8 italic">
                  "{t.quote}"
                </p>
              </div>
              <div>
                <h4 className="font-serif text-xl text-primary">{t.author}</h4>
                <p className="text-xs uppercase tracking-widest text-accent font-semibold mt-1">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
