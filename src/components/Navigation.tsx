import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="shadow-sm py-4 sticky top-0 z-50 border-b" style={{ backgroundColor: '#FFFAF0', borderBottomColor: '#FAF0E6' }}>
      <div className="mx-8 md:mx-16 lg:mx-20 xl:mx-24 flex items-center justify-between">
        {/* Left: Brand (logo image + name) */}
        <div className="flex items-center space-x-3">
          <img
            src="/P-removebg-preview.png"
            alt="College logo"
            className="w-12 h-12 md:w-16 md:h-16 object-contain"
          />
          <div>
            <h1 className="text-xl font-serif text-college-navy">Pinak <span className="italic">Engineering</span> College</h1>
            <p className="text-xs text-muted-foreground">Excellence in Engineering Education</p>
          </div>
        </div>

        {/* Right: Links grouped with Admissions */}
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-college-navy hover:text-college-accent transition-colors font-medium">Home</a>
            <a href="#about" className="text-college-navy hover:text-college-accent transition-colors font-medium">About</a>
            <a href="#programs" className="text-college-navy hover:text-college-accent transition-colors font-medium">Programs</a>
            <a href="#campus" className="text-college-navy hover:text-college-accent transition-colors font-medium">Campus Life</a>
            <a href="#contact" className="text-college-navy hover:text-college-accent transition-colors font-medium">Contact</a>
          </div>
          <Button className="bg-college-navy hover:bg-college-charcoal text-white px-6 py-2 text-base font-medium rounded-md">
            Admissions
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;