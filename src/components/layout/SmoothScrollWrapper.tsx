import { ReactNode, useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.config({ force3D: true }); // Força aceleração de hardware globalmente

interface SmoothScrollWrapperProps {
  children: ReactNode;
}

export function SmoothScrollWrapper({ children }: SmoothScrollWrapperProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Acessibilidade: Respeita a preferência do usuário por movimento reduzido
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      return; // Desativa o smooth scroll para quem prefere movimento reduzido
    }

    // Inicializa o Lenis com um damping (lerp) mais fluido para uma sensação "premium"
    const lenis = new Lenis({
      duration: 1.5,
      lerp: 0.05, 
      wheelMultiplier: 1.1,
      touchMultiplier: 2,
      smoothWheel: true,
      syncTouch: true,
    });

    console.log("Lenis Smooth Scroll Initialized", lenis);

    lenisRef.current = lenis;

    // Sincroniza o Lenis com o ScrollTrigger do GSAP
    lenis.on("scroll", ScrollTrigger.update);

    // Conecta o loop de requestAnimationFrame (raf) do GSAP ao Lenis
    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };
    
    gsap.ticker.add(updateLenis);

    // Desativa o lag smoothing do GSAP para evitar conflitos de tempo com o Lenis
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(updateLenis);
    };
  }, []);

  return <>{children}</>;
}
