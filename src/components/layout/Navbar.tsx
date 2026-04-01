import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { useActiveSection } from "@/context/ActiveSectionContext";
import gsap from "gsap";

const navItems = [
  { name: "Início", href: "#inicio" },
  { name: "O Escritório", href: "#o-escritorio" },
  { name: "Áreas de Atuação", href: "#areas-de-atuacao" },
  { name: "Profissionais", href: "#profissionais" },
  { name: "Insights", href: "#insights" },
  { name: "Contato", href: "#contato" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollDirection, isAtTop } = useScrollDirection();
  const { activeSection } = useActiveSection();
  const headerRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Visible at top, or when scrolling up, or if mobile menu is open
  const isVisible = isAtTop || scrollDirection === "up" || isMobileMenuOpen;

  useEffect(() => {
    if (headerRef.current) {
      gsap.to(headerRef.current, {
        yPercent: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
        duration: 0.5,
        ease: "power3.out"
      });
    }
  }, [isVisible]);

  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isMobileMenuOpen) {
        gsap.to(mobileMenuRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
          pointerEvents: "auto"
        });
      } else {
        gsap.to(mobileMenuRef.current, {
          y: -20,
          opacity: 0,
          duration: 0.4,
          ease: "power3.in",
          pointerEvents: "none"
        });
      }
    }
  }, [isMobileMenuOpen]);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 w-full z-50 flex flex-col"
    >
      {/* Main Navbar */}
      <div className={cn(
        "w-full transition-all duration-500",
        isAtTop ? "bg-transparent py-6 md:py-8" : "bg-secondary/95 backdrop-blur-md border-b border-primary/10 py-4"
      )}>
        <div className="container flex items-center justify-between">
          
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <a href="#inicio" className="font-editorial text-2xl md:text-3xl text-primary tracking-tighter uppercase whitespace-nowrap">
              Tayna C. B. Oliveira
            </a>
          </div>

          {/* Center/Right: Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '') || (item.href === '#inicio' && isAtTop);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "micro-text relative py-2 transition-colors duration-300",
                    isActive ? "font-semibold text-primary" : "text-primary/70 hover:text-primary"
                  )}
                >
                  {item.name}
                  {/* Subtle underline for active state */}
                  <span 
                    className={cn(
                      "absolute bottom-0 left-0 w-full h-[1px] bg-accent transition-transform duration-300 origin-left",
                      isActive ? "scale-x-100" : "scale-x-0"
                    )}
                  />
                </a>
              );
            })}
          </nav>

          {/* Right: Mobile Menu Toggle */}
          <div className="flex lg:hidden justify-end">
            <button
              className="text-primary p-2 flex items-center gap-3 hover:text-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <span className="micro-text hidden sm:block">{isMobileMenuOpen ? "Fechar" : "Menu"}</span>
              {isMobileMenuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
            </button>
          </div>
          
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div
        ref={mobileMenuRef}
        className="fixed inset-x-0 top-full bg-secondary border-b border-primary/10 shadow-xl p-8 flex flex-col gap-6 lg:hidden opacity-0 -translate-y-8 pointer-events-none"
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.href.replace('#', '') || (item.href === '#inicio' && isAtTop);
          return (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "font-editorial text-3xl uppercase tracking-tighter transition-colors",
                isActive ? "text-accent" : "text-primary hover:text-accent"
              )}
            >
              {item.name}
            </a>
          );
        })}
      </div>
    </header>
  );
}
