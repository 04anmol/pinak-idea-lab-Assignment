import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="bg-amber-50 shadow-sm py-4 sticky top-0 z-50">
      <div className="mx-8 md:mx-16 lg:mx-20 xl:mx-24 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div>
            <h1 className="text-xl font-sans font-bold text-college-navy tracking-wide">Pinak Engineering College</h1>
            <p className="text-xs text-muted-foreground">Excellence in Engineering Education</p>
          </div>
        </div>
        
        <div className="w-16 h-16 flex items-center justify-center">
          <img src="/P-removebg-preview.png" alt="Pinak Engineering College Logo" className="w-16 h-16 object-contain" />
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-8 bg-amber-50 rounded-xl px-6 py-2 shadow-sm border-2 border-college-silver">
            <a href="#home" className="text-college-navy hover:text-college-accent transition-colors font-medium">Home</a>
            <a href="#about" className="text-college-navy hover:text-college-accent transition-colors font-medium">About</a>
            <a href="#programs" className="text-college-navy hover:text-college-accent transition-colors font-medium">Programs</a>
            <a href="#campus" className="text-college-navy hover:text-college-accent transition-colors font-medium">Campus Life</a>
            <a href="#contact" className="text-college-navy hover:text-college-accent transition-colors font-medium">Contact</a>
          </div>
          
          <Button className="bg-college-navy hover:bg-college-charcoal text-white px-6 py-2 rounded-xl transition-colors duration-200 text-base font-medium">
            Admissions
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;