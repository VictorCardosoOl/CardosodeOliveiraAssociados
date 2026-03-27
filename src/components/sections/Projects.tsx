import React, { useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Reestruturação Fiduciária",
    category: "Direito Fiduciário",
    description: "Proteção de ativos familiares através de uma estrutura de governança robusta e eficiente.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Fusão de Conglomerado",
    category: "Direito Empresarial",
    description: "Assessoria estratégica em fusão transnacional, garantindo conformidade e mitigação de riscos.",
    image: "https://images.unsplash.com/photo-1505664173696-0746f4856282?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Planejamento Sucessório",
    category: "Direito de Família",
    description: "Desenho de sucessão patrimonial complexa, preservando a harmonia familiar e o legado.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&auto=format&fit=crop",
  },
];

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current || !imageRef.current || !maskRef.current || !textRef.current) return;

    const ctx = gsap.context(() => {
      // Image Mask Reveal
      gsap.fromTo(maskRef.current, 
        { clipPath: "inset(100% 0% 0% 0%)" },
        { 
          clipPath: "inset(0% 0% 0% 0%)",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
          }
        }
      );

      // Image Parallax & Scale
      gsap.fromTo(imageRef.current,
        { y: "-10%", scale: 1.2 },
        {
          y: "10%",
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          }
        }
      );

      // Text Reveal
      const textElements = textRef.current.children;
      gsap.fromTo(textElements,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`relative grid lg:grid-cols-12 gap-12 lg:gap-24 items-center min-h-[60vh] py-24 border-t border-primary/10`}
    >
      {/* Image Side */}
      <div className={`relative aspect-[3/4] lg:aspect-[4/5] overflow-hidden ${index % 2 !== 0 ? 'lg:col-start-7 lg:col-span-6 lg:order-2' : 'lg:col-span-6'}`}>
        <div 
          ref={maskRef}
          className="w-full h-full relative"
        >
          <img
            ref={imageRef}
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-[120%] object-cover will-change-transform"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-accent/10 mix-blend-multiply" />
        </div>
      </div>

      {/* Text Side */}
      <div ref={textRef} className={`flex flex-col justify-center ${index % 2 !== 0 ? 'lg:col-start-1 lg:col-span-5 lg:order-1' : 'lg:col-start-8 lg:col-span-5'}`}>
        <span className="micro-text text-accent mb-6 block">
          {project.category}
        </span>
        
        <h3 className="font-editorial text-[clamp(2.5rem,5vw,5rem)] uppercase leading-[0.85] tracking-tighter mb-8">
          {project.title}
        </h3>
        
        <p className="micro-text text-muted normal-case tracking-normal leading-relaxed mb-10 max-w-md">
          {project.description}
        </p>
        
        <button className="group flex items-center gap-4 text-primary hover:text-accent transition-colors w-fit">
          <span className="micro-text">Explorar Caso</span>
          <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-accent group-hover:text-secondary group-hover:border-accent transition-all duration-500">
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" strokeWidth={1} />
          </div>
        </button>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projetos" className="py-[var(--spacing-section-y)] bg-secondary overflow-hidden border-t border-primary/10">
      <div className="container">
        <div className="mb-24">
          <span className="micro-text text-muted mb-6 block">Casos de Sucesso</span>
          <h2 className="font-editorial text-[var(--text-fluid-h2)] leading-[0.85] tracking-tighter uppercase">
            Resultados que <br/><span className="italic text-accent">falam por si</span>.
          </h2>
        </div>

        <div className="flex flex-col">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
