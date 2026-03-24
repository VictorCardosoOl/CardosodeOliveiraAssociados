import { ReactNode, useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

    // Inicializa o Lenis com um damping (lerp) luxuoso e pesado (0.08)
    const lenis = new Lenis({
      lerp: 0.08, // Amortecimento suave para sensação de "peso"
      wheelMultiplier: 1,
      touchMultiplier: 2,
      syncTouch: true, // Sincroniza melhor o toque no mobile
    });

    lenisRef.current = lenis;

    // Sincroniza o Lenis com o ScrollTrigger do GSAP
    lenis.on("scroll", ScrollTrigger.update);

    // Conecta o loop de requestAnimationFrame (raf) do GSAP ao Lenis
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Desativa o lag smoothing do GSAP para evitar conflitos de tempo com o Lenis
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, []);

  return <>{children}</>;
}
