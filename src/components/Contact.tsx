import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-foreground/80">
            Get in touch with us for more information
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-card border border-accent/20 rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-accent mb-2">Office Address</h3>
            <p className="text-foreground/80">
              Flat No. 1004, 10th Floor, VT P Nation, Kharadi Manjari Road, 
              VTP Township Manjari, Khurd, Pune, Maharashtra - 412307
            </p>
          </div>

          <div className="bg-card border border-accent/20 rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-accent mb-2">Phone</h3>
            <p className="text-foreground/80">
              <a href="tel:+919876543210" className="hover:text-accent transition-colors">
                +91 98765 43210
              </a>
            </p>
          </div>

          <div className="bg-card border border-accent/20 rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-accent mb-2">Email</h3>
            <p className="text-foreground/80">
              <a 
                href="mailto:info@expertaction.in" 
                className="hover:text-accent transition-colors"
              >
                info@expertaction.in
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
