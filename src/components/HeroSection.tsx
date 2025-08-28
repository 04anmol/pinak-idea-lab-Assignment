import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, GraduationCap } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-subtle mx-8 md:mx-16 lg:mx-20 xl:mx-24 mt-10 rounded-3xl overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{ backgroundImage: `url('/oxf.png')`, backgroundPosition: 'center 95%' }}
      />
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col justify-between" style={{ minHeight: 'calc(100vh - 80px)' }}>
        <div className="max-w-5xl mx-auto text-center pt-12">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-light mb-8 leading-tight text-college-navy whitespace-nowrap">
            <span className="italic">Welcome to</span> <span className="font-bold text-college-charcoal">Pinak Engineering College</span>
          </h1>
        </div>
        
        <div className="flex items-end justify-between mb-8">
          {/* Stats - Bottom Left */}
          <div className="flex flex-col space-y-6 relative z-20">
            <div className="text-left">
              <div className="w-16 h-16 bg-white border border-college-silver rounded-full flex items-center justify-center mb-3 shadow-lg">
                <BookOpen className="h-8 w-8 text-college-navy" />
              </div>
              <div className="text-2xl font-bold text-white drop-shadow-lg">15+</div>
              <div className="text-sm text-white drop-shadow-md">Engineering Programs</div>
            </div>
            <div className="text-left">
              <div className="w-16 h-16 bg-white border border-college-silver rounded-full flex items-center justify-center mb-3 shadow-lg">
                <Users className="h-8 w-8 text-college-navy" />
              </div>
              <div className="text-2xl font-bold text-white drop-shadow-lg">5,000+</div>
              <div className="text-sm text-white drop-shadow-md">Students</div>
            </div>
            <div className="text-left">
              <div className="w-16 h-16 bg-white border border-college-silver rounded-full flex items-center justify-center mb-3 shadow-lg">
                <GraduationCap className="h-8 w-8 text-college-navy" />
              </div>
              <div className="text-2xl font-bold text-white drop-shadow-lg">95%</div>
              <div className="text-sm text-white drop-shadow-md">Graduate Employment</div>
            </div>
          </div>
          
          {/* Description - Center Bottom */}
          <div className="flex-1 max-w-4xl mx-8 text-center self-end mt-24">
            <p className="text-lg md:text-xl leading-relaxed text-white font-medium italic">
              Shaping tomorrow's engineers through excellence in education and innovation. <br/>
              Join our distinguished community of scholars and industry leaders.
            </p>
          </div>
          
          {/* Buttons - Bottom Right */}
          <div className="flex flex-col gap-3">
            <Button size="lg" className="bg-college-navy hover:bg-blue-800 text-white px-8 py-3 text-base font-medium rounded-xl transition-colors duration-200 border border-white">
              Apply Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" className="bg-amber-50 text-college-navy hover:bg-blue-800 hover:text-white px-8 py-3 text-base font-medium rounded-xl transition-colors duration-200">
              Explore Programs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;