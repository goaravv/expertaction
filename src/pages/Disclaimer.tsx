import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";

const Disclaimer = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container max-w-4xl mx-auto px-4 py-16 pb-32">
        <h1 className="text-4xl md:text-5xl font-bold text-accent mb-8">Disclaimer</h1>
        
        <div className="space-y-6 text-foreground/80 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Educational Purpose Only</h2>
            <p>
              ExpertAction Trading Academy is solely focused on providing education and skill-building 
              in the field of trading and financial markets. All courses, materials, and training sessions 
              are designed for educational purposes only and should not be considered as financial advice 
              or investment recommendations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Risk Warning</h2>
            <p>
              Trading in financial markets, including stocks, derivatives, options, and futures, involves 
              substantial risk of loss and may not be suitable for all investors. Past performance of any 
              trading system or methodology is not necessarily indicative of future results. You could lose 
              some or all of your initial investment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">No Guarantee of Profits</h2>
            <p>
              We do not guarantee any returns, profits, or specific trading outcomes. The term "profitable 
              setups" or similar expressions used in our course materials refers to educational strategies 
              and trading concepts, and does not guarantee profitability in actual trading scenarios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Personal Responsibility</h2>
            <p>
              All investment and trading decisions should be made based on your own research, financial 
              situation, risk tolerance, and after consultation with qualified financial advisors. Students 
              are solely responsible for their own trading decisions and outcomes. The academy, its 
              instructors, and staff are not responsible for any trading losses incurred.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Regulatory Compliance</h2>
            <p>
              Students must ensure they comply with all applicable laws, regulations, and exchange rules 
              in their jurisdiction. It is the student's responsibility to understand and adhere to all 
              regulatory requirements related to trading activities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Market Conditions</h2>
            <p>
              Market conditions can change rapidly and unpredictably. Strategies taught in our courses 
              may perform differently in various market conditions. Historical performance does not 
              guarantee future results.
            </p>
          </section>
        </div>
      </main>
      <Footer />
      <StickyCallButton />
    </div>
  );
};

export default Disclaimer;
