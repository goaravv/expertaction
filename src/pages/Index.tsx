import Hero from "@/components/Hero";
import About from "@/components/About";
import Courses from "@/components/Courses";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="antialiased">
      <Hero />
      <About />
      <Courses />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
