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
        duration: 1.2,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section id="profissionais" className="py-24 md:py-40 3xl:py-64 bg-secondary overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 3xl:px-24" ref={containerRef}>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl 3xl:max-w-4xl">
            <h2 className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-4">Nossa Liderança</h2>
            <h3 className="font-serif text-4xl md:text-6xl 3xl:text-7xl text-primary leading-tight">
              Excelência técnica com <span className="italic">olhar humano</span>.
            </h3>
          </div>
          <p className="text-primary/50 max-w-xs text-sm leading-relaxed">
            Uma equipe multidisciplinar dedicada a oferecer soluções jurídicas personalizadas com o mais alto rigor ético.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 3xl:gap-20">
          {professionals.map((prof, index) => (
            <div key={index} className="professional-card group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] mb-8 shadow-2xl transition-all duration-700 group-hover:-translate-y-4">
                <img
                  src={prof.image}
                  alt={prof.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-8">
                  <div className="flex gap-4">
                    <a href="#" className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-accent transition-colors">
                      <Linkedin size={18} />
                    </a>
                    <a href="#" className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-accent transition-colors">
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-center md:text-left">
                <h4 className="font-serif text-2xl text-primary mb-2 group-hover:text-accent transition-colors duration-300">{prof.name}</h4>
                <p className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold">{prof.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
