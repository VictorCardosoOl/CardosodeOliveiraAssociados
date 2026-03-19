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
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section id="profissionais" className="py-24 2xl:py-48 3xl:py-64 bg-secondary overflow-hidden">
      <div className="container" ref={containerRef}>
        
        <div className="professional-card bg-primary rounded-[2rem] md:rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 p-10 md:p-16 lg:p-20 3xl:p-24 flex flex-col justify-center text-secondary">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider mb-8 rounded-full w-fit">
              <span>A Fundadora</span>
            </div>
            
            <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-secondary leading-[1.1] tracking-tighter font-light mb-4">
              {professional.name}
            </h3>
            <p className="text-sm uppercase tracking-widest text-accent font-bold mb-8">{professional.role}</p>
            
            <p className="text-base md:text-lg text-secondary/80 leading-relaxed mb-10 font-light max-w-md">
              {professional.bio}
            </p>
            
            <div className="flex gap-4 mt-auto">
              <a href="#" className="bg-secondary/10 p-4 rounded-full text-secondary hover:bg-secondary hover:text-primary transition-colors">
                <Linkedin size={20} strokeWidth={1.5} />
              </a>
              <a href="#" className="bg-secondary/10 p-4 rounded-full text-secondary hover:bg-secondary hover:text-primary transition-colors">
                <Mail size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-full relative p-4 md:p-8">
            <img
              src={professional.image}
              alt={professional.name}
              className="absolute inset-4 md:inset-8 w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] h-[calc(100%-2rem)] md:h-[calc(100%-4rem)] object-cover rounded-t-full rounded-b-[3rem]"
              referrerPolicy="no-referrer"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
