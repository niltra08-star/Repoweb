import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import DiarySection from "@/components/sections/DiarySection";
import ServiceRequestSection from "@/components/sections/ServiceRequestSection";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/ui/FloatingCTA";

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-clay selection:text-warm-white">
      <Navbar />
      <HeroSection />
      
      {/* Spacer para dar aire tras el hero */}
      <div className="h-24 md:h-32 bg-gradient-to-b from-stone to-linen" />
      
      <AboutSection />
      
      <ProjectsSection />
      <DiarySection />
      <ServiceRequestSection />

      <Footer />

      <FloatingCTA />
    </main>
  );
}
