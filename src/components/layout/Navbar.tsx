import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollDirection } from "@/hooks/useScrollDirection";

const navItems = [
  { name: "Início", href: "#" },
  { name: "O Escritório", href: "#o-escritorio" },
  { name: "Serviços", href: "#servicos" },
  { name: "Áreas de Atuação", href: "#areas-de-atuacao" },
  { name: "A Fundadora", href: "#profissionais" },
  { name: "Contato", href: "#contato" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollDirection, isAtTop } = useScrollDirection();

  // Visible at top, or when scrolling up
  const isVisible = isAtTop || scrollDirection === "up";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out flex flex-col",
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      )}
    >
      {/* Main Navbar */}
      <div className="w-full bg-secondary/90 backdrop-blur-xl border-b border-primary/10 py-4 px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="font-serif text-xl font-bold tracking-tight text-primary flex items-center gap-2">
          <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-secondary rounded-full"></div>
          </div>
          Cardoso
        </span>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-[13px] font-light text-primary/60 hover:text-primary transition-colors"
          >
            {item.name}
          </a>
        ))}
      </nav>

      {/* CTA Button */}
      <div className="hidden lg:block">
        <a href="#contato" className="bg-accent text-secondary px-6 py-2.5 text-[13px] font-medium hover:bg-accent-light transition-colors rounded-full">
          Agendar Consulta
        </a>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="lg:hidden text-primary p-2"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle Menu"
      >
        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div
        className={cn(
          "fixed inset-x-0 top-[calc(100%+1rem)] bg-secondary rounded-3xl border border-primary/5 shadow-xl p-6 flex flex-col gap-4 transition-all duration-300 lg:hidden",
          isMobileMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-sans text-lg font-medium text-primary hover:text-primary/70 transition-colors"
          >
            {item.name}
          </a>
        ))}
      </div>
    </header>
  );
}
