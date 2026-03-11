import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollDirection } from "@/hooks/useScrollDirection";

const navItems = [
  { name: "O Escritório", href: "#o-escritório" },
  { name: "Áreas de Atuação", href: "#áreas-de-atuação" },
  { name: "Setores", href: "#setores" },
  { name: "Profissionais", href: "#profissionais" },
  { name: "Cultura", href: "#cultura" },
  { name: "Insights", href: "#insights" },
  { name: "Depoimentos", href: "#depoimentos" },
  { name: "Contato", href: "#contato" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollDirection, isAtTop } = useScrollDirection();

  // Logic: Hide if scrolling down AND not at the very top.
  // Show if scrolling up OR at the top.
  const isVisible = isAtTop || scrollDirection === "up";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out",
        // Visibility logic
        isVisible ? "translate-y-0" : "-translate-y-full",
        // Background logic
        isAtTop ? "bg-transparent py-8" : "bg-secondary/95 backdrop-blur-md shadow-sm py-4"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="flex flex-col">
          <span className="font-serif text-xl md:text-2xl font-semibold tracking-tight text-primary">
            Cardoso de Oliveira
          </span>
          <span className="text-[9px] uppercase tracking-[0.3em] text-accent font-bold">
            Associados
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[11px] uppercase tracking-widest font-semibold text-primary/80 hover:text-accent transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-primary p-2 hover:bg-primary/5 rounded-full transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-secondary z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 lg:hidden",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-serif text-2xl text-primary hover:text-accent transition-colors"
          >
            {item.name}
          </a>
        ))}
      </div>
    </header>
  );
}
