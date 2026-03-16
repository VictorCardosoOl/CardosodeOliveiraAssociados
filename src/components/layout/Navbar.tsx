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

  // Hide when at the very top. Show only when scrolling UP and NOT at top.
  const isVisible = !isAtTop && scrollDirection === "up";

  return (
    <header
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] md:w-[calc(100%-6rem)] max-w-[1800px] z-50 transition-all duration-500 ease-in-out rounded-sm bg-white/90 backdrop-blur-xl border border-gray-200 shadow-lg",
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0 pointer-events-none",
        "py-4 px-8 flex items-center justify-between"
      )}
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="font-sans text-lg font-bold tracking-tight text-black flex items-center gap-2">
          <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
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
            className="text-[13px] font-medium text-black/60 hover:text-black transition-colors"
          >
            {item.name}
          </a>
        ))}
      </nav>

      {/* CTA Button */}
      <div className="hidden lg:block">
        <a href="#contato" className="bg-accent text-white px-6 py-2.5 text-[13px] font-bold hover:bg-accent-light transition-colors rounded-sm">
          Agendar Consulta
        </a>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="lg:hidden text-black p-2"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle Menu"
      >
        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Nav Overlay */}
      <div
        className={cn(
          "fixed inset-x-0 top-[calc(100%+1rem)] bg-white rounded-3xl border border-black/5 shadow-xl p-6 flex flex-col gap-4 transition-all duration-300 lg:hidden",
          isMobileMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-sans text-lg font-medium text-black hover:text-black/70 transition-colors"
          >
            {item.name}
          </a>
        ))}
      </div>
    </header>
  );
}
