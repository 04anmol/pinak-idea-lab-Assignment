import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Trophy, Lightbulb, Heart, Briefcase, Globe } from "lucide-react";

const campusFeatures = [
  {
    icon: Users,
    title: "Student Organizations",
    description: "Join 100+ clubs including robotics teams, programming societies, and engineering competitions."
  },
  {
    icon: Trophy,
    title: "Research Excellence",
    description: "Participate in groundbreaking research projects with world-class faculty and industry partners."
  },
  {
    icon: Lightbulb,
    title: "Innovation Labs",
    description: "Access to state-of-the-art makerspaces, 3D printing labs, and prototyping facilities."
  },
  {
    icon: Heart,
    title: "Wellness & Recreation",
    description: "Modern fitness centers, sports facilities, and comprehensive student health services."
  },
  {
    icon: Briefcase,
    title: "Career Services",
    description: "Industry connections, internship programs, and career guidance with 95% job placement rate."
  },
  {
    icon: Globe,
    title: "Global Programs",
    description: "Study abroad opportunities and international exchange programs with partner universities."
  }
];

const CampusLifeSection = () => {
  return (
    <section id="campus" className="py-24 bg-college-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-light text-college-navy mb-6">
            Campus Life
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Experience a vibrant academic community where excellence meets opportunity. 
            Our campus provides comprehensive support for intellectual and personal development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {campusFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow duration-300 p-8 text-center">
                <div className="w-16 h-16 bg-college-gray border border-college-silver rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="h-8 w-8 text-college-navy" />
                </div>
                <h3 className="text-lg font-semibold text-college-navy mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
        
        <div className="bg-white rounded-lg p-12 text-center shadow-sm border border-college-silver max-w-4xl mx-auto">
          <h3 className="text-2xl font-light text-college-navy mb-6">
            Ready to Begin Your Journey?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Take the next step towards an exceptional engineering education. 
            Connect with our admissions team to learn more about opportunities at Pinak Engineering College.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-college-navy hover:bg-college-charcoal text-white px-8 py-3">
              Schedule Campus Tour
            </Button>
            <Button variant="outline" className="border-college-navy text-college-navy hover:bg-college-navy hover:text-white px-8 py-3">
              Contact Admissions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusLifeSection;