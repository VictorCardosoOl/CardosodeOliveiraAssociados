import { ArrowRight, Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const elements = gsap.utils.toArray('.anim-element');
    
    elements.forEach((el: any) => {
      gsap.fromTo(el, 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          }
        }
      );
    });
  }, { scope: footerRef });

  return (
    <footer ref={footerRef} className="relative bg-footer text-primary pt-[var(--spacing-section-y)] pb-12 md:pb-24 overflow-hidden border-t border-primary/10">

      {/* Background Typography */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none select-none z-0 flex justify-center items-end opacity-[0.03]">
        <h2 className="font-editorial text-[15vw] leading-[0.75] text-primary whitespace-nowrap uppercase tracking-tighter">
          Estratégia
        </h2>
      </div>

      {/* Main Content Grid */}
      <div className="container relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 md:gap-y-20 lg:gap-y-0 lg:divide-x lg:divide-primary/10">
          
          {/* Col 1: Identity */}
          <div className="anim-element flex flex-col lg:pr-12 xl:pr-16">
            <span className="micro-text text-accent mb-8 block">Escritório</span>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-editorial text-4xl text-primary flex items-center gap-3 uppercase tracking-tighter">
                <div className="w-8 h-8 bg-accent flex items-center justify-center">
                  <div className="w-2 h-2 bg-secondary"></div>
                </div>
                Tayna C. B. Oliveira
              </span>
            </div>
            <p className="font-editorial italic text-2xl text-primary/80 mb-6">
              Visão singular no direito.
            </p>
            <p className="text-sm leading-relaxed font-light max-w-xs text-muted">
              Advocacia feminina focada em resultados, excelência e atendimento exclusivo para demandas complexas.
            </p>
          </div>

          {/* Col 2: Location/CTA */}
          <div className="anim-element flex flex-col lg:px-12 xl:px-16">
            <span className="micro-text text-accent mb-8 block">Contato</span>
            <div className="flex items-start gap-4 mb-12">
              <MapPin size={20} className="text-accent shrink-0 mt-1" strokeWidth={1} />
              <p className="text-sm leading-relaxed font-light text-muted">
                Av. Brigadeiro Faria Lima, 3064<br />
                Itaim Bibi, São Paulo - SP<br />
                01451-000
              </p>
            </div>
            <a href="#contato" className="group flex items-center gap-4 text-primary hover:text-accent transition-colors w-fit mt-auto border-b border-primary/20 pb-2">
              <span className="micro-text">Fale com um especialista</span>
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" strokeWidth={1} />
            </a>
          </div>

          {/* Col 3: Social */}
          <div className="anim-element flex flex-col lg:px-12 xl:px-16">
            <span className="micro-text text-accent mb-8 block">Social</span>
            <div className="flex flex-col gap-6">
              <a href="#" className="group flex items-center gap-4 text-muted hover:text-primary transition-colors w-fit">
                <Instagram size={20} className="group-hover:scale-110 transition-transform" strokeWidth={1} />
                <span className="text-sm font-light">Instagram</span>
              </a>
              <a href="#" className="group flex items-center gap-4 text-muted hover:text-primary transition-colors w-fit">
                <Linkedin size={20} className="group-hover:scale-110 transition-transform" strokeWidth={1} />
                <span className="text-sm font-light">LinkedIn</span>
              </a>
              <a href="#" className="group flex items-center gap-4 text-muted hover:text-primary transition-colors w-fit">
                <Mail size={20} className="group-hover:scale-110 transition-transform" strokeWidth={1} />
                <span className="text-sm font-light">E-mail</span>
              </a>
            </div>
          </div>

          {/* Col 4: Menu/Credits */}
          <div className="anim-element flex flex-col lg:pl-12 xl:pl-16">
            <span className="micro-text text-accent mb-8 block">Navegação</span>
            <nav className="flex flex-col gap-4 mb-16">
              {[
                { name: 'O Escritório', href: '#o-escritorio' },
                { name: 'Áreas de Atuação', href: '#areas-de-atuacao' },
                { name: 'Profissionais', href: '#profissionais' },
                { name: 'Insights', href: '#insights' }
              ].map((item) => (
                <a key={item.name} href={item.href} className="text-sm font-light text-muted hover:text-primary hover:translate-x-2 transition-all w-fit">
                  {item.name}
                </a>
              ))}
            </nav>
            
            <div className="mt-auto pt-8 border-t border-primary/10">
              <p className="text-xs font-light text-muted">
                &copy; {currentYear} Estratégia.<br/>Todos os direitos reservados.
              </p>
              <p className="text-[10px] font-light text-muted/60 mt-2 uppercase tracking-widest">
                Design por <a href="#" className="hover:text-primary transition-colors">Creative Dev</a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
