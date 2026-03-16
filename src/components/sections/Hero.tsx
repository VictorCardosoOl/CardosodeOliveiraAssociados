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
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power2.out" },
      "-=0.8"
    ).fromTo(
      ".hero-floating-card",
      { x: -30, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "back.out(1.2)" },
      "-=0.5"
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-[100vh] flex flex-col items-center justify-center pt-40 pb-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 3xl:px-24 flex flex-col items-center text-center">
        
        <div className="max-w-4xl mx-auto mb-16 flex flex-col items-center">
          <div className="hero-elem inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 text-black/70 text-xs font-bold uppercase tracking-wider mb-8 border border-gray-200">
            <Sparkles size={14} className="text-black" />
            <span>Redefinindo a Advocacia</span>
          </div>

          <h1 className="hero-elem font-sans text-6xl md:text-8xl lg:text-[7.5rem] text-black leading-[0.95] tracking-tighter font-bold mb-8">
            Advocacia <br />
            Estratégica
          </h1>
          
          <p className="hero-elem text-lg md:text-xl text-black/60 leading-relaxed max-w-2xl mx-auto font-medium mb-10">
            Soluções jurídicas personalizadas para demandas complexas. Focados no seu negócio, entregamos resultados que impulsionam o seu crescimento.
          </p>

          <div className="hero-elem flex flex-col sm:flex-row items-center gap-4">
            <button className="bg-black text-white px-8 py-4 rounded-full text-sm font-bold hover:bg-black/80 transition-all flex items-center gap-2 group w-full sm:w-auto justify-center">
              Agendar Consulta
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white text-black border border-gray-200 px-8 py-4 rounded-full text-sm font-bold hover:bg-gray-50 transition-all w-full sm:w-auto justify-center">
              Nossos Serviços
            </button>
          </div>
        </div>

        <div className="hero-image-container relative w-full max-w-5xl mt-8">
          {/* Main Image */}
          <div className="w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-gray-100 rounded-[2rem] md:rounded-[3rem] shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop" 
              alt="Reunião Corporativa" 
              className="w-full h-full object-cover grayscale-[0.2]"
            />
          </div>
          
          {/* Floating Card - Breaking out of the image */}
          <div className="hero-floating-card absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 bg-white p-6 md:p-8 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 max-w-[280px] md:max-w-[320px] text-left z-10 hidden sm:block">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-black/50">Case de Sucesso</span>
              <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center">
                <TrendingUp size={14} className="text-black" />
              </div>
            </div>
            <h3 className="font-sans font-bold text-xl leading-tight mb-3 text-black">Fusões & Aquisições</h3>
            <p className="text-sm text-black/60 leading-relaxed mb-6 font-medium">
              Assessoria completa em operações societárias de alta complexidade.
            </p>
            <div className="flex items-center justify-between pt-5 border-t border-gray-100">
              <div>
                <span className="block text-2xl font-black text-black leading-none mb-1">R$ 2B+</span>
                <span className="text-[9px] uppercase tracking-widest text-black/50 font-bold">Em transações</span>
              </div>
              <button className="bg-black text-white px-5 py-2.5 rounded-full text-xs font-bold hover:bg-black/80 transition-colors">
                Ver Case
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
