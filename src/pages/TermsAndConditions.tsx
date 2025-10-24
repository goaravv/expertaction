import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container max-w-4xl mx-auto px-4 py-16 pb-32">
        <h1 className="text-4xl md:text-5xl font-bold text-accent mb-8">Terms and Conditions</h1>
        
        <div className="space-y-6 text-foreground/80 leading-relaxed">
          <p className="text-sm text-foreground/60">Last Updated: {new Date().toLocaleDateString()}</p>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Acceptance of Terms</h2>
            <p>
              By enrolling in any course or using any service provided by ExpertAction Trading Academy, 
              you agree to be bound by these Terms and Conditions. If you do not agree to these terms, 
              please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Course Enrollment and Payment</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Course fees must be paid in full before the commencement of the course</li>
              <li>Payment methods accepted include bank transfer, UPI, and other approved methods</li>
              <li>Course fees are non-refundable except as specified in our refund policy</li>
              <li>The academy reserves the right to modify course fees with prior notice</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Refund Policy</h2>
            <p>
              We offer a 100% Money Back Guarantee* subject to the following conditions:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Refund requests must be made within 7 days of course commencement</li>
              <li>Student must have attended less than 25% of the course sessions</li>
              <li>Valid reason must be provided for the refund request</li>
              <li>Refunds will be processed within 14 business days of approval</li>
              <li>Course materials must be returned if applicable</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Course Attendance</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Students are expected to attend all scheduled sessions</li>
              <li>For online courses, access credentials are personal and non-transferable</li>
              <li>The academy reserves the right to reschedule sessions with prior notice</li>
              <li>Certificates will be issued only upon completion of minimum attendance requirements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Intellectual Property</h2>
            <p>
              All course materials, including but not limited to videos, documents, presentations, and 
              software, are the intellectual property of ExpertAction Trading Academy. Students may not 
              reproduce, distribute, or share course materials without written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Code of Conduct</h2>
            <p>Students are expected to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Maintain professional behavior during all sessions</li>
              <li>Respect instructors and fellow students</li>
              <li>Not engage in any illegal trading practices</li>
              <li>Not misrepresent themselves or the academy</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Limitation of Liability</h2>
            <p>
              ExpertAction Trading Academy shall not be liable for any trading losses, damages, or 
              expenses arising from the use of information provided in our courses. Students trade at 
              their own risk and are solely responsible for their trading decisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Termination</h2>
            <p>
              The academy reserves the right to terminate a student's enrollment for violation of these 
              terms, disruptive behavior, or any illegal activities. No refund will be provided in case 
              of termination due to misconduct.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Modifications</h2>
            <p>
              We reserve the right to modify these Terms and Conditions at any time. Changes will be 
              effective immediately upon posting on our website. Continued use of our services after 
              changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Contact Information</h2>
            <p>
              For questions regarding these Terms and Conditions, please contact us at 
              info@expertaction.in or call +91 82372 20005.
            </p>
          </section>
        </div>
      </main>
      <Footer />
      <StickyCallButton />
    </div>
  );
};

export default TermsAndConditions;
