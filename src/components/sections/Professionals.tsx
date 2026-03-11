import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Linkedin, Mail } from "lucide-react";

const professionals = [
  {
    name: "Dra. Helena Cardoso",
    role: "Sócia-Fundadora | Direito Civil",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Dra. Beatriz Oliveira",
    role: "Sócia | Direito Fiduciário",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Dra. Mariana Silva",
    role: "Associada Sênior | Contencioso",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Dra. Camila Santos",
    role: "Associada | Direito de Família",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=800&auto=format&fit=crop",
  },
];

export function Professionals() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".professional-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section id="profissionais" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6 md:px-12" ref={containerRef}>
        <div className="mb-16 md:mb-24 text-center">
          <h2 className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-4">Nossos Profissionais</h2>
          <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary">
            Excelência técnica com olhar humano.
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {professionals.map((prof, index) => (
            <div key={index} className="professional-card group flex flex-col">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-6 shadow-lg">
                <img
                  src={prof.image}
                  alt={prof.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                  <a href="#" className="bg-secondary p-3 rounded-full text-primary hover:bg-accent hover:text-secondary transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="bg-secondary p-3 rounded-full text-primary hover:bg-accent hover:text-secondary transition-colors">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
              <h4 className="font-serif text-2xl text-primary mb-1">{prof.name}</h4>
              <p className="text-sm uppercase tracking-widest text-accent font-medium">{prof.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
