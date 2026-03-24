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
    if (document.querySelector('.professional-card')) {
      gsap.fromTo(
        ".professional-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
          },
        }
      );
    }
  }, { scope: containerRef });

  return (
    <section id="profissionais" className="py-[var(--spacing-section-y)] bg-secondary overflow-hidden">
      <div className="container" ref={containerRef}>
        
        <div className="professional-card bg-primary rounded-xl md:rounded-2xl 3xl:rounded-3xl overflow-hidden flex flex-col lg:flex-row shadow-2xl">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 p-10 md:p-16 lg:p-20 3xl:p-24 4xl:p-32 flex flex-col justify-center text-secondary">
            <div className="inline-flex items-center gap-2 px-4 py-2 3xl:px-6 3xl:py-3 bg-secondary/10 text-secondary text-xs 3xl:text-sm font-medium uppercase tracking-wider mb-8 rounded-full w-fit">
              <span>A Fundadora</span>
            </div>
            
            <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl 3xl:text-8xl 4xl:text-9xl text-secondary leading-[1.1] tracking-tighter font-light mb-4">
              {professional.name}
            </h3>
            <p className="text-sm 3xl:text-xl uppercase tracking-widest text-accent font-medium mb-8">{professional.role}</p>
            
            <p className="text-base md:text-lg 3xl:text-2xl text-secondary/80 leading-relaxed mb-10 font-light max-w-md 3xl:max-w-2xl">
              {professional.bio}
            </p>
            
            <div className="flex gap-4 3xl:gap-8 mt-auto">
              <a href="#" className="bg-secondary/10 p-4 3xl:p-6 rounded-full text-secondary hover:bg-secondary hover:text-primary transition-colors">
                <Linkedin size={20} strokeWidth={1.5} className="3xl:w-8 3xl:h-8" />
              </a>
              <a href="#" className="bg-secondary/10 p-4 3xl:p-6 rounded-full text-secondary hover:bg-secondary hover:text-primary transition-colors">
                <Mail size={20} strokeWidth={1.5} className="3xl:w-8 3xl:h-8" />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-full relative p-4 md:p-8 3xl:p-12 4xl:p-16">
            <div className="absolute inset-4 md:inset-8 3xl:inset-12 4xl:inset-16 w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] 3xl:w-[calc(100%-6rem)] 4xl:w-[calc(100%-8rem)] h-[calc(100%-2rem)] md:h-[calc(100%-4rem)] 3xl:h-[calc(100%-6rem)] 4xl:h-[calc(100%-8rem)] rounded-xl border border-secondary/20 p-2 3xl:p-4">
              <img
                src={professional.image}
                alt={professional.name}
                className="w-full h-full object-cover rounded-lg"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
