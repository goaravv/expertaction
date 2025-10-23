import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const courses = [
  {
    title: "Basic to Advance Price Action Intraday",
    duration: "2 Days (Offline) / 10 Days (Online)",
    fees: "₹20,000",
    features: [
      "Stock market psychology & trading introduction",
      "How to select winning stocks in intraday trading",
      "Importance of levels",
      "Expert Entry Set up 2",
      "Dynamic level entry set up",
      "Dynamic Micro SL (Stop loss) & Exit",
      "Market structures - Pure price action reading",
      "Trend analysis & multiple time frame analysis",
      "Risk management strategies",
    ],
  },
  {
    title: "Nifty Option Trading Special Course",
    duration: "15 Days (Online & Offline)",
    fees: "₹50,000",
    features: [
      "Nifty option trading intraday strategy",
      "Nifty importance of levels",
      "Micro SL Entry Set up 5",
      "Professional high-probability setups",
      "Pure price action analysis",
      "Trend analysis & multiple time frame analysis",
      "Risk management techniques",
      "Live trading sessions (1 week)",
    ],
  },
  {
    title: "Future Expert Pure Intraday",
    duration: "30 Days",
    fees: "₹1,00,000",
    features: [
      "Professional high-probability setups",
      "Expert Entry Set up 11",
      "Dynamic level entry set up",
      "Dynamic Micro SL techniques",
      "Live trading sessions (1 week)",
      "Dynamic level with software",
      "Lifetime software access",
      "Advanced risk management",
    ],
  },
];

const Courses = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">
            Our Courses
          </h2>
          <p className="text-lg text-foreground/80">
            Choose the program that fits your trading goals
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="bg-card border-accent/20 hover:border-accent/40 transition-all duration-300"
            >
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl text-accent leading-tight">
                  {course.title}
                </CardTitle>
                <CardDescription className="text-foreground/70">
                  Duration: {course.duration}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center py-4 border-y border-border">
                  <div className="text-4xl font-bold text-accent">
                    {course.fees}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    One-time payment
                  </p>
                </div>
                <ul className="space-y-3">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Enroll Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 bg-card border-2 border-accent/30 rounded-lg p-6 text-center">
          <p className="text-accent font-bold text-lg mb-2">
            100% Money Back Guarantee*
          </p>
          <p className="text-sm text-foreground/70">
            *Terms and conditions apply. Contact us for complete guarantee details.
          </p>
        </div>

        <div className="mt-16 bg-card border border-accent/20 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-accent mb-6 text-center">
            Learn from Expert Traders
          </h3>
          <div className="aspect-video max-w-4xl mx-auto">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Vv1ZmgbV3G8"
              title="ExpertAction Trading Academy"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
