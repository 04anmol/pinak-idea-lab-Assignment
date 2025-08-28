import HeroSection from "@/components/HeroSection";
import ProgramsSection from "@/components/ProgramsSection";
import CampusLifeSection from "@/components/CampusLifeSection";
import QuotePanel from "@/components/QuotePanel";
import SubHeroStrip from "@/components/SubHeroStrip";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SubHeroStrip />
      <HeroSection />
      <ProgramsSection />
      <CampusLifeSection />
      <QuotePanel />
    </div>
  );
};

export default Index;
