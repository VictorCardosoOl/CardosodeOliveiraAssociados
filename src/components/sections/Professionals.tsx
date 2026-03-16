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
    <section id="profissionais" className="min-h-screen flex items-center py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 3xl:px-24" ref={containerRef}>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl 3xl:max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-8 rounded-sm">
              <span>A Fundadora</span>
            </div>
            <h3 className="font-sans text-5xl md:text-7xl 3xl:text-8xl text-primary leading-[0.95] tracking-tighter font-bold">
              Excelência técnica com <br/><span className="text-accent">olhar humano</span>.
            </h3>
          </div>
          <p className="text-primary/70 max-w-sm text-base leading-relaxed font-medium">
            Atendimento direto e personalizado, garantindo que cada detalhe do seu caso seja tratado com o mais alto rigor ético.
          </p>
        </div>

        <div className="relative flex flex-col lg:flex-row items-center justify-center lg:justify-start mt-20">
          {/* Image Card */}
          <div className="professional-card relative w-full max-w-md aspect-[3/4] rounded-sm overflow-hidden shadow-2xl z-0">
            {/* Geometric Accent Behind Image */}
            <div className="absolute -inset-4 bg-accent rounded-sm -z-10 -translate-x-4 translate-y-4 hidden md:block"></div>
            
            <img
              src={professional.image}
              alt={professional.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-105 grayscale contrast-125"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-accent/10 mix-blend-multiply"></div>
          </div>

          {/* Text Card Overlapping */}
          <div className="professional-card relative z-10 w-full max-w-lg bg-primary text-white p-10 md:p-16 rounded-sm shadow-2xl -mt-20 lg:-mt-0 lg:-ml-32 border-l-4 border-accent">
            <h4 className="font-sans font-bold text-4xl md:text-5xl mb-2">{professional.name}</h4>
            <p className="text-xs uppercase tracking-widest text-accent font-bold mb-8">{professional.role}</p>
            <p className="text-base text-white/80 leading-relaxed mb-10 font-medium">{professional.bio}</p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-4 rounded-sm text-white hover:bg-accent hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-white/10 p-4 rounded-sm text-white hover:bg-accent hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
