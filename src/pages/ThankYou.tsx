import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";
import logo from "@/assets/logo.webp";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Header />
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4 pb-32">
        <div className="container max-w-2xl mx-auto text-center">
          <img 
            src={logo} 
            alt="ExpertAction Logo" 
            className="w-24 h-24 mx-auto mb-8"
          />
          <div className="bg-card border border-accent/20 rounded-lg p-12 space-y-6">
            <CheckCircle className="w-20 h-20 text-accent mx-auto" />
            <h1 className="text-4xl font-bold text-accent">
              Thank You!
            </h1>
            <p className="text-xl text-foreground/90">
              Your submission has been received successfully.
            </p>
            <p className="text-foreground/80">
              Our team will contact you shortly to discuss your trading journey 
              and help you choose the best course for your goals.
            </p>
            <div className="pt-6">
              <Button
                onClick={() => navigate("/")}
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Return to Home
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <StickyCallButton />
    </div>
  );
};

export default ThankYou;
