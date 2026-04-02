import { useRef } from "react";
import { Linkedin, Mail } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const professional = {
  name: "Tayna C. B. Oliveira",
  role: "Sócia-Fundadora",
  bio: "Com uma visão inovadora e dedicação exclusiva, Tayna fundou o escritório com o propósito de oferecer uma advocacia artesanal, onde cada cliente recebe atenção total e estratégias personalizadas para suas demandas jurídicas.",
  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
};

export function Professionals() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const elements = gsap.utils.toArray('.anim-element');
    
    elements.forEach((el: any) => {
      if (!el) return;
      gsap.fromTo(el, 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          }
        }
      );
    });
  }, { scope: containerRef });

  return (
    <section data-scroll-section id="profissionais" className="py-[var(--spacing-section-y)] bg-secondary overflow-hidden border-t border-primary/10">
      <div className="container" ref={containerRef}>
        
        <div className="bg-primary flex flex-col lg:flex-row shadow-2xl">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 p-10 md:p-16 lg:p-24 flex flex-col justify-center text-secondary">
            <div className="anim-element inline-flex items-center gap-2 border border-secondary/20 text-secondary px-6 py-2 micro-text mb-12 w-fit">
              <span>A Fundadora</span>
            </div>
            
            <h3 className="anim-element font-editorial text-[clamp(3rem,6vw,6rem)] text-secondary leading-[0.85] tracking-tighter uppercase mb-6">
              {professional.name}
            </h3>
            <p className="anim-element micro-text text-secondary/70 mb-10">{professional.role}</p>
            
            <p className="anim-element micro-text normal-case tracking-normal leading-relaxed text-secondary/70 mb-12 max-w-md">
              {professional.bio}
            </p>
            
            <div className="anim-element flex gap-4 mt-auto">
              <a href="#" className="border border-secondary/20 p-4 text-secondary hover:bg-secondary hover:text-primary transition-colors duration-500">
                <Linkedin size={20} strokeWidth={1} />
              </a>
              <a href="#" className="border border-secondary/20 p-4 text-secondary hover:bg-secondary hover:text-primary transition-colors duration-500">
                <Mail size={20} strokeWidth={1} />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="anim-element w-full lg:w-1/2 min-h-[500px] lg:min-h-full relative p-6 md:p-12">
            <div className="w-full h-full border border-secondary/20 p-4 relative">
              <img
                src={professional.image}
                alt={professional.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-4 bg-accent/10 mix-blend-multiply" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
