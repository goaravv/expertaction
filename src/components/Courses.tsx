import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const courses = [
  {
    title: "Basic to Advanced Price Action",
    duration: "3 Months",
    fees: "₹25,000",
    features: [
      "Fundamental analysis basics",
      "Chart patterns & candlesticks",
      "Support & resistance levels",
      "Risk management strategies",
      "Live market analysis",
    ],
  },
  {
    title: "Nifty Options Trading",
    duration: "2 Months",
    fees: "₹20,000",
    features: [
      "Options basics & Greeks",
      "Option strategies",
      "Nifty trend analysis",
      "Intraday options trading",
      "Practical trading sessions",
    ],
  },
  {
    title: "Advanced Intraday Trading",
    duration: "2 Months",
    fees: "₹22,000",
    features: [
      "Advanced scalping techniques",
      "Time frame analysis",
      "Volume price analysis",
      "High-probability setups",
      "Real-time trade execution",
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
                <CardTitle className="text-2xl text-accent">
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
                      <span className="text-foreground/80">{feature}</span>
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
