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

  const isVisible = isAtTop || scrollDirection === "up";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out bg-secondary/90 backdrop-blur-md border-b border-primary/5",
        isVisible ? "translate-y-0" : "-translate-y-full",
        isAtTop ? "py-6" : "py-4 shadow-sm"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 3xl:px-24 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="font-serif text-xl font-semibold tracking-tight text-primary">
            Cardoso de Oliveira Associados
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-primary/70 hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <a href="#contato" className="bg-primary text-secondary px-6 py-3 text-sm font-medium hover:bg-primary/90 transition-colors rounded-full">
            Agendar Consulta
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-primary p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-secondary z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 lg:hidden",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-serif text-2xl text-primary hover:text-primary/70 transition-colors"
          >
            {item.name}
          </a>
        ))}
      </div>
    </header>
  );
}
