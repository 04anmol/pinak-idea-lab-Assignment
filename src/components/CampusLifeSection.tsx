import { Button } from "@/components/ui/button";
import { useState, useMemo } from "react";
import { Users, BookOpen, Calendar, Trophy, Heart, GraduationCap, Building2, Wifi, Coffee } from "lucide-react";

const images = [
  "/cl01.jpg",
  "/cl02.jpg",
  "/cl03.jpg",
  "/cl04.jpg"
];

const CARD_W = 720; // fixed for smooth transitions
const CARD_H = 420;

const CampusLifeSection = () => {
  const [order, setOrder] = useState<number[]>([0, 1, 2, 3]);

  const visible = useMemo(() => order.slice(0, 4), [order]);

  const onAdvance = () => {
    setOrder((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  };

  return (
    <section id="campus" className="py-20 mx-8 md:mx-16 lg:mx-20 xl:mx-24" style={{ backgroundColor: '#FFFAF0' }}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          {/* Stacked image carousel */}
          <div className="relative" style={{ height: CARD_H }}>
            {visible.map((idx, i) => (
              <img
                key={idx}
                src={images[idx]}
                alt={`Campus ${idx + 1}`}
                width={CARD_W}
                height={CARD_H}
                onClick={i === 0 ? onAdvance : undefined}
                className={`absolute top-0 left-0 h-full w-full object-cover rounded-xl shadow-md transition-all duration-800 cursor-pointer select-none ${
                  i === 0 ? "z-40" : i === 1 ? "z-30 -translate-x-8 -translate-y-8 scale-[0.95]" : i === 2 ? "z-20 -translate-x-16 -translate-y-16 scale-[0.90]" : "z-10 -translate-x-24 -translate-y-24 scale-[0.85]"
                }`}
                style={{ maxWidth: CARD_W }}
              />
            ))}
          </div>

          {/* Text column spanning image height */}
          <div className="flex flex-col justify-between" style={{ height: CARD_H }}>
            <div>
              <h2 className="text-3xl font-serif text-college-navy mb-4">Experience Campus Life</h2>
              <p className="text-muted-foreground mb-6">
                Our campus offers state-of-the-art facilities, vibrant clubs, and diverse events that foster learning and community.
                Tap the image to explore more moments – each click reveals the next scene.
              </p>
              
              {/* Icons section */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-college-navy" />
                  <span className="text-sm text-muted-foreground">Diverse Community</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BookOpen className="w-5 h-5 text-college-navy" />
                  <span className="text-sm text-muted-foreground">Academic Excellence</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-college-navy" />
                  <span className="text-sm text-muted-foreground">Year-round Events</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Trophy className="w-5 h-5 text-college-navy" />
                  <span className="text-sm text-muted-foreground">Achievement Recognition</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="w-5 h-5 text-college-navy" />
                  <span className="text-sm text-muted-foreground">Supportive Environment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="w-5 h-5 text-college-navy" />
                  <span className="text-sm text-muted-foreground">Quality Education</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Building2 className="w-5 h-5 text-college-navy" />
                  <span className="text-sm text-muted-foreground">Modern Infrastructure</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Wifi className="w-5 h-5 text-college-navy" />
                  <span className="text-sm text-muted-foreground">Smart Campus</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Coffee className="w-5 h-5 text-college-navy" />
                  <span className="text-sm text-muted-foreground">Social Spaces</span>
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              <Button className="bg-college-navy hover:bg-college-charcoal text-white px-6 py-2 text-base font-medium rounded-md">Explore Campus</Button>
              <Button variant="outline" className="border-college-navy text-college-navy hover:bg-college-navy hover:text-white px-6 py-2 text-base font-medium rounded-md">Plan a Visit</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusLifeSection;