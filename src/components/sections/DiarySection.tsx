import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import DiaryCard from "@/components/ui/DiaryCard";
import { MOCK_DIARY } from "@/lib/constants";

export default function DiarySection() {
  return (
    <section id="diario" className="py-24 md:py-32 px-6 lg:px-12 max-w-7xl mx-auto bg-linen">
      <AnimatedSection>
        <SectionHeading 
          title="Diario Visual." 
          subtitle="Proceso & Inspiración" 
        />
      </AnimatedSection>
      
      <AnimatedSection delay={1} className="mt-12">
        {/* CSS Columns mapping for Masonry effect */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {MOCK_DIARY.map((entry) => (
            <DiaryCard key={entry.id} entry={entry} />
          ))}
        </div>
      </AnimatedSection>
      
      <AnimatedSection delay={2} className="mt-16 text-center">
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 font-body text-charcoal hover:text-clay transition-colors"
        >
          <span className="uppercase tracking-widest text-sm">Ver más en Instagram</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </AnimatedSection>
    </section>
  );
}
