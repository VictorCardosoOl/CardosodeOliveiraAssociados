import { useActiveSection } from "@/context/ActiveSectionContext";
import { cn } from "@/lib/utils";

const sections = [
  { id: "inicio", name: "Início", num: "01" },
  { id: "o-escritorio", name: "O Escritório", num: "02" },
  { id: "areas-de-atuacao", name: "Áreas de Atuação", num: "03" },
  { id: "profissionais", name: "Profissionais", num: "04" },
  { id: "insights", name: "Insights", num: "05" },
  { id: "contato", name: "Contato", num: "06" },
];

export function SideNav() {
  const { activeSection } = useActiveSection();

  return (
    <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-4 2xl:gap-6 mix-blend-difference text-secondary">
      {sections.map((section) => {
        const isActive = activeSection === section.id || (activeSection === '' && section.id === 'inicio');
        
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="group relative flex items-center"
            aria-label={`Ir para ${section.name}`}
          >
            <span 
              className={cn(
                "micro-text transition-colors duration-300",
                isActive ? "text-secondary" : "text-secondary/40 group-hover:text-secondary"
              )}
            >
              {section.num}
            </span>
            
            <span 
              className={cn(
                "absolute left-8 micro-text px-2 py-1 whitespace-nowrap transition-all duration-500",
                isActive 
                  ? "opacity-100 translate-x-0 text-secondary" 
                  : "opacity-0 -translate-x-4 text-secondary/60 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-secondary"
              )}
            >
              {section.name}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
