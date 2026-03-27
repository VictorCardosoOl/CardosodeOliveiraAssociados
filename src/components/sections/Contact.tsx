import { useRef } from "react";
import { usePremiumAnimation } from "@/hooks/usePremiumAnimation";
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

  usePremiumAnimation(containerRef);

  return (
    <section id="contato" ref={containerRef} className="flex items-center py-[var(--spacing-section-y)] bg-primary text-secondary overflow-hidden">
      <div className="container grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        <div className="lg:col-span-6">
          <div className="inline-flex items-center gap-2 border border-secondary/20 text-secondary px-6 py-2 micro-text mb-12 w-fit">
            <span>Contato</span>
          </div>
          <h3 className="anim-title font-editorial text-[clamp(3rem,6vw,6rem)] leading-[0.85] tracking-tighter uppercase mb-16">
            Vamos <br/><span className="italic text-secondary">conversar</span> sobre o seu caso.
          </h3>
          
          <div className="anim-stagger-container space-y-12">
            <div className="anim-stagger-item flex items-start gap-6 group">
              <div className="border border-secondary/20 p-4 group-hover:bg-secondary group-hover:border-secondary transition-colors duration-500">
                <Phone className="text-secondary group-hover:text-primary transition-colors duration-500" size={24} strokeWidth={1} />
              </div>
              <div>
                <p className="micro-text text-secondary/70 mb-2">Telefone</p>
                <p className="text-xl md:text-2xl font-sans font-light text-secondary hover:text-secondary/70 transition-colors cursor-pointer">+55 (11) 99999-9999</p>
              </div>
            </div>

            <div className="anim-stagger-item flex items-start gap-6 group">
              <div className="border border-secondary/20 p-4 group-hover:bg-secondary group-hover:border-secondary transition-colors duration-500">
                <Mail className="text-secondary group-hover:text-primary transition-colors duration-500" size={24} strokeWidth={1} />
              </div>
              <div>
                <p className="micro-text text-secondary/70 mb-2">E-mail</p>
                <p className="text-xl md:text-2xl font-sans font-light text-secondary hover:text-secondary/70 transition-colors cursor-pointer">contato@cardoso.adv.br</p>
              </div>
            </div>

            <div className="anim-stagger-item flex items-start gap-6 group">
              <div className="border border-secondary/20 p-4 group-hover:bg-secondary group-hover:border-secondary transition-colors duration-500">
                <MapPin className="text-secondary group-hover:text-primary transition-colors duration-500" size={24} strokeWidth={1} />
              </div>
              <div>
                <p className="micro-text text-secondary/70 mb-2">Endereço</p>
                <p className="text-xl md:text-2xl font-sans font-light text-secondary leading-relaxed">Av. Paulista, 1000 — 12º Andar<br />Jardins, São Paulo — SP</p>
              </div>
            </div>

            <div className="mt-16 w-full h-64 md:h-80 relative z-0 border border-secondary/20 p-2">
              <MapContainer center={[-23.5641095, -46.6524099]} zoom={15} scrollWheelZoom={false} className="w-full h-full z-0 grayscale contrast-125">
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[-23.5641095, -46.6524099]}>
                  <Popup>
                    <span className="font-sans font-bold text-primary">Tayna C. B. Oliveira Advocacia</span><br />
                    Av. Paulista, 1000 — 12º Andar
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 anim-fade-up bg-secondary p-8 md:p-12 lg:p-16 border border-primary/10">
          <h4 className="font-editorial text-4xl text-primary uppercase tracking-tighter mb-12">Envie uma mensagem</h4>
          <form className="space-y-10">
            <div className="space-y-4">
              <label className="micro-text text-muted">Nome Completo</label>
              <input 
                type="text" 
                className="w-full bg-transparent border-b border-primary/20 py-4 text-primary focus:border-primary outline-none transition-colors font-light text-lg"
                placeholder="Como podemos te chamar?"
              />
            </div>
            <div className="space-y-4">
              <label className="micro-text text-muted">E-mail</label>
              <input 
                type="email" 
                className="w-full bg-transparent border-b border-primary/20 py-4 text-primary focus:border-primary outline-none transition-colors font-light text-lg"
                placeholder="seu@email.com"
              />
            </div>
            <div className="space-y-4">
              <label className="micro-text text-muted">Mensagem</label>
              <textarea 
                rows={4}
                className="w-full bg-transparent border-b border-primary/20 py-4 text-primary focus:border-primary outline-none transition-colors resize-none font-light text-lg"
                placeholder="Descreva brevemente sua necessidade..."
              />
            </div>
            <button className="group w-full flex items-center justify-between border border-primary text-primary px-8 py-6 hover:bg-primary hover:text-secondary transition-all duration-500 mt-12">
              <span className="micro-text">Enviar Mensagem</span>
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-500" strokeWidth={1} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
