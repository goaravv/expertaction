import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo.webp";

const Hero = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store form data or send to backend
    console.log("Form submitted:", formData);
    navigate("/thank-you");
  };

  return (
    <section className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center md:text-left space-y-6">
            <img 
              src={logo} 
              alt="ExpertAction Logo" 
              className="w-32 h-32 mx-auto md:mx-0"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent leading-tight">
              ExpertAction Price Action Trading Academy
            </h1>
            <p className="text-xl md:text-2xl text-foreground/90">
              Learn professional price action trading with certified trainers.
            </p>
            <p className="text-muted-foreground text-lg">
              ✓ 1500+ students trained successfully
            </p>
          </div>

          {/* Right side - Form */}
          <div className="bg-card border border-accent/20 rounded-lg p-8 shadow-2xl">
            <h2 className="text-2xl font-bold text-accent mb-6 text-center">
              Start Your Trading Journey
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">
                  Full Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="bg-secondary border-border text-foreground"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="bg-secondary border-border text-foreground"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                  className="bg-secondary border-border text-foreground"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg py-6"
              >
                Get Started Now
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
