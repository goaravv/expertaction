import { Mail } from "lucide-react";
import logo from "@/assets/logo.webp";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-accent/20 py-12 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src={logo} alt="ExpertAction Logo" className="w-20 h-20 mb-4" />
            <p className="text-foreground/80">
              ExpertAction Price Action Trading Academy - Building skilled traders 
              through professional education.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-accent mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-foreground/80 hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#courses" className="text-foreground/80 hover:text-accent transition-colors">
                  Courses
                </a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/80 hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-accent mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent/20 transition-colors"
              >
                <span className="text-accent font-bold">W</span>
              </a>
              <a
                href="mailto:info@expertaction.in"
                className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent/20 transition-colors"
              >
                <Mail className="w-5 h-5 text-accent" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="bg-card border border-accent/20 rounded-lg p-6">
            <p className="text-sm text-foreground/70 leading-relaxed">
              <strong className="text-accent">Disclaimer:</strong> This academy focuses 
              on education and skill-building in trading. Trading in financial markets 
              involves substantial risk of loss and may not be suitable for all investors. 
              Past performance is not indicative of future results. We do not guarantee 
              any returns, profits, or trading outcomes. The term "profitable setups" 
              refers to educational strategies and does not guarantee profitability. 
              All investment and trading decisions should be made based on your own research, 
              risk tolerance, and consultation with qualified financial advisors. Students 
              are responsible for their own trading decisions and outcomes.
            </p>
          </div>
        </div>

        <div className="text-center mt-8 text-foreground/60">
          <p>&copy; {new Date().getFullYear()} ExpertAction Trading Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
