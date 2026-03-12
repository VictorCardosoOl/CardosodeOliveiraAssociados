import { ArrowUpRight, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-primary text-secondary/60 py-24 md:py-40 3xl:py-64 overflow-hidden border-t border-secondary/10">
      {/* 1. Noise Texture Layer */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay z-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <filter id="noiseFilter">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.65" 
              numOctaves="3" 
              stitchTiles="stitch" 
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* 2. Background Typography */}
      <div className="absolute bottom-[-5%] left-0 w-full pointer-events-none select-none z-0 overflow-hidden">
        <h2 className="font-serif text-[18vw] leading-none text-secondary/5 whitespace-nowrap tracking-tighter">
          Firmo Advogados
        </h2>
      </div>

      <div className="container mx-auto px-6 md:px-12 3xl:px-24 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 3xl:gap-16">
          
          {/* Col 1: Identity */}
          <div className="lg:pr-12 lg:border-r border-secondary/10">
            <div className="mb-8">
              <h3 className="font-serif text-3xl text-secondary mb-2">Firmo Advogados</h3>
              <p className="font-serif italic text-secondary/50 text-lg">Advocacia de Excelência</p>
            </div>
            <p className="text-sm leading-relaxed text-secondary/60 max-w-xs">
              Comprometidas com a justiça e a equidade, transformando desafios jurídicos em soluções estratégicas e humanas.
            </p>
          </div>

          {/* Col 2: Local/CTA */}
          <div className="lg:px-12 lg:border-r border-secondary/10">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-secondary/40 mb-8 block">Localização</span>
            <address className="not-italic text-secondary/80 mb-8 leading-relaxed">
              Av. Paulista, 1000 — 12º Andar<br />
              Jardins, São Paulo — SP<br />
              01310-100
            </address>
            <a 
              href="#contato" 
              className="group inline-flex items-center gap-2 text-secondary hover:text-accent transition-colors duration-300"
            >
              <span className="text-sm font-medium uppercase tracking-widest">Fale Conosco</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </a>
          </div>

          {/* Col 3: Social */}
          <div className="lg:px-12 lg:border-r border-secondary/10">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-secondary/40 mb-8 block">Conecte-se</span>
            <ul className="space-y-4">
              {[
                { name: "Instagram", icon: Instagram, href: "#" },
                { name: "LinkedIn", icon: Linkedin, href: "#" },
                { name: "WhatsApp", icon: MessageCircle, href: "#" },
                { name: "E-mail", icon: Mail, href: "mailto:contato@firmo.adv.br" },
              ].map((social) => (
                <li key={social.name}>
                  <a 
                    href={social.href} 
                    className="flex items-center gap-3 text-secondary/60 hover:text-secondary transition-colors duration-300 group"
                  >
                    <social.icon size={18} strokeWidth={1.5} />
                    <span className="text-sm font-medium tracking-wide">{social.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Menu/Credits */}
          <div className="lg:pl-12">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-secondary/40 mb-8 block">Navegação</span>
            <nav className="mb-16">
              <ul className="space-y-3">
                {["O Escritório", "Áreas de Atuação", "Setores", "Profissionais", "Cultura", "Insights", "Depoimentos", "Contato"].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="inline-block text-sm text-secondary/60 hover:text-secondary hover:translate-x-2 transition-all duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="pt-8 border-t border-secondary/10">
              <p className="text-[10px] uppercase tracking-widest text-secondary/40 mb-2">
                © {currentYear} Firmo Advogados
              </p>
              <p className="text-[10px] uppercase tracking-widest text-secondary/30">
                Design by <span className="text-secondary/50 hover:text-secondary cursor-pointer transition-colors">Wise System</span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
