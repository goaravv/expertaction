import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4 pb-32">
        <div className="container max-w-2xl mx-auto text-center">
          <div className="bg-card border border-accent/20 rounded-lg p-12 space-y-6">
            <h1 className="text-6xl font-bold text-accent mb-4">404</h1>
            <p className="text-2xl text-foreground/90 mb-4">Oops! Page not found</p>
            <p className="text-foreground/70 mb-6">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Button
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <a href="/">Return to Home</a>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
      <StickyCallButton />
    </div>
  );
};

export default NotFound;
