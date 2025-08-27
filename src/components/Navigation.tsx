import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="bg-white border-b border-college-silver shadow-sm py-4 sticky top-0 z-50">
      <div className="mx-8 md:mx-16 lg:mx-20 xl:mx-24 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-college-navy rounded-full flex items-center justify-center">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-college-navy">Pinak Engineering College</h1>
              <p className="text-xs text-muted-foreground">Excellence in Engineering Education</p>
            </div>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-college-navy hover:text-college-accent transition-colors font-medium">Home</a>
          <a href="#about" className="text-college-navy hover:text-college-accent transition-colors font-medium">About</a>
          <a href="#programs" className="text-college-navy hover:text-college-accent transition-colors font-medium">Programs</a>
          <a href="#campus" className="text-college-navy hover:text-college-accent transition-colors font-medium">Campus Life</a>
          <a href="#contact" className="text-college-navy hover:text-college-accent transition-colors font-medium">Contact</a>
        </div>
        
        <Button className="bg-college-navy hover:bg-college-charcoal text-white px-6 py-2">
          Admissions
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;