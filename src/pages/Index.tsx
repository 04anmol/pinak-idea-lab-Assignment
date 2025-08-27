import HeroSection from "@/components/HeroSection";
import ProgramsSection from "@/components/ProgramsSection";
import CampusLifeSection from "@/components/CampusLifeSection";
import QuotePanel from "@/components/QuotePanel";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProgramsSection />
      <CampusLifeSection />
      <QuotePanel />
    </div>
  );
};

export default Index;
