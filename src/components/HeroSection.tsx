import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[70vh] flex items-center mx-8 md:mx-16 lg:mx-20 xl:mx-24 mt-4 rounded-t-3xl overflow-visible" style={{ backgroundColor: '#FFFAF0' }}>
      <div 
        className="absolute inset-0 rounded-t-3xl overflow-hidden"
      >
        <div className="absolute inset-0 bg-cover bg-no-repeat" style={{ backgroundImage: `url('/oxf.png')`, backgroundPosition: 'center 80%' }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10" style={{ minHeight: 'calc(100vh - 80px)' }}>
        {/* Overlay row aligned to bottom */}
        <div className="absolute bottom-0 left-6 right-0 flex items-end justify-between">
          {/* Bottom-left info text */}
          <div className="max-w-2xl md:max-w-3xl mb-6">
            <p className="text-white/95 text-xs md:text-sm lg:text-base leading-relaxed italic font-bold">
              Shaping tomorrow's engineers through excellence in education, research, and innovation.<br/>
              Join our distinguished community of scholars and industry leaders.
            </p>
          </div>

          {/* Bottom-right admissions card */}
          <div className="backdrop-blur-sm rounded-tl-xl rounded-tr-xl rounded-br-none rounded-bl-none w-full max-w-xl p-8 pr-12 pb-14 translate-x-16 md:translate-x-24 translate-y-6" style={{ backgroundColor: '#FFFAF0' }}>
            <h3 className="text-2xl font-serif text-college-navy mb-4 tracking-wide">Admissions</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Applications for the upcoming term are now open. Submit your online application and take the first step toward an engineering career at Pinak Engineering College.
            </p>
            <Button className="bg-[#6e1e2a] hover:bg-[#5a1822] text-white px-6 py-2 text-base font-medium rounded-md">
              Get started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;