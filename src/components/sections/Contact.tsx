import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Mail, MapPin, Phone, MessageSquare, ArrowRight } from "lucide-react";

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".contact-item",
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".contact-form",
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section id="contato" ref={containerRef} className="min-h-screen flex items-center py-24 bg-primary text-secondary overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 3xl:px-24 grid lg:grid-cols-2 gap-24 3xl:gap-40 items-center">
        <div className="max-w-2xl 3xl:max-w-3xl">
          <h2 className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-8">Contato</h2>
          <h3 className="font-serif text-5xl md:text-7xl 3xl:text-8xl leading-tight mb-12">
            Vamos <span className="italic">conversar</span> sobre o seu caso.
          </h3>
          
          <div className="space-y-12">
            <div className="contact-item flex items-start gap-6 group">
              <div className="bg-secondary/10 p-4 group-hover:bg-accent transition-colors duration-500">
                <Phone className="text-accent group-hover:text-primary transition-colors duration-500" size={24} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-accent font-bold mb-2">Telefone</p>
                <p className="text-xl md:text-2xl font-serif text-secondary hover:text-accent transition-colors cursor-pointer">+55 (11) 99999-9999</p>
              </div>
            </div>

            <div className="contact-item flex items-start gap-6 group">
              <div className="bg-secondary/10 p-4 group-hover:bg-accent transition-colors duration-500">
                <Mail className="text-accent group-hover:text-primary transition-colors duration-500" size={24} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-accent font-bold mb-2">E-mail</p>
                <p className="text-xl md:text-2xl font-serif text-secondary hover:text-accent transition-colors cursor-pointer">contato@cardoso.adv.br</p>
              </div>
            </div>

            <div className="contact-item flex items-start gap-6 group">
              <div className="bg-secondary/10 p-4 group-hover:bg-accent transition-colors duration-500">
                <MapPin className="text-accent group-hover:text-primary transition-colors duration-500" size={24} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-accent font-bold mb-2">Endereço</p>
                <p className="text-xl md:text-2xl font-serif text-secondary leading-relaxed">Av. Paulista, 1000 — 12º Andar<br />Jardins, São Paulo — SP</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form bg-secondary p-12 md:p-16">
          <h4 className="font-serif text-3xl text-primary mb-10">Envie uma mensagem</h4>
          <form className="space-y-8">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-primary/50 font-bold">Nome Completo</label>
              <input 
                type="text" 
                className="w-full bg-transparent border-b border-primary/10 py-4 text-primary focus:border-accent outline-none transition-colors"
                placeholder="Como podemos te chamar?"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-primary/50 font-bold">E-mail</label>
              <input 
                type="email" 
                className="w-full bg-transparent border-b border-primary/10 py-4 text-primary focus:border-accent outline-none transition-colors"
                placeholder="seu@email.com"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-primary/50 font-bold">Mensagem</label>
              <textarea 
                rows={4}
                className="w-full bg-transparent border-b border-primary/10 py-4 text-primary focus:border-accent outline-none transition-colors resize-none"
                placeholder="Descreva brevemente sua necessidade..."
              />
            </div>
            <button className="group w-full flex items-center justify-between bg-primary text-secondary px-10 py-6 hover:bg-accent transition-all duration-500">
              <span className="font-medium uppercase tracking-widest text-sm">Enviar Mensagem</span>
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-500" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
