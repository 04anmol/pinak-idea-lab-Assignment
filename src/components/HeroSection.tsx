import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, GraduationCap } from "lucide-react";
import heroCampus from "@/assets/hero-campus.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-subtle">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${heroCampus})` }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight text-college-navy">
            Welcome to
            <span className="block font-bold text-college-charcoal">Pinak Engineering College</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-12 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Shaping tomorrow's engineers through excellence in education, research, and innovation. 
            Join our distinguished community of scholars and industry leaders.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-college-navy hover:bg-college-charcoal text-white px-10 py-4 text-lg font-medium">
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-college-navy text-college-navy hover:bg-college-navy hover:text-white px-10 py-4 text-lg font-medium">
              Explore Programs
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-white border border-college-silver rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <BookOpen className="h-8 w-8 text-college-navy" />
              </div>
              <div className="text-2xl font-bold text-college-navy mb-2">15+</div>
              <div className="text-muted-foreground">Engineering Programs</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white border border-college-silver rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Users className="h-8 w-8 text-college-navy" />
              </div>
              <div className="text-2xl font-bold text-college-navy mb-2">5,000+</div>
              <div className="text-muted-foreground">Students</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white border border-college-silver rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <GraduationCap className="h-8 w-8 text-college-navy" />
              </div>
              <div className="text-2xl font-bold text-college-navy mb-2">95%</div>
              <div className="text-muted-foreground">Graduate Employment</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;