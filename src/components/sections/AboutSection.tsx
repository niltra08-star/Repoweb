import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { MOCK_CERTIFICATES } from "@/lib/constants";

export default function AboutSection() {
  return (
    <section id="sobre-mi" className="py-24 md:py-32 px-6 lg:px-12 max-w-7xl mx-auto">
      <AnimatedSection>
        <SectionHeading title="Filosofía." subtitle="Sobre Mí" />
      </AnimatedSection>

      <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start mt-12">
        {/* Left Column - Image */}
        <AnimatedSection 
          delay={1} 
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none">
            {/* Decorative border */}
            <div className="absolute inset-0 border-2 border-sand translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6 z-0" />
            
            {/* Image placeholder */}
            <div className="absolute inset-0 bg-stone z-10 overflow-hidden shadow-xl">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ 
                  backgroundImage: "url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')",
                  filter: "grayscale(0.3) contrast(1.1) brightness(1.05)"
                }}
              />
            </div>
            
            {/* Minimalist overlay block */}
            <div className="absolute -bottom-6 -left-6 md:-left-10 z-20 bg-warm-white p-6 md:p-8 shadow-xl max-w-[250px]">
              <p className="font-display text-2xl md:text-3xl text-clay leading-tight">
                "El espacio debe ser un reflejo del alma que lo habita."
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Right Column - Text & Certs */}
        <div className="lg:col-span-7 flex flex-col pt-8 md:pt-12">
          <AnimatedSection delay={2} className="prose prose-lg text-charcoal/80 font-body mb-16">
            <p className="text-xl leading-relaxed mb-6 font-light">
              Mi enfoque hacia el diseño de interiores nace de la observación pausa. 
              Creo profundamente en el <span className="font-medium text-clay">minimalismo cálido</span>, donde cada objeto tiene un propósito y respira dentro del espacio.
            </p>
            <p className="leading-relaxed mb-6 font-light">
              A lo largo de mi carrera, he buscado difuminar la línea entre la arquitectura 
              y el arte puro. No diseño habitaciones; compongo atmósferas. Selecciono 
              materiales que cuentan historias —piedra natural, maderas erosionadas, linos crudos— 
              para crear santuarios atemporales que invitan a la calma y la contemplación.
            </p>
            <p className="leading-relaxed font-light">
              Mi estudio es un laboratorio de experiencias espaciales donde la luz natural 
              es siempre el material principal. Si bien mi base técnica es rigurosa, 
              mi proceso es intrínsecamente intuitivo y emocional.
            </p>
          </AnimatedSection>

          {/* Certificates */}
          <AnimatedSection delay={3}>
            <h3 className="font-body text-sm uppercase tracking-widest text-charcoal mb-8 pb-4 border-b border-stone flex items-center gap-4">
              <span>Formación & Reconocimientos</span>
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
              {MOCK_CERTIFICATES.map((cert) => (
                <div key={cert.id} className="flex gap-4 group">
                  <div className="text-3xl opacity-80 group-hover:scale-110 transition-transform duration-300">
                    {cert.icon}
                  </div>
                  <div>
                    <h4 className="font-body font-medium text-charcoal text-lg mb-1 leading-snug">
                      {cert.title}
                    </h4>
                    <p className="font-body text-charcoal/60 text-sm mb-1">{cert.institution}</p>
                    <p className="font-mono text-sand text-xs tracking-wider">{cert.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
