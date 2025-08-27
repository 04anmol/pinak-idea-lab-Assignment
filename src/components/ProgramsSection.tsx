import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Monitor, Cog, Zap, Building, ArrowRight } from "lucide-react";
import computerScienceImg from "@/assets/computer-science.jpg";
import mechanicalImg from "@/assets/mechanical-engineering.jpg";
import electricalImg from "@/assets/electrical-engineering.jpg";
import civilImg from "@/assets/civil-engineering.jpg";

const programs = [
  {
    id: 1,
    title: "Computer Science & Engineering",
    description: "Master software development, AI, machine learning, and cybersecurity with hands-on projects and industry partnerships.",
    icon: Monitor,
    image: computerScienceImg,
    highlights: ["AI & Machine Learning", "Full-Stack Development", "Cybersecurity"]
  },
  {
    id: 2,
    title: "Mechanical Engineering",
    description: "Design and build the machines of tomorrow with robotics, thermodynamics, and advanced manufacturing techniques.",
    icon: Cog,
    image: mechanicalImg,
    highlights: ["Robotics & Automation", "Advanced Materials", "Sustainable Design"]
  },
  {
    id: 3,
    title: "Electrical Engineering",
    description: "Power the future with expertise in electronics, power systems, telecommunications, and renewable energy.",
    icon: Zap,
    image: electricalImg,
    highlights: ["Power Systems", "Electronics Design", "Renewable Energy"]
  },
  {
    id: 4,
    title: "Civil Engineering",
    description: "Build sustainable infrastructure with modern construction techniques, environmental engineering, and smart cities.",
    icon: Building,
    image: civilImg,
    highlights: ["Sustainable Infrastructure", "Smart Cities", "Environmental Engineering"]
  }
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-light text-college-navy mb-6">
            Academic Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover our comprehensive engineering programs designed to prepare students 
            for leadership in an evolving technological landscape.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {programs.map((program) => {
            const IconComponent = program.icon;
            return (
              <div key={program.id} className="group">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-college-navy/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <IconComponent className="h-6 w-6 text-college-navy" />
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-college-navy mb-4">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {program.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {program.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center text-sm text-college-charcoal">
                        <div className="w-1.5 h-1.5 bg-college-accent rounded-full mr-3" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="border-college-navy text-college-navy hover:bg-college-navy hover:text-white">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;