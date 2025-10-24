import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container max-w-4xl mx-auto px-4 py-16 pb-32">
        <h1 className="text-4xl md:text-5xl font-bold text-accent mb-8">Privacy Policy</h1>
        
        <div className="space-y-6 text-foreground/80 leading-relaxed">
          <p className="text-sm text-foreground/60">Last Updated: {new Date().toLocaleDateString()}</p>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
            <p>
              We collect information that you provide directly to us when you register for our courses, 
              contact us, or use our services. This may include your name, email address, phone number, 
              and payment information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Provide, maintain, and improve our educational services</li>
              <li>Process your course registrations and payments</li>
              <li>Send you course-related information and updates</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share 
              your information with trusted service providers who assist us in operating our business, 
              conducting our services, or serving our students, as long as those parties agree to keep 
              this information confidential.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction. However, 
              no method of transmission over the internet or electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent for data processing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your experience on our website. 
              You can control cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at 
              info@expertaction.in or call us at +91 82372 20005.
            </p>
          </section>
        </div>
      </main>
      <Footer />
      <StickyCallButton />
    </div>
  );
};

export default PrivacyPolicy;
