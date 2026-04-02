import { useRef, useState, FormEvent } from "react";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { z } from "zod";

gsap.registerPlugin(ScrollTrigger);

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const contactFormSchema = z.object({
  fullName: z.string().min(3, "Nome deve ter no mínimo 3 caracteres").max(100, "Nome muito longo"),
  email: z.string().email("E-mail inválido"),
  message: z.string().min(10, "Mensagem deve ter no mínimo 10 caracteres").max(1000, "Mensagem muito longa"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState<ContactFormData>({ fullName: "", email: "", message: "" });
  const [formErrors, setFormErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  useGSAP(() => {
    const animatedElements = gsap.utils.toArray<HTMLElement>('.anim-element');
    
    animatedElements.forEach((element) => {
      if (!element) return;
      gsap.fromTo(element, 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
          }
        }
      );
    });
  }, { scope: containerRef });

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (formErrors[field]) {
      setFormErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setFormErrors({});

    try {
      const validatedData = contactFormSchema.parse(formData);
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // In a real scenario, you would send `validatedData` to your backend here.
      console.info("Form submitted successfully", validatedData);
      setSubmitStatus("success");
      setFormData({ fullName: "", email: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.issues.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setFormErrors(fieldErrors);
      } else {
        console.error("Unexpected error submitting form", error);
        setSubmitStatus("error");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section data-scroll-section id="contato" ref={containerRef} className="flex items-center py-[var(--spacing-section-y)] bg-primary text-secondary overflow-hidden">
      <div className="container grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        <div className="lg:col-span-6">
          <div className="inline-flex items-center gap-2 border border-secondary/20 text-secondary px-6 py-2 micro-text mb-12 w-fit">
            <span>Contato</span>
          </div>
          <h3 className="anim-element font-editorial text-[clamp(3rem,6vw,6rem)] leading-[0.85] tracking-tighter uppercase mb-16">
            Vamos <br/><span className="italic text-secondary">conversar</span> sobre o seu caso.
          </h3>
          
          <div className="space-y-12">
            <div className="anim-element flex items-start gap-6 group">
              <div className="border border-secondary/20 p-4 group-hover:bg-secondary group-hover:border-secondary transition-colors duration-500">
                <Phone className="text-secondary group-hover:text-primary transition-colors duration-500" size={24} strokeWidth={1} />
              </div>
              <div>
                <p className="micro-text text-secondary/70 mb-2">Telefone</p>
                <p className="text-xl md:text-2xl font-sans font-light text-secondary hover:text-secondary/70 transition-colors cursor-pointer">+55 (11) 99999-9999</p>
              </div>
            </div>

            <div className="anim-element flex items-start gap-6 group">
              <div className="border border-secondary/20 p-4 group-hover:bg-secondary group-hover:border-secondary transition-colors duration-500">
                <Mail className="text-secondary group-hover:text-primary transition-colors duration-500" size={24} strokeWidth={1} />
              </div>
              <div>
                <p className="micro-text text-secondary/70 mb-2">E-mail</p>
                <p className="text-xl md:text-2xl font-sans font-light text-secondary hover:text-secondary/70 transition-colors cursor-pointer">contato@cardoso.adv.br</p>
              </div>
            </div>

            <div className="anim-element flex items-start gap-6 group">
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

        <div className="lg:col-span-6 anim-element bg-secondary p-8 md:p-12 lg:p-16 border border-primary/10">
          <h4 className="font-editorial text-4xl text-primary uppercase tracking-tighter mb-12">Envie uma mensagem</h4>
          
          {submitStatus === "success" && (
            <div className="mb-8 p-4 bg-green-50/10 border border-green-500/50 text-green-700 font-sans text-sm">
              Mensagem enviada com sucesso. Retornaremos em breve.
            </div>
          )}
          
          {submitStatus === "error" && (
            <div className="mb-8 p-4 bg-red-50/10 border border-red-500/50 text-red-700 font-sans text-sm">
              Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-10" noValidate>
            <div className="space-y-4">
              <label htmlFor="fullName" className="micro-text text-muted">Nome Completo</label>
              <input 
                id="fullName"
                type="text" 
                value={formData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                className="w-full bg-transparent border-b border-primary/20 py-4 text-primary focus:border-primary outline-none transition-colors font-light text-lg"
                placeholder="Como podemos te chamar?"
                disabled={isSubmitting}
              />
              {formErrors.fullName && <p className="text-red-500 text-xs font-sans mt-1">{formErrors.fullName}</p>}
            </div>
            <div className="space-y-4">
              <label htmlFor="email" className="micro-text text-muted">E-mail</label>
              <input 
                id="email"
                type="email" 
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full bg-transparent border-b border-primary/20 py-4 text-primary focus:border-primary outline-none transition-colors font-light text-lg"
                placeholder="seu@email.com"
                disabled={isSubmitting}
              />
              {formErrors.email && <p className="text-red-500 text-xs font-sans mt-1">{formErrors.email}</p>}
            </div>
            <div className="space-y-4">
              <label htmlFor="message" className="micro-text text-muted">Mensagem</label>
              <textarea 
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                className="w-full bg-transparent border-b border-primary/20 py-4 text-primary focus:border-primary outline-none transition-colors resize-none font-light text-lg"
                placeholder="Descreva brevemente sua necessidade..."
                disabled={isSubmitting}
              />
              {formErrors.message && <p className="text-red-500 text-xs font-sans mt-1">{formErrors.message}</p>}
            </div>
            <button 
              type="submit"
              disabled={isSubmitting}
              className="group w-full flex items-center justify-between border border-primary text-primary px-8 py-6 hover:bg-primary hover:text-secondary transition-all duration-500 mt-12 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="micro-text">{isSubmitting ? "Enviando..." : "Enviar Mensagem"}</span>
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-500" strokeWidth={1} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
