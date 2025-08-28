import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";
import { useState } from "react";

const quotes = [
  {
    text: "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution.",
    author: "Albert Einstein",
    title: "Theoretical physicist & Nobel laureate",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg"
  },
  {
    text: "If you want to find the secrets of the universe, think in terms of energy, frequency and vibration.",
    author: "Nikola Tesla",
    title: "Electrical engineer & inventor",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/d/d4/N.Tesla.JPG"
  },
  {
    text: "There was no choice but to be pioneers – we had to solve problems no one had solved before.",
    author: "Margaret Hamilton",
    title: "Software engineer, Apollo Guidance Computer",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Margaret_Hamilton_-_restoration.jpg"
  },
  {
    text: "UNIX is very simple, it just needs a genius to understand its simplicity.",
    author: "Dennis Ritchie",
    title: "Computer scientist, creator of C & UNIX",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/2/23/Dennis_Ritchie_2011.jpg"
  },
  {
    text: "All creative people want to do the unexpected.",
    author: "Hedy Lamarr",
    title: "Inventor of spread‑spectrum concepts",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Hedy_Lamarr_in_The_Heavenly_Body_1944.jpg"
  },
  {
    text: "I am opposed to the laying down of rules and laws as fetters to genius and progress.",
    author: "Isambard Kingdom Brunel",
    title: "Civil & mechanical engineer",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Isambard_Kingdom_Brunel%2C_1857.jpg"
  }
];

const QuotePanel = () => {
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());

  const handleImageError = (index: number) => {
    setFailedImages(prev => new Set(prev).add(index));
  };

  return (
    <section className="py-16 mx-16 md:mx-24 lg:mx-32 xl:mx-40 rounded-3xl overflow-hidden" style={{ backgroundColor: '#FDFBF7' }}>
      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <Card key={i} className="bg-[#7B1121] hover:bg-[#FDFBF7] border border-white/10 hover:border-gray-200 rounded-2xl text-white/90 hover:text-gray-700 transition-all duration-300 ease-in-out cursor-pointer group">
              <CardContent className="p-6 flex flex-col h-full">
                <p className="text-sm leading-relaxed mb-6 transition-colors duration-300">"{q.text}"</p>
                <div className="mt-auto flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center overflow-hidden">
                    {q.avatar && !failedImages.has(i) ? (
                      <img 
                        src={q.avatar} 
                        alt={q.author} 
                        className="w-full h-full object-cover"
                        onError={() => handleImageError(i)}
                      />
                    ) : (
                      <Users className="w-4 h-4 text-white/60" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white group-hover:text-gray-700 transition-colors duration-300">{q.author}</p>
                    <p className="text-xs text-white/60 group-hover:text-gray-700 transition-colors duration-300">{q.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuotePanel;