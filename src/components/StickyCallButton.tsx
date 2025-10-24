import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const StickyCallButton = () => {
  const handleContactClick = () => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-accent via-accent to-gold-light shadow-2xl border-t-4 border-accent-foreground/30">
      <div className="container max-w-6xl mx-auto py-4 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="text-center md:text-left">
            <h3 className="text-accent-foreground font-bold text-lg md:text-xl mb-1">
              Learn the Stock Market
            </h3>
            <p className="text-accent-foreground/90 text-sm md:text-base">
              Start your trading journey with expert guidance
            </p>
          </div>
          <Button
            onClick={handleContactClick}
            size="lg"
            className="w-full md:w-auto bg-accent-foreground text-accent hover:bg-accent-foreground/90 font-bold text-base md:text-lg px-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105 animate-pulse"
          >
            Contact Now
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyCallButton;
