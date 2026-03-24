import { ArrowRight, Instagram, Linkedin, Mail, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-primary text-secondary/60 pt-[var(--spacing-section-y)] pb-12 md:pb-24 overflow-hidden rounded-t-[3rem] border-t border-secondary/10">
      {/* 1. Noise Texture Layer */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-overlay z-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* 2. Background Typography */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none select-none z-0 flex justify-center items-end opacity-[0.03]">
        <h2 className="font-serif text-[15vw] leading-[0.75] text-secondary whitespace-nowrap">
          Estratégia
        </h2>
      </div>

      {/* 3. Main Content Grid */}
      <div className="container relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 md:gap-y-20 lg:gap-y-0 lg:divide-x lg:divide-secondary/10">
          
          {/* Col 1: Identity */}
          <div className="flex flex-col lg:pr-12 xl:pr-16 3xl:pr-20 4xl:pr-24">
            <span className="text-[clamp(0.75rem,1vw,0.875rem)] 3xl:text-base uppercase tracking-widest font-medium text-accent mb-6 block">Escritório</span>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-serif text-[clamp(2rem,3vw,2.5rem)] 3xl:text-5xl 4xl:text-6xl text-secondary flex items-center gap-2">
                <div className="w-8 h-8 3xl:w-12 3xl:h-12 bg-accent rounded-full flex items-center justify-center">
                  <div className="w-2.5 h-2.5 3xl:w-4 3xl:h-4 bg-secondary rounded-full"></div>
                </div>
                Tayna C. B. Oliveira
              </span>
            </div>
            <p className="font-serif italic text-[clamp(1.125rem,2vw,1.5rem)] 3xl:text-3xl 4xl:text-4xl text-secondary/80 mb-6">
              Visão singular no direito.
            </p>
            <p className="text-[var(--text-fluid-p)] leading-relaxed font-light max-w-xs 3xl:max-w-md">
              Advocacia feminina focada em resultados, excelência e atendimento exclusivo para demandas complexas.
            </p>
          </div>

          {/* Col 2: Location/CTA */}
          <div className="flex flex-col lg:px-12 xl:px-16 3xl:px-20 4xl:px-24">
            <span className="text-[clamp(0.75rem,1vw,0.875rem)] 3xl:text-base uppercase tracking-widest font-medium text-accent mb-6 block">Contato</span>
            <div className="flex items-start gap-3 mb-8">
              <MapPin size={18} className="text-accent shrink-0 mt-1 3xl:w-6 3xl:h-6" />
              <p className="text-[var(--text-fluid-p)] leading-relaxed font-light 3xl:text-xl">
                Av. Brigadeiro Faria Lima, 3064<br />
                Itaim Bibi, São Paulo - SP<br />
                01451-000
              </p>
            </div>
            <a href="#contato" className="group flex items-center gap-3 text-secondary hover:text-accent transition-colors w-fit mt-auto">
              <span className="text-[clamp(0.75rem,1vw,0.875rem)] 3xl:text-base font-medium uppercase tracking-widest">Fale com um especialista</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform 3xl:w-5 3xl:h-5" />
            </a>
          </div>

          {/* Col 3: Social */}
          <div className="flex flex-col lg:px-12 xl:px-16 3xl:px-20 4xl:px-24">
            <span className="text-[clamp(0.75rem,1vw,0.875rem)] 3xl:text-base uppercase tracking-widest font-medium text-accent mb-6 block">Social</span>
            <div className="flex flex-col gap-4 3xl:gap-6">
              <a href="#" className="group flex items-center gap-3 text-secondary/60 hover:text-secondary transition-colors w-fit">
                <Instagram size={18} className="group-hover:scale-110 transition-transform 3xl:w-6 3xl:h-6" />
                <span className="text-[var(--text-fluid-p)] font-light 3xl:text-xl">Instagram</span>
              </a>
              <a href="#" className="group flex items-center gap-3 text-secondary/60 hover:text-secondary transition-colors w-fit">
                <Linkedin size={18} className="group-hover:scale-110 transition-transform 3xl:w-6 3xl:h-6" />
                <span className="text-[var(--text-fluid-p)] font-light 3xl:text-xl">LinkedIn</span>
              </a>
              <a href="#" className="group flex items-center gap-3 text-secondary/60 hover:text-secondary transition-colors w-fit">
                <Mail size={18} className="group-hover:scale-110 transition-transform 3xl:w-6 3xl:h-6" />
                <span className="text-[var(--text-fluid-p)] font-light 3xl:text-xl">E-mail</span>
              </a>
            </div>
          </div>

          {/* Col 4: Menu/Credits */}
          <div className="flex flex-col lg:pl-12 xl:pl-16 3xl:pl-20 4xl:pl-24">
            <span className="text-[clamp(0.75rem,1vw,0.875rem)] 3xl:text-base uppercase tracking-widest font-medium text-accent mb-6 block">Navegação</span>
            <nav className="flex flex-col gap-3 3xl:gap-5 mb-12">
              {['O Escritório', 'Áreas de Atuação', 'Profissionais', 'Cultura', 'Insights'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-[var(--text-fluid-p)] font-light 3xl:text-xl text-secondary/60 hover:text-secondary hover:translate-x-2 transition-all w-fit">
                  {item}
                </a>
              ))}
            </nav>
            
            <div className="mt-auto pt-8 border-t border-secondary/10">
              <p className="text-xs 3xl:text-sm font-light text-secondary/40">
                &copy; {currentYear} Estratégia.<br/>Todos os direitos reservados.
              </p>
              <p className="text-[10px] 3xl:text-xs font-light text-secondary/30 mt-2">
                Design por <a href="#" className="hover:text-secondary transition-colors">Creative Dev</a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
