import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { ArrowRight } from "lucide-react";

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
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1200&auto=format&fit=crop",
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

const ProjectCard = ({ project, index }: { project: Project; index: number; key?: React.Key }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Pattern A: Parallax Direcional
  const yParallax = useTransform(smoothProgress, [0, 1], ["-20%", "20%"]);
  
  // Pattern B: Mask Reveal (Clip Path)
  const clipPath = useTransform(
    smoothProgress,
    [0, 0.3, 0.7, 1],
    [
      "inset(100% 0% 0% 0%)",
      "inset(0% 0% 0% 0%)",
      "inset(0% 0% 0% 0%)",
      "inset(0% 0% 100% 0%)"
    ]
  );

  const scale = useTransform(smoothProgress, [0, 0.5, 1], [1.2, 1, 1.2]);

  return (
    <div 
      ref={containerRef}
      className={`relative grid lg:grid-cols-12 gap-12 lg:gap-24 items-center min-h-[60vh] py-24 border-t border-primary/10`}
    >
      {/* Image Side */}
      <div className={`relative aspect-[3/4] lg:aspect-[4/5] overflow-hidden ${index % 2 !== 0 ? 'lg:col-start-7 lg:col-span-6 lg:order-2' : 'lg:col-span-6'}`}>
        <motion.div 
          style={{ clipPath }}
          className="w-full h-full relative"
        >
          <motion.img
            src={project.image}
            alt={project.title}
            style={{ y: yParallax, scale }}
            className="absolute inset-0 w-full h-[140%] object-cover will-change-transform"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-accent/10 mix-blend-multiply" />
        </motion.div>
      </div>

      {/* Text Side */}
      <div className={`flex flex-col justify-center ${index % 2 !== 0 ? 'lg:col-start-1 lg:col-span-5 lg:order-1' : 'lg:col-start-8 lg:col-span-5'}`}>
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="micro-text text-accent mb-6"
        >
          {project.category}
        </motion.span>
        
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-editorial text-[clamp(2.5rem,5vw,5rem)] uppercase leading-[0.85] tracking-tighter mb-8"
        >
          {project.title}
        </motion.h3>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="micro-text text-muted normal-case tracking-normal leading-relaxed mb-10 max-w-md"
        >
          {project.description}
        </motion.p>
        
        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="group flex items-center gap-4 text-primary hover:text-accent transition-colors w-fit"
        >
          <span className="micro-text">Explorar Caso</span>
          <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-accent group-hover:text-secondary group-hover:border-accent transition-all duration-500">
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" strokeWidth={1} />
          </div>
        </motion.button>
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
