import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      ".hero-elem",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.15, delay: 0.2 }
    ).fromTo(
      ".hero-image-container",
      { x: 40, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.2, ease: "power2.out" },
      "-=0.8"
    ).fromTo(
      ".hero-floating-card",
      { x: -30, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "back.out(1.2)" },
      "-=0.5"
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-[100vh] flex items-center pt-32 pb-20 2xl:pt-48 2xl:pb-32 bg-secondary overflow-hidden">
      {/* Background Accent Block */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-muted/50 -z-10 hidden lg:block"></div>

      <div className="container mx-auto px-6 md:px-12 3xl:px-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 3xl:gap-32 items-center">
          
          {/* Left Column: Text */}
          <div className="flex flex-col items-start text-left order-1">
            <div className="hero-elem inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-8 rounded-sm">
              <Sparkles size={14} className="text-accent" />
              <span>Liderança Feminina no Direito</span>
            </div>

            <h1 className="hero-elem font-serif text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] text-primary leading-[0.95] tracking-tighter font-bold mb-8">
              Estratégia <br />
              <span className="text-accent">Jurídica</span>
            </h1>
            
            <p className="hero-elem text-lg md:text-xl 3xl:text-2xl text-primary/60 leading-relaxed max-w-lg 3xl:max-w-2xl font-medium mb-10 3xl:mb-14">
              Comandado por mulheres, nosso escritório entrega resultados que impulsionam o seu crescimento. Atendimento exclusivo e personalizado para demandas complexas.
            </p>

            <div className="hero-elem flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button className="bg-accent text-secondary px-8 py-4 rounded-sm text-sm font-bold hover:bg-accent-light transition-all flex items-center justify-center gap-2 group w-full sm:w-auto">
                Agendar Consulta
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-secondary text-primary border-2 border-primary/10 px-8 py-4 rounded-sm text-sm font-bold hover:border-accent hover:text-accent transition-all flex items-center justify-center w-full sm:w-auto">
                Minha Trajetória
              </button>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="hero-image-container relative w-full max-w-md mx-auto lg:max-w-none 3xl:max-w-[800px] order-2 mt-10 lg:mt-0">
            {/* Geometric Accent Behind Image */}
            <div className="absolute -inset-4 bg-accent rounded-sm -z-10 translate-x-4 translate-y-4 hidden md:block"></div>
            
            <div className="w-full aspect-[4/5] overflow-hidden bg-muted rounded-sm shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop" 
                alt="Advogada Especialista" 
                className="w-full h-full object-cover grayscale contrast-125"
              />
              {/* Blue overlay tint to match template style */}
              <div className="absolute inset-0 bg-accent/10 mix-blend-multiply"></div>
            </div>
            
            {/* Floating Card - Overlapping left side */}
            <div className="hero-floating-card absolute -left-4 md:-left-12 bottom-12 bg-secondary p-6 rounded-sm shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-primary/5 max-w-[260px] text-left z-10 hidden sm:block">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-accent">Experiência</span>
                <div className="w-8 h-8 bg-accent/10 flex items-center justify-center rounded-sm">
                  <TrendingUp size={14} className="text-accent" />
                </div>
              </div>
              <h3 className="font-serif font-bold text-lg leading-tight mb-2 text-primary">Atendimento Exclusivo</h3>
              <p className="text-xs text-primary/60 leading-relaxed mb-4 font-medium">
                Mais de 15 anos dedicados a soluções jurídicas de alta complexidade.
              </p>
              <div className="pt-4 border-t border-gray-100">
                <span className="block text-2xl font-black text-primary leading-none mb-1">15+ Anos</span>
                <span className="text-[9px] uppercase tracking-widest text-primary/50 font-bold">De atuação</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
