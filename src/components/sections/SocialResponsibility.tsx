import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Heart, Users2, ShieldAlert } from "lucide-react";

const initiatives = [
  {
    title: "Apoio a Mulheres",
    description: "Consultoria jurídica gratuita para mulheres em situação de vulnerabilidade, garantindo acesso à justiça e proteção de direitos.",
    icon: Heart,
  },
  {
    title: "Mentoria Jurídica",
    description: "Programa de mentoria para jovens advogadas, fortalecendo a presença feminina no mercado jurídico e em cargos de liderança.",
    icon: Users2,
  },
  {
    title: "Combate à Violência",
    description: "Ações pro bono focadas na proteção de vítimas de violência doméstica e familiar, oferecendo suporte jurídico integral.",
    icon: ShieldAlert,
  },
];

export function SocialResponsibility() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".initiative-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section id="responsabilidade-social" className="py-24 md:py-32 bg-secondary text-primary">
      <div className="container mx-auto px-6 md:px-12" ref={containerRef}>
        <div className="mb-16 md:mb-24">
          <h2 className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-4">Responsabilidade Social</h2>
          <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl max-w-3xl">
            Nosso compromisso vai além do escritório.
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {initiatives.map((item, index) => (
            <div 
              key={index} 
              className="initiative-card group p-10 bg-white border border-primary/5 rounded-3xl hover:border-accent/30 transition-all duration-500 hover:shadow-2xl"
            >
              <item.icon className="w-12 h-12 text-accent mb-8 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
              <h4 className="font-serif text-2xl mb-4">{item.title}</h4>
              <p className="text-primary/60 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
