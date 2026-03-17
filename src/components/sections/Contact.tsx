import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default marker icon in react-leaflet
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".contact-item",
      { x: -30, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".contact-form",
      { x: 30, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section id="contato" ref={containerRef} className="min-h-screen flex items-center py-24 2xl:py-40 bg-primary text-secondary overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 3xl:px-24 grid lg:grid-cols-2 gap-24 3xl:gap-40 items-center">
        <div className="max-w-2xl 3xl:max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 text-accent text-xs font-bold uppercase tracking-wider mb-8 rounded-sm">
            <span>Contato</span>
          </div>
          <h3 className="font-serif font-medium text-5xl md:text-7xl 3xl:text-8xl leading-[0.95] tracking-tighter mb-12">
            Vamos <br/><span className="text-accent">conversar</span> sobre o seu caso.
          </h3>
          
          <div className="space-y-12">
            <div className="contact-item flex items-start gap-6 group">
              <div className="bg-secondary/5 p-4 rounded-full group-hover:bg-accent transition-colors duration-500">
                <Phone className="text-accent group-hover:text-primary transition-colors duration-500" size={24} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-accent font-bold mb-2">Telefone</p>
                <p className="text-xl md:text-2xl font-sans font-light text-secondary hover:text-accent transition-colors cursor-pointer">+55 (11) 99999-9999</p>
              </div>
            </div>

            <div className="contact-item flex items-start gap-6 group">
              <div className="bg-secondary/5 p-4 rounded-full group-hover:bg-accent transition-colors duration-500">
                <Mail className="text-accent group-hover:text-primary transition-colors duration-500" size={24} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-accent font-bold mb-2">E-mail</p>
                <p className="text-xl md:text-2xl font-sans font-light text-secondary hover:text-accent transition-colors cursor-pointer">contato@cardoso.adv.br</p>
              </div>
            </div>

            <div className="contact-item flex items-start gap-6 group">
              <div className="bg-secondary/5 p-4 rounded-full group-hover:bg-accent transition-colors duration-500">
                <MapPin className="text-accent group-hover:text-primary transition-colors duration-500" size={24} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-accent font-bold mb-2">Endereço</p>
                <p className="text-xl md:text-2xl font-sans font-light text-secondary leading-relaxed">Av. Paulista, 1000 — 12º Andar<br />Jardins, São Paulo — SP</p>
              </div>
            </div>

            <div className="contact-item mt-12 3xl:mt-16 w-full h-64 md:h-80 3xl:h-96 relative z-0 border border-secondary/10 rounded-sm overflow-hidden">
              <MapContainer center={[-23.5641095, -46.6524099]} zoom={15} scrollWheelZoom={false} className="w-full h-full z-0 grayscale contrast-125">
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[-23.5641095, -46.6524099]}>
                  <Popup>
                    <span className="font-sans font-bold text-primary">Cardoso de Oliveira Associados</span><br />
                    Av. Paulista, 1000 — 12º Andar
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>

        <div className="contact-form bg-secondary p-12 md:p-16 rounded-sm border-t-4 border-accent">
          <h4 className="font-serif font-medium text-4xl text-primary mb-10">Envie uma mensagem</h4>
          <form className="space-y-8">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-primary/50 font-bold">Nome Completo</label>
              <input 
                type="text" 
                className="w-full bg-transparent border-b border-gray-200 py-4 text-primary focus:border-accent outline-none transition-colors font-light"
                placeholder="Como podemos te chamar?"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-primary/50 font-bold">E-mail</label>
              <input 
                type="email" 
                className="w-full bg-transparent border-b border-gray-200 py-4 text-primary focus:border-accent outline-none transition-colors font-light"
                placeholder="seu@email.com"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-primary/50 font-bold">Mensagem</label>
              <textarea 
                rows={4}
                className="w-full bg-transparent border-b border-gray-200 py-4 text-primary focus:border-accent outline-none transition-colors resize-none font-light"
                placeholder="Descreva brevemente sua necessidade..."
              />
            </div>
            <button className="group w-full flex items-center justify-between bg-accent text-secondary px-10 py-6 hover:bg-accent-light transition-all duration-500 rounded-full mt-8">
              <span className="font-medium uppercase tracking-widest text-sm">Enviar Mensagem</span>
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-500" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
