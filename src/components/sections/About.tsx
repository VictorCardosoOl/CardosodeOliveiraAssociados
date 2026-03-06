import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".about-text span",
      { opacity: 0.2 },
      {
        opacity: 1,
        stagger: 0.1,
        ease: "none",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "bottom 60%",
          scrub: true,
        },
      }
    );
  }, { scope: containerRef });

  const text = "Somos um escritório fundado e liderado por mulheres. Acreditamos que a advocacia de excelência exige mais do que conhecimento técnico; exige sensibilidade, escuta ativa e uma postura combativa contra injustiças. Nosso compromisso é com a sua tranquilidade.";
  const words = text.split(" ");

  return (
    <section id="o-escritorio" ref={containerRef} className="py-24 md:py-40 bg-secondary">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center">
        <h2 className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-12">Nosso Propósito</h2>
        
        <div ref={textRef} className="about-text max-w-5xl font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.3] text-primary">
          {words.map((word, i) => (
            <span key={i} className="inline-block mr-[0.25em]">
              {word}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
