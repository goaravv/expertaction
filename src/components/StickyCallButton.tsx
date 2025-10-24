import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const StickyCallButton = () => {
  const phoneNumber = "+918237220005";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-accent/95 backdrop-blur supports-[backdrop-filter]:bg-accent/90 py-3 px-4 shadow-lg border-t-2 border-accent-foreground/20">
      <div className="container max-w-6xl mx-auto">
        <Button
          asChild
          size="lg"
          className="w-full bg-accent-foreground text-accent hover:bg-accent-foreground/90 font-bold text-base md:text-lg"
        >
          <a href={`tel:${phoneNumber}`} className="flex items-center justify-center gap-3">
            <Phone className="w-5 h-5 md:w-6 md:h-6 animate-pulse" />
            <span>Call Now: {phoneNumber}</span>
          </a>
        </Button>
      </div>
    </div>
  );
};

export default StickyCallButton;
