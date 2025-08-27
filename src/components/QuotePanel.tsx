import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const quotes = [
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
    title: "Innovator & Entrepreneur",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
  },
  {
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
    title: "Co-founder of Apple",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    title: "Former First Lady & Diplomat",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b550?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
  },
  {
    text: "Engineering is not only study of 45 subjects but it is moral studies of intellectual life.",
    author: "Prakhar Srivastav",
    title: "Engineering Student",
    image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
  },
  {
    text: "Scientists study the world as it is, engineers create the world that never was.",
    author: "Theodore von Kármán",
    title: "Aerospace Engineer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
  }
];

const QuotePanel = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const quote = quotes[currentQuote];

  return (
    <section className="py-24 bg-college-navy">
      <div className="container mx-auto px-6">
        <Card className="max-w-5xl mx-auto bg-white border-0 shadow-xl">
          <CardContent className="p-16 text-center">
            <div className="w-16 h-16 bg-college-gray rounded-full flex items-center justify-center mx-auto mb-8">
              <Quote className="h-8 w-8 text-college-navy" />
            </div>
            
            <blockquote className="text-xl md:text-2xl font-light text-college-navy mb-12 leading-relaxed max-w-3xl mx-auto">
              "{quote.text}"
            </blockquote>
            
            <div className="flex items-center justify-center space-x-6">
              <div className="relative">
                <img
                  src={quote.image}
                  alt={quote.author}
                  className="w-24 h-24 rounded-full grayscale border-4 border-college-silver object-cover shadow-sm"
                />
              </div>
              
              <div className="text-left">
                <p className="text-lg font-semibold text-college-navy">
                  {quote.author}
                </p>
                <p className="text-muted-foreground">
                  {quote.title}
                </p>
              </div>
            </div>
            
            <div className="flex justify-center space-x-3 mt-12">
              {quotes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuote(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentQuote ? 'bg-college-navy' : 'bg-college-silver'
                  }`}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default QuotePanel;