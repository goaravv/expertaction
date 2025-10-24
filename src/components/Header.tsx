import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.webp";

const Header = () => {
  const phoneNumber = "+918237220005";

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-accent/20">
      <div className="container max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img src={logo} alt="ExpertAction Logo" className="w-12 h-12 md:w-16 md:h-16" />
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl font-bold text-accent">ExpertAction</h1>
              <p className="text-xs text-foreground/70">Trading Academy</p>
            </div>
          </a>
          
          <Button
            asChild
            variant="default"
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            <a href={`tel:${phoneNumber}`} className="flex items-center gap-2">
              <Phone className="w-4 h-4 md:w-5 md:h-5" />
              <span className="hidden sm:inline">Call Now</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
