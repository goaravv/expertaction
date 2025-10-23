import classroom1 from "@/assets/classroom-1.webp";
import classroom2 from "@/assets/classroom-2.webp";
import classroom3 from "@/assets/classroom-3.webp";

const About = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-6">
            About ExpertAction Academy
          </h2>
          <p className="text-lg md:text-xl text-foreground/90 max-w-3xl mx-auto leading-relaxed">
            ExpertAction is India's premier price action trading academy, dedicated to 
            transforming aspiring traders into skilled professionals. With certified 
            trainers and a proven curriculum, we focus on education and skill-building 
            rather than unrealistic promises.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-2xl font-bold text-accent mb-3">
                Professional Training
              </h3>
              <p className="text-foreground/80">
                Learn from NSE-certified trainers with real market experience. Our 
                structured approach ensures you understand the fundamentals before 
                moving to advanced strategies.
              </p>
            </div>
            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-2xl font-bold text-accent mb-3">
                Practical Approach
              </h3>
              <p className="text-foreground/80">
                We focus on real-world trading scenarios with live market analysis. 
                Our state-of-the-art trading labs provide hands-on experience with 
                professional tools.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src={classroom1}
              alt="Trading classroom"
              className="rounded-lg w-full h-48 object-cover border border-accent/20"
            />
            <img
              src={classroom2}
              alt="Students learning"
              className="rounded-lg w-full h-48 object-cover border border-accent/20"
            />
            <img
              src={classroom3}
              alt="Trading setup"
              className="rounded-lg w-full h-48 object-cover col-span-2 border border-accent/20"
            />
          </div>
        </div>

        <div className="bg-card border border-accent/20 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-accent mb-6 text-center">
            Why Choose ExpertAction?
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">1500+</div>
              <p className="text-foreground/80">Students Trained</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <p className="text-foreground/80">Practical Learning</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">NSE</div>
              <p className="text-foreground/80">Certified Trainers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
