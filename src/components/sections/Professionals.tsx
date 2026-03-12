import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Linkedin, Mail } from "lucide-react";

const professional = {
  name: "Dra. Helena Cardoso",
  role: "Sócia-Fundadora",
  bio: "Com uma visão inovadora e dedicação exclusiva, Dra. Helena fundou o escritório com o propósito de oferecer uma advocacia artesanal, onde cada cliente recebe atenção total e estratégias personalizadas para suas demandas jurídicas.",
  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
};

export function Professionals() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".professional-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section id="profissionais" className="min-h-screen flex items-center py-24 bg-secondary overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 3xl:px-24" ref={containerRef}>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl 3xl:max-w-4xl">
            <h2 className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-4">A Fundadora</h2>
            <h3 className="font-serif text-4xl md:text-6xl 3xl:text-7xl text-primary leading-tight">
              Excelência técnica com <span className="italic">olhar humano</span>.
            </h3>
          </div>
          <p className="text-primary/60 max-w-xs text-sm leading-relaxed">
            Atendimento direto e personalizado, garantindo que cada detalhe do seu caso seja tratado com o mais alto rigor ético.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 3xl:gap-20 items-center">
          <div className="professional-card group">
            <div className="relative aspect-[4/5] overflow-hidden mb-8 transition-all duration-700">
              <img
                src={professional.image}
                alt={professional.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="professional-card flex flex-col justify-center">
            <h4 className="font-serif text-4xl md:text-5xl text-primary mb-4">{professional.name}</h4>
            <p className="text-sm uppercase tracking-[0.2em] text-primary/50 font-bold mb-8">{professional.role}</p>
            <p className="text-lg text-primary/70 leading-relaxed mb-12 max-w-xl">{professional.bio}</p>
            <div className="flex gap-4">
              <a href="#" className="bg-primary/5 p-4 text-primary hover:bg-accent hover:text-secondary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-primary/5 p-4 text-primary hover:bg-accent hover:text-secondary transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
