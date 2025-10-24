import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Courses from "@/components/Courses";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";

const Index = () => {
  return (
    <div className="antialiased">
      <Header />
      <main className="pb-24">
        <Hero />
        <About />
        <Courses />
        <Contact />
      </main>
      <Footer />
      <StickyCallButton />
    </div>
  );
};

export default Index;
