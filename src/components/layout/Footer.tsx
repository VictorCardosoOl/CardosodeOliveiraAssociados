import { ArrowUpRight, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-stone-950 text-stone-400 py-24 md:py-32 overflow-hidden border-t border-stone-900">
      {/* 1. Noise Texture Layer */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.07] mix-blend-overlay z-10">
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
        <h2 className="font-serif text-[18vw] leading-none text-stone-900/40 whitespace-nowrap tracking-tighter">
          Cardoso de Oliveira
        </h2>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
          
          {/* Col 1: Identity */}
          <div className="lg:pr-12 lg:border-r border-stone-800/50">
            <div className="mb-8">
              <h3 className="font-serif text-3xl text-stone-100 mb-2">Cardoso de Oliveira</h3>
              <p className="font-serif italic text-stone-500 text-lg">Advocacia de Excelência</p>
            </div>
            <p className="text-sm leading-relaxed text-stone-500 max-w-xs">
              Comprometidas com a justiça e a equidade, transformando desafios jurídicos em soluções estratégicas e humanas.
            </p>
          </div>

          {/* Col 2: Local/CTA */}
          <div className="lg:px-12 lg:border-r border-stone-800/50">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-600 mb-8 block">Localização</span>
            <address className="not-italic text-stone-300 mb-8 leading-relaxed">
              Av. Paulista, 1000 — 12º Andar<br />
              Jardins, São Paulo — SP<br />
              01310-100
            </address>
            <a 
              href="#contato" 
              className="group inline-flex items-center gap-2 text-stone-100 hover:text-accent transition-colors duration-300"
            >
              <span className="text-sm font-medium uppercase tracking-widest">Fale Conosco</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </a>
          </div>

          {/* Col 3: Social */}
          <div className="lg:px-12 lg:border-r border-stone-800/50">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-600 mb-8 block">Conecte-se</span>
            <ul className="space-y-4">
              {[
                { name: "Instagram", icon: Instagram, href: "#" },
                { name: "LinkedIn", icon: Linkedin, href: "#" },
                { name: "WhatsApp", icon: MessageCircle, href: "#" },
                { name: "E-mail", icon: Mail, href: "mailto:contato@cardoso.adv.br" },
              ].map((social) => (
                <li key={social.name}>
                  <a 
                    href={social.href} 
                    className="flex items-center gap-3 text-stone-500 hover:text-stone-100 transition-colors duration-300 group"
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
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-600 mb-8 block">Navegação</span>
            <nav className="mb-16">
              <ul className="space-y-3">
                {["O Escritório", "Áreas de Atuação", "Setores", "Profissionais", "Cultura", "Insights", "Depoimentos", "Contato"].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="inline-block text-sm text-stone-500 hover:text-stone-100 hover:translate-x-2 transition-all duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="pt-8 border-t border-stone-900">
              <p className="text-[10px] uppercase tracking-widest text-stone-700 mb-2">
                © {currentYear} Cardoso de Oliveira Associados
              </p>
              <p className="text-[10px] uppercase tracking-widest text-stone-800">
                Design by <span className="text-stone-700 hover:text-stone-500 cursor-pointer transition-colors">Wise System</span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
