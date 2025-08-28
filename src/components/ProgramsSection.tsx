import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Monitor, Cog, Zap, Building, ArrowRight, Users, Clock, Award, BookOpen, Briefcase, Globe, Target, Lightbulb, Shield, Leaf, Code, Bot, Gauge, Wrench, Cpu, Database, Network, Battery, Sun, Factory, HardHat, Ruler, TreePine } from "lucide-react";
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
    highlights: ["AI & Machine Learning", "Full-Stack Development", "Cybersecurity"],
    duration: "4 Years",
    students: "180+",
    placement: "95%",
    features: ["Industry Projects", "Hackathons", "Tech Workshops"],
    featureIcons: [Code, Database, Network]
  },
  {
    id: 2,
    title: "Mechanical Engineering",
    description: "Design and build the machines of tomorrow with robotics, thermodynamics, and advanced manufacturing techniques.",
    icon: Cog,
    image: mechanicalImg,
    highlights: ["Robotics & Automation", "Advanced Materials", "Sustainable Design"],
    duration: "4 Years",
    students: "150+",
    placement: "92%",
    features: ["Design Competitions", "Lab Work", "Industry Visits"],
    featureIcons: [Bot, Wrench, Factory]
  },
  {
    id: 3,
    title: "Civil Engineering",
    description: "Build sustainable infrastructure with modern construction techniques, environmental engineering, and smart cities.",
    icon: Building,
    image: civilImg,
    highlights: ["Sustainable Infrastructure", "Smart Cities", "Environmental Engineering"],
    duration: "4 Years",
    students: "120+",
    placement: "90%",
    features: ["Site Visits", "CAD Training", "Green Building"],
    featureIcons: [HardHat, Ruler, TreePine]
  },
  {
    id: 4,
    title: "Electrical Engineering",
    description: "Power the future with expertise in electronics, power systems, telecommunications, and renewable energy.",
    icon: Zap,
    image: electricalImg,
    highlights: ["Power Systems", "Electronics Design", "Renewable Energy"],
    duration: "4 Years",
    students: "140+",
    placement: "94%",
    features: ["Circuit Design", "Power Labs", "Energy Projects"],
    featureIcons: [Cpu, Battery, Sun]
  }
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-16 mx-8 md:mx-16 lg:mx-20 xl:mx-24 rounded-3xl overflow-hidden mt-16 mb-16" style={{ backgroundColor: '#1a1a1a' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-white mb-2">
            Academic Programs
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Discover our comprehensive engineering programs designed to prepare students 
            for leadership in an evolving technological landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
                          return (
                <div key={program.id} className={`bg-${index === 0 || index === 3 ? 'gray-800' : '[#6e1e2a]'} rounded-xl overflow-hidden w-full shadow-lg`}> 
                {/* Image */}
                <div className="relative">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-3 left-3 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <IconComponent className={`h-6 w-6 ${index === 0 || index === 3 ? 'text-gray-800' : 'text-[#6e1e2a]'}`} />
                  </div>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className={`text-xs font-medium ${index === 0 || index === 3 ? 'text-gray-800' : 'text-[#6e1e2a]'}`}>{program.duration}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className={`text-lg md:text-xl font-semibold ${index === 0 ? 'text-gray-100' : 'text-white'}`}>
                      {program.title}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <Users className={`w-5 h-5 ${index === 0 ? 'text-gray-300' : 'text-white/70'}`} />
                      <span className={`text-sm font-semibold ${index === 0 ? 'text-gray-100' : 'text-white'}`}>{program.students}</span>
                    </div>
                  </div>
                  
                  <p className={`text-sm md:text-base mb-5 leading-relaxed ${index === 0 ? 'text-gray-200' : 'text-white/85'}`}>
                    {program.description}
                  </p>

                  {/* Stats Row */}
                  <div className="grid grid-cols-2 gap-4 mb-5">
                    <div className={`flex items-center space-x-3 rounded-lg p-3 ${index === 0 ? 'bg-gray-700' : 'bg-white/5'}`}>
                      <Award className={`w-5 h-5 ${index === 0 ? 'text-gray-300' : 'text-white/80'}`} />
                      <div>
                        <p className={`text-xs ${index === 0 ? 'text-gray-400' : 'text-white/60'}`}>Placement Rate</p>
                        <p className={`text-sm font-semibold ${index === 0 ? 'text-gray-100' : 'text-white'}`}>{program.placement}</p>
                      </div>
                    </div>
                    <div className={`flex items-center space-x-3 rounded-lg p-3 ${index === 0 ? 'bg-gray-700' : 'bg-white/5'}`}>
                      <Clock className={`w-5 h-5 ${index === 0 ? 'text-gray-300' : 'text-white/80'}`} />
                      <div>
                        <p className={`text-xs ${index === 0 ? 'text-gray-400' : 'text-white/60'}`}>Duration</p>
                        <p className={`text-sm font-semibold ${index === 0 ? 'text-gray-100' : 'text-white'}`}>{program.duration}</p>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-5">
                    <h4 className={`text-sm font-semibold mb-3 flex items-center ${index === 0 ? 'text-gray-100' : 'text-white'}`}>
                      <Target className={`w-4 h-4 mr-2 ${index === 0 ? 'text-gray-300' : 'text-white'}`} />
                      Key Areas
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {program.highlights.map((highlight, i) => (
                        <div key={i} className={`flex items-center text-xs md:text-sm ${index === 0 ? 'text-gray-200' : 'text-white/90'}`}>
                          <div className={`w-2 h-2 rounded-full mr-3 ${index === 0 ? 'bg-gray-300' : 'bg-white'}`} />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-5">
                    <h4 className={`text-sm font-semibold mb-3 flex items-center ${index === 0 ? 'text-gray-100' : 'text-white'}`}>
                      <Lightbulb className={`w-4 h-4 mr-2 ${index === 0 ? 'text-gray-300' : 'text-white'}`} />
                      Program Features
                    </h4>
                    <div className="flex flex-wrap gap-2 items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {program.features.map((feature, i) => {
                          const FeatureIcon = program.featureIcons[i];
                          return (
                            <div key={i} className={`flex items-center space-x-2 rounded-lg px-3 py-2 ${index === 0 ? 'bg-gray-700' : 'bg-white/10'}`}>
                              <FeatureIcon className={`w-4 h-4 ${index === 0 ? 'text-gray-300' : 'text-white/80'}`} />
                              <span className={`text-xs ${index === 0 ? 'text-gray-200' : 'text-white/90'}`}>{feature}</span>
                            </div>
                          );
                        })}
                      </div>
                      <Button className={`bg-white hover:bg-white/90 px-6 py-2 text-base font-medium rounded-md ${index === 0 ? 'text-gray-800' : 'text-[#6e1e2a]'}`}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
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