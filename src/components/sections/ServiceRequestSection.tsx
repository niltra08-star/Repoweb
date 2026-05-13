"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import StepIndicator from "@/components/ui/StepIndicator";
import { ServiceRequest, SpaceType, StyleType, BudgetRange, Timeline } from "@/types";

const SPACE_OPTIONS: { type: SpaceType; icon: string; desc: string }[] = [
  { type: "Residencial", icon: "🏡", desc: "Viviendas, apartamentos o chalets" },
  { type: "Comercial", icon: "🛍️", desc: "Tiendas, boutiques o locales" },
  { type: "Hostelería", icon: "🍷", desc: "Restaurantes, cafés o bares" },
  { type: "Oficina", icon: "💻", desc: "Espacios de trabajo creativos" },
];

const STYLE_OPTIONS: { type: StyleType; image: string }[] = [
  { type: "Minimalista Cálido", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=500&q=80" },
  { type: "Mediterráneo", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&q=80" },
  { type: "Industrial", image: "https://images.unsplash.com/photo-1556020685-e631933f1155?w=500&q=80" },
  { type: "Contemporáneo", image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=500&q=80" },
];

const BUDGET_OPTIONS: BudgetRange[] = ["< 10k€", "10-25k€", "25-50k€", "50k€+"];
const TIMELINE_OPTIONS: Timeline[] = ["1-3 meses", "3-6 meses", "6-12 meses", "Flexible"];

export default function ServiceRequestSection() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<ServiceRequest>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateForm = (key: keyof ServiceRequest, value: any) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, 5));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => setIsSubmitted(true), 1000);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  const [[page, direction], setPage] = useState([1, 0]);

  const paginate = (newDirection: number) => {
    setPage([step + newDirection, newDirection]);
    if (newDirection > 0) nextStep();
    if (newDirection < 0) prevStep();
  };

  return (
    <section id="solicitar-servicio" className="py-24 md:py-32 px-6 lg:px-12 bg-stone min-h-screen flex flex-col justify-center">
      <div className="max-w-4xl mx-auto w-full">
        <AnimatedSection>
          <SectionHeading title="Comenzar Proyecto." subtitle="Solicitar Servicios" align="center" />
        </AnimatedSection>
        
        {isSubmitted ? (
           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             className="bg-linen p-12 text-center shadow-xl rounded-sm"
           >
             <div className="text-6xl mb-6">✨</div>
             <h3 className="font-display text-4xl text-charcoal mb-4">¡Gracias por tu interés!</h3>
             <p className="font-body text-charcoal/70 mb-8 max-w-md mx-auto">
               He recibido los detalles de tu espacio. Revisaré tu idea y me pondré en contacto contigo en las próximas 48 horas.
             </p>
             <button 
               onClick={() => { setIsSubmitted(false); setStep(1); setFormData({}); setPage([1, 0]); }}
               className="px-8 py-3 bg-clay text-white rounded-full font-body tracking-wider uppercase text-sm hover:bg-clay/90 transition-colors"
             >
               Iniciar nueva solicitud
             </button>
           </motion.div>
        ) : (
          <AnimatedSection delay={1} className="bg-linen shadow-xl rounded-sm p-6 md:p-12 mt-8 overflow-hidden relative">
            <StepIndicator currentStep={step} totalSteps={5} />
            
            <div className="min-h-[400px] relative">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={step}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                  className="w-full flex justify-center"
                >
                  {/* STEP 1: Tipo de Espacio */}
                  {step === 1 && (
                    <div className="w-full max-w-2xl">
                      <h3 className="font-display text-3xl text-center text-charcoal mb-8">¿Qué tipo de espacio planeas transformar?</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {SPACE_OPTIONS.map((opt) => (
                          <div 
                            key={opt.type}
                            onClick={() => { updateForm("spaceType", opt.type); paginate(1); }}
                            className={`
                              p-6 border-2 cursor-pointer transition-all duration-300 flex flex-col items-center text-center gap-3
                              ${formData.spaceType === opt.type ? "border-clay bg-warm-white" : "border-stone bg-white hover:border-sand"}
                            `}
                          >
                            <span className="text-4xl">{opt.icon}</span>
                            <span className="font-body font-medium text-lg">{opt.type}</span>
                            <span className="font-body text-charcoal/50 text-sm">{opt.desc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* STEP 2: Estilo */}
                  {step === 2 && (
                    <div className="w-full max-w-3xl">
                      <h3 className="font-display text-3xl text-center text-charcoal mb-8">Selecciona la atmósfera que más te inspire</h3>
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {STYLE_OPTIONS.map((style) => (
                          <div 
                            key={style.type}
                            onClick={() => { updateForm("style", style.type); paginate(1); }}
                            className="group cursor-pointer relative overflow-hidden aspect-[4/5]"
                          >
                            <div 
                              className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110`}
                              style={{ backgroundImage: `url(${style.image})` }}
                            />
                            <div className={`absolute inset-0 transition-colors duration-300 ${formData.style === style.type ? "bg-clay/40" : "bg-black/30 group-hover:bg-charcoal/20"}`} />
                            <div className="absolute inset-0 p-4 flex items-end justify-center">
                              <span className="font-body text-warm-white text-center font-medium leading-tight">
                                {style.type}
                              </span>
                            </div>
                            {formData.style === style.type && (
                              <div className="absolute top-4 right-4 bg-white rounded-full p-1 text-clay">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                  <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* STEP 3: Presupuesto & STEP 4: Plazos (Combined for simplicity here, but can be split) */}
                  {step === 3 && (
                    <div className="w-full max-w-xl text-center">
                      <h3 className="font-display text-3xl text-charcoal mb-8">¿Cuál es tu rango de presupuesto estimado?</h3>
                      <div className="flex flex-col gap-3">
                        {BUDGET_OPTIONS.map((budget) => (
                          <button
                            key={budget}
                            onClick={() => { updateForm("budget", budget); paginate(1); }}
                            className={`
                              py-4 px-6 w-full font-body text-lg border-2 transition-colors
                              ${formData.budget === budget ? "bg-clay text-white border-clay" : "bg-white border-stone text-charcoal hover:border-sand"}
                            `}
                          >
                            {budget}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 4 && (
                    <div className="w-full max-w-xl text-center">
                      <h3 className="font-display text-3xl text-charcoal mb-8">¿Qué plazos de ejecución tienes en mente?</h3>
                      <div className="flex flex-col gap-3">
                        {TIMELINE_OPTIONS.map((time) => (
                          <button
                            key={time}
                            onClick={() => { updateForm("timeline", time); paginate(1); }}
                            className={`
                              py-4 px-6 w-full font-body text-lg border-2 transition-colors
                              ${formData.timeline === time ? "bg-clay text-white border-clay" : "bg-white border-stone text-charcoal hover:border-sand"}
                            `}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* STEP 5: Contacto */}
                  {step === 5 && (
                    <div className="w-full max-w-xl">
                      <h3 className="font-display text-3xl text-center text-charcoal mb-4">Un último detalle</h3>
                      <p className="font-body text-center text-charcoal/60 mb-8">Déjame tus datos y una breve descripción de lo que imaginas.</p>
                      
                      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <div className="grid grid-cols-2 gap-5">
                          <input 
                            required type="text" placeholder="Tu Nombre *" 
                            value={formData.name || ""} onChange={e => updateForm("name", e.target.value)}
                            className="p-4 bg-white border border-stone font-body focus:border-clay focus:outline-none transition-colors"
                          />
                          <input 
                            type="tel" placeholder="Teléfono" 
                            value={formData.phone || ""} onChange={e => updateForm("phone", e.target.value)}
                            className="p-4 bg-white border border-stone font-body focus:border-clay focus:outline-none transition-colors"
                          />
                        </div>
                        <input 
                          required type="email" placeholder="Tu Correo Electrónico *" 
                          value={formData.email || ""} onChange={e => updateForm("email", e.target.value)}
                          className="p-4 bg-white border border-stone font-body focus:border-clay focus:outline-none transition-colors"
                        />
                        <textarea 
                          rows={4} placeholder="Cuéntame más sobre el proyecto..." 
                          value={formData.description || ""} onChange={e => updateForm("description", e.target.value)}
                          className="p-4 bg-white border border-stone font-body focus:border-clay focus:outline-none transition-colors resize-none"
                        />
                        
                        <div className="mt-4 flex justify-between items-center bg-stone/50 p-4 rounded-sm">
                          <div className="font-body text-xs text-charcoal/60 space-y-1">
                            <p><span className="font-medium text-clay">Tipo:</span> {formData.spaceType || "No seleccionado"}</p>
                            <p><span className="font-medium text-clay">Estilo:</span> {formData.style || "No seleccionado"}</p>
                          </div>
                          <button 
                            type="submit"
                            className="px-8 py-3 bg-clay hover:bg-clay/90 text-white font-body tracking-widest uppercase transition-colors"
                          >
                            Enviar Propuesta
                          </button>
                        </div>
                      </form>
                    </div>
                  )}

                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation back */}
            {step > 1 && step < 5 && (
              <div className="absolute top-6 left-6 md:top-12 md:left-12">
                <button 
                  onClick={() => paginate(-1)}
                  className="p-2 border border-stone hover:border-clay text-charcoal/50 hover:text-clay transition-colors rounded-full"
                  aria-label="Anterior"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </svg>
                </button>
              </div>
            )}
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
