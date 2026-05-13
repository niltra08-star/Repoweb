import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import BentoCard from "@/components/ui/BentoCard";
import { MOCK_PROJECTS } from "@/lib/constants";

export default function ProjectsSection() {
  return (
    <section id="proyectos" className="py-24 md:py-32 px-6 lg:px-12 max-w-7xl mx-auto">
      <AnimatedSection>
        <SectionHeading title="Espacios." subtitle="Proyectos Seleccionados" align="right" />
      </AnimatedSection>

      <AnimatedSection delay={1} className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[250px] md:auto-rows-[300px] gap-4 md:gap-6">
          {MOCK_PROJECTS.map((project) => (
            <BentoCard key={project.id} project={project} />
          ))}
        </div>
      </AnimatedSection>
      
      <AnimatedSection delay={2} className="mt-16 flex justify-center">
        <button className="font-body text-sm uppercase tracking-widest text-charcoal/60 hover:text-clay transition-colors border-b border-transparent hover:border-clay pb-1">
          Ver Archivo Completo
        </button>
      </AnimatedSection>
    </section>
  );
}
